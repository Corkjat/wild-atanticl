import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: '0z0t2ayg',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
})

const IMAGES_DIR = path.resolve('./frontend/public/images')

async function uploadImage(filePath, filename) {
  const buffer = fs.readFileSync(filePath)
  const ext = path.extname(filename).slice(1).toLowerCase()
  const contentType = ext === 'png' ? 'image/png' : 'image/jpeg'
  const asset = await client.assets.upload('image', buffer, { filename, contentType })
  console.log(`  ✓ Uploaded ${filename}`)
  return asset
}

function imageRef(asset, key) {
  return {
    _type: 'image',
    _key: key || Math.random().toString(36).slice(2, 10),
    asset: { _type: 'reference', _ref: asset._id },
  }
}

async function main() {
  console.log('\n=== 1. Delete orphaned documents ===')

  // Delete all blogPost documents
  const blogIds = await client.fetch('*[_type == "blogPost"]._id')
  for (const id of blogIds) {
    await client.delete(id)
  }
  console.log(`  ✓ Deleted ${blogIds.length} blogPost documents`)

  // Delete all rate documents
  const rateIds = await client.fetch('*[_type == "rate"]._id')
  for (const id of rateIds) {
    await client.delete(id)
  }
  console.log(`  ✓ Deleted ${rateIds.length} rate documents`)

  // Delete the "rates" page document
  const ratesPage = await client.fetch('*[_type == "page" && slug.current == "rates"][0]._id')
  if (ratesPage) {
    await client.delete(ratesPage)
    console.log(`  ✓ Deleted "rates" page`)
  }

  console.log('\n=== 2. Fix page slugs ===')

  // Landing page: slug "home" stays
  // But let's rename to match /  route -- we'll use "home"
  const homePage = await client.fetch('*[_type == "page" && slug.current == "home"][0]')
  if (homePage) {
    console.log(`  ✓ Home page already has slug "home"`)
  }

  // House Description: fix slug from "House Description " to "house-description"
  const housePages = await client.fetch('*[_type == "page" && title match "House Description*"]')
  for (const hp of housePages) {
    await client.patch(hp._id).set({
      slug: { _type: 'slug', current: 'house-description' },
      title: 'House Description',
    }).commit()
    console.log(`  ✓ Fixed House Description slug`)
  }

  // Activities: fix slug from "things-to-do-in-inch" to "activities"
  const activitiesPages = await client.fetch('*[_type == "page" && (slug.current == "things-to-do-in-inch" || slug.current == "things-to-do-in-castlegregory")]')
  for (const ap of activitiesPages) {
    await client.patch(ap._id).set({
      slug: { _type: 'slug', current: 'activities' },
      title: 'Activities in the Area',
    }).commit()
    console.log(`  ✓ Fixed Activities slug`)
  }

  // Enquiry: fix slug from "make-an-enquiry" to "enquiry"
  const enquiryPages = await client.fetch('*[_type == "page" && slug.current == "make-an-enquiry"]')
  for (const ep of enquiryPages) {
    await client.patch(ep._id).set({
      slug: { _type: 'slug', current: 'enquiry' },
      title: 'Make an Enquiry',
    }).commit()
    console.log(`  ✓ Fixed Enquiry slug`)
  }

  console.log('\n=== 3. Populate Landing page (home) ===')

  const homePageId = await client.fetch('*[_type == "page" && slug.current == "home"][0]._id')
  if (homePageId) {
    await client.patch(homePageId).set({
      headline: 'Welcome to the Wild Atlantic Way Cottage',
      subheadline: 'A modern and newly refurbished cottage on the Dingle Peninsula, between Beenoskee mountain and the Atlantic Ocean.',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.8!2d-10.05!3d52.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzEyLjAiTiAxMMKwMDMnMDAuMCJX!5e0!3m2!1sen!2sie!4v1600000000000!5m2!1sen!2sie',
    }).commit()
    console.log(`  ✓ Landing page populated (headline, subheadline, map URL)`)
  }

  console.log('\n=== 4. Upload Activity images ===')

  const activitiesPageId = await client.fetch('*[_type == "page" && slug.current == "activities"][0]._id')
  if (activitiesPageId) {
    const activityImgs = [
      { file: 'windsurfing-kerry.jpg', alt: 'Windsurfing Kerry' },
      { file: 'standing-stone.jpg', alt: 'Standing stone' },
      { file: 'kerry-kitesurfing.jpg', alt: 'Kerry kitesurfing' },
      { file: 'diving-in-kerry.jpg', alt: 'Diving in Kerry' },
      { file: 'paddleboarding-kerry.jpg', alt: 'Paddleboarding Kerry' },
      { file: 'beach-horseriding.jpg', alt: 'Beach horseriding' },
      { file: 'glentenassig-forest-park.jpg', alt: 'Glentenassig Forest Park' },
      { file: 'kitesurfing-kerry.jpg', alt: 'Kitesurfing Kerry' },
    ]
    const uploaded = []
    for (const a of activityImgs) {
      const full = `${IMAGES_DIR}/${a.file}`
      if (fs.existsSync(full)) {
        const asset = await uploadImage(full, a.file)
        uploaded.push({
          _type: 'object',
          _key: Math.random().toString(36).slice(2, 10),
          image: imageRef(asset),
          alt: a.alt,
        })
      }
    }
    await client.patch(activitiesPageId).set({ activityImages: uploaded }).commit()
    console.log(`  ✓ Uploaded ${uploaded.length} activity images`)
  }

  console.log('\n=== 5. Verify final state ===')
  const finalPages = await client.fetch('*[_type == "page"]{_id, title, "slug": slug.current}')
  console.log('PAGES:', JSON.stringify(finalPages, null, 2))
  const typeCounts = await client.fetch(`{
    "pages": count(*[_type == "page"]),
    "testimonials": count(*[_type == "testimonial"]),
    "gallery": count(*[_type == "galleryImage"]),
    "blogPost": count(*[_type == "blogPost"]),
    "rate": count(*[_type == "rate"])
  }`)
  console.log('COUNTS:', JSON.stringify(typeCounts, null, 2))
  console.log('\n=== Done! ===')
}

main().catch(console.error)
