import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: 'xb9llqp5',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
})

const IMAGES_DIR = path.resolve('./frontend/public/images')

async function uploadImage(filePath, filename) {
  const buffer = fs.readFileSync(filePath)
  const ext = path.extname(filename).slice(1)
  const contentType = ext === 'png' ? 'image/png' : 'image/jpeg'

  try {
    const asset = await client.assets.upload('image', buffer, {
      filename,
      contentType,
    })
    console.log(`  ✓ Uploaded: ${filename} -> ${asset._id}`)
    return asset
  } catch (err) {
    console.error(`  ✗ Failed: ${filename} - ${err.message}`)
    return null
  }
}

async function uploadAndPatch(filePath, filename, docId, fieldPath) {
  const asset = await uploadImage(filePath, filename)
  if (!asset) return null

  await client.patch(docId).set({
    [fieldPath]: {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
    },
  }).commit()

  console.log(`  ✓ Patched ${docId} -> ${fieldPath}`)
  return asset
}

async function uploadArrayImages(filePath, filename, docId, fieldPath) {
  const asset = await uploadImage(filePath, filename)
  if (!asset) return null

  await client.patch(docId).append(fieldPath, [{
    _type: 'image',
    _key: Math.random().toString(36).slice(2, 10),
    asset: { _type: 'reference', _ref: asset._id },
  }]).commit()

  console.log(`  ✓ Appended to ${docId} -> ${fieldPath}`)
  return asset
}

async function main() {
  console.log('=== Uploading images to Sanity ===\n')

  // 1. Site Settings images
  console.log('--- Site Settings ---')
  const settingsDocs = await client.fetch('*[_type == "siteSettings"][0]._id')
  if (settingsDocs) {
    await uploadAndPatch(`${IMAGES_DIR}/logo.png`, 'logo.png', settingsDocs, 'logo')
    await uploadAndPatch(`${IMAGES_DIR}/footer-logo.png`, 'footer-logo.png', settingsDocs, 'footerLogo')
    await uploadAndPatch(`${IMAGES_DIR}/wild-atlantic-way-logo.png`, 'wild-atlantic-way-logo.png', settingsDocs, 'wildAtlanticWayLogo')
    await uploadAndPatch(`${IMAGES_DIR}/tripadvisor-logo.png`, 'tripadvisor-logo.png', settingsDocs, 'tripadvisorLogo')
  }

  // 2. Home page - hero slider images
  console.log('\n--- Home Page Hero Slider ---')
  const homePage = await client.fetch('*[_type == "page" && slug.current == "home"][0]._id')
  if (homePage) {
    await uploadAndPatch(`${IMAGES_DIR}/home-text.png`, 'home-text.png', homePage, 'heroOverlayImage')
    await uploadAndPatch(`${IMAGES_DIR}/map.jpg`, 'map.jpg', homePage, 'sidebarMap')
    const homeSliders = [
      'slider-beach.jpg', 'slider-exterior.jpg', 'slider-castlegregory.jpg',
      'slider-cottage.jpg', 'slider-kerry-coast.jpg'
    ]
    for (const img of homeSliders) {
      await uploadArrayImages(`${IMAGES_DIR}/${img}`, img, homePage, 'heroImages')
    }
  }

  // 3. Cottage page - hero slider images
  console.log('\n--- Cottage Page Hero Slider ---')
  const cottagePage = await client.fetch('*[_type == "page" && slug.current == "castlegregory-house-rental"][0]._id')
  if (cottagePage) {
    await uploadAndPatch(`${IMAGES_DIR}/perfect-home-text.png`, 'perfect-home-text.png', cottagePage, 'heroOverlayImage')
    await uploadAndPatch(`${IMAGES_DIR}/map.jpg`, 'map.jpg', cottagePage, 'sidebarMap')
    const cottageSliders = [
      'cottage-slider-living.jpg', 'cottage-slider-kitchen.jpg',
      'cottage-slider-bedroom.jpg', 'cottage-slider-exterior.jpg'
    ]
    for (const img of cottageSliders) {
      await uploadArrayImages(`${IMAGES_DIR}/${img}`, img, cottagePage, 'heroImages')
    }
  }

  // 4. Activities page
  console.log('\n--- Activities Page ---')
  const activitiesPage = await client.fetch('*[_type == "page" && slug.current == "things-to-do-in-castlegregory"][0]._id')
  if (activitiesPage) {
    await uploadAndPatch(`${IMAGES_DIR}/map.jpg`, 'map.jpg', activitiesPage, 'sidebarMap')
  }

  // 5. Rates page
  console.log('\n--- Rates Page ---')
  const ratesPage = await client.fetch('*[_type == "page" && slug.current == "rates"][0]._id')
  if (ratesPage) {
    const ratesSliders = ['slider-kerry-coast.jpg']
    for (const img of ratesSliders) {
      await uploadArrayImages(`${IMAGES_DIR}/${img}`, img, ratesPage, 'heroImages')
    }
  }

  // 6. Enquiry page
  console.log('\n--- Enquiry Page ---')
  const enquiryPage = await client.fetch('*[_type == "page" && slug.current == "make-an-enquiry"][0]._id')
  if (enquiryPage) {
    await uploadAndPatch(`${IMAGES_DIR}/map.jpg`, 'map.jpg', enquiryPage, 'sidebarMap')
    await uploadArrayImages(`${IMAGES_DIR}/brandon-bay.jpg`, 'brandon-bay.jpg', enquiryPage, 'heroImages')
  }

  // 7. Blog post images
  console.log('\n--- Blog Post Images ---')
  const blogImageMap = {
    'happy-st-patricks-day-2020': 'blog/st-patricks-day.jpg',
    'other-voices-2019': 'blog/other-voices.jpg',
    'eco-marine-tours-ventry': 'blog/eco-marine-tours.jpg',
    'brandon-bay-half-marathon-and-10k': 'blog/brandon-bay-10k.jpg',
    'dingle-adventure-race-2019': 'blog/dingle-adventure-race.jpg',
    'an-tintean-ceoil': 'blog/an-tintean-ceoil.jpg',
    'feile-na-bealtaine': 'blog/feile-na-bealtaine.jpg',
    'heritage-sites-in-kerry': 'blog/gallarus.jpg',
    '5-great-things-to-do-in-castlegregory': 'blog/5-great-things.jpg',
  }

  for (const [slug, imgPath] of Object.entries(blogImageMap)) {
    const docId = await client.fetch(`*[_type == "blogPost" && slug.current == "${slug}"][0]._id`)
    if (docId) {
      const fullPath = `${IMAGES_DIR}/${imgPath}`
      if (fs.existsSync(fullPath)) {
        await uploadAndPatch(fullPath, path.basename(imgPath), docId, 'image')
      } else {
        console.log(`  ⚠ File not found: ${fullPath}`)
      }
    } else {
      console.log(`  ⚠ Blog post not found: ${slug}`)
    }
  }

  // 8. Home page thumbnail images (bedroom, kitchen, sitting-room, exterior)
  console.log('\n--- Home Page Thumbnail Images ---')
  // These are additional images referenced on the home page, upload as general assets
  const homeThumbs = ['bedroom.jpg', 'kitchen.jpg', 'sitting-room.jpg', 'exterior.jpg']
  for (const img of homeThumbs) {
    await uploadImage(`${IMAGES_DIR}/${img}`, img)
  }

  // 9. Activities page images
  console.log('\n--- Activities Images ---')
  const activityImages = [
    'windsurfing-kerry.jpg', 'standing-stone.jpg', 'kerry-kitesurfing.jpg',
    'diving-in-kerry.jpg', 'paddleboarding-kerry.jpg', 'beach-horseriding.jpg',
    'glentenassig-forest-park.jpg', 'kitesurfing-kerry.jpg'
  ]
  for (const img of activityImages) {
    const fullPath = `${IMAGES_DIR}/${img}`
    if (fs.existsSync(fullPath)) {
      await uploadImage(fullPath, img)
    }
  }

  // 10. Gallery images
  console.log('\n--- Gallery Images ---')
  const galleryDir = `${IMAGES_DIR}/gallery`
  if (fs.existsSync(galleryDir)) {
    const galleryFiles = fs.readdirSync(galleryDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'))
    for (const file of galleryFiles) {
      const asset = await uploadImage(`${galleryDir}/${file}`, file)
      if (asset) {
        // Create galleryImage document
        await client.create({
          _type: 'galleryImage',
          title: file.replace(/[-_]/g, ' ').replace(/\.\w+$/, ''),
          alt: file.includes('local-area') ? 'The local area' : 'Wild Atlantic Way Cottage',
          category: 'cottage',
          image: {
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id },
          },
        })
      }
    }
  }

  console.log('\n=== Done! ===')
}

main().catch(console.error)
