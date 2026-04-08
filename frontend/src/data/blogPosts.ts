export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  category: string
  image: string
  alt: string
  excerpt: string
  content: string[]
}

const blogPosts: BlogPost[] = [
  {
    slug: 'happy-st-patricks-day-2020',
    title: "Happy St. Patrick's Day from the Wild Atlantic Way Cottage",
    date: 'Mar 17, 2020',
    author: 'WildAtlanticWayCottage',
    category: 'Blog',
    image: '/images/blog/st-patricks-day.jpg',
    alt: "St Patrick's Day Parade",
    excerpt:
      "Happy St. Patrick's Day from the Wild Atlantic Way Cottage! We hope you enjoy this special day wherever you are in the world.",
    content: [
      "Happy St. Patrick's Day from the Wild Atlantic Way Cottage!",
      "We hope you enjoy this special day wherever you are in the world. St. Patrick's Day is celebrated on the 17th of March every year and is one of the most widely celebrated national holidays in the world.",
      "The Dingle Peninsula has a rich tradition of celebrating St. Patrick's Day with parades, music, and festivities in the local towns and villages. Castlegregory and Dingle both host wonderful celebrations that bring the community together.",
      "We look forward to welcoming you to the Wild Atlantic Way Cottage and sharing the beauty of the Dingle Peninsula with you.",
    ],
  },
  {
    slug: 'other-voices-2019',
    title: 'Other Voices 2019',
    date: 'Oct 15, 2019',
    author: 'WildAtlanticWayCottage',
    category: 'Blog',
    image: '/images/blog/other-voices.jpg',
    alt: 'Other Voices',
    excerpt:
      'Other Voices is a unique music event that has brought some of the world\'s brightest artists to the most westerly tip of Europe since 2001.',
    content: [
      "Other Voices is a unique music event that has brought some of the world's brightest artists to the most westerly tip of Europe since 2001.",
      "The festival takes place in Dingle, which is only a 20-minute drive from the Wild Atlantic Way Cottage over the iconic Conor Pass. Other Voices has become one of Ireland's most iconic music events, attracting artists and music lovers from all over the world.",
      "The intimate setting of St. James' Church in Dingle provides a magical backdrop for performances that are broadcast on RTÉ television. The festival also features a programme of free music events in pubs and venues around the town.",
      "If you are planning to attend Other Voices, the Wild Atlantic Way Cottage provides the perfect base. You can enjoy the festival and return to the peace and tranquility of the cottage at the end of each night.",
    ],
  },
  {
    slug: 'eco-marine-tours-ventry',
    title: 'Eco Marine Tours – Dingle',
    date: 'Jul 22, 2019',
    author: 'WildAtlanticWayCottage',
    category: 'Blog',
    image: '/images/blog/eco-marine-tours.jpg',
    alt: 'Eco Marine Tours Ventry',
    excerpt:
      'Eco Marine Tours depart from Ventry, which is about a 30-minute drive from the Wild Atlantic Way Cottage, offering wildlife-centered tours around the Blasket Islands.',
    content: [
      "Eco Marine Tours depart from Ventry (Ceann Trá), which is about a 30-minute drive from the Wild Atlantic Way Cottage. These wildlife-centered tours explore the ruggedly beautiful Blasket archipelago.",
      "There are three different tour options available, including one that features a 3-hour stopover on the Great Blasket Island. The tours' main focus is wildlife, with a zoologist and/or wildlife guide accompanying the trips to help spot birdlife, cetaceans, and grey seals.",
      "The skipper is Mick Sheeran of the MV Blasket Princess, who has lived on the Great Blasket Island and spent most of his life fishing and taking passengers to and around the Blaskets. His knowledge of the area and its wildlife is second to none.",
      "This is a wonderful day trip to enjoy during your stay at the Wild Atlantic Way Cottage. The Blasket Islands are a truly magical place and the boat trip is an unforgettable experience.",
    ],
  },
  {
    slug: 'brandon-bay-half-marathon-and-10k',
    title: 'Brandon Bay Half Marathon and 10K',
    date: 'Jun 15, 2019',
    author: 'WildAtlanticWayCottage',
    category: 'Blog',
    image: '/images/blog/brandon-bay-10k.jpg',
    alt: 'Brandon Bay half marathon and 10K',
    excerpt:
      "The Brandon Bay Half Marathon and 10K takes place along Ireland's longest sandy beach. Entry fee is €30 for the 10km and €40 for the half marathon.",
    content: [
      "The Brandon Bay Half Marathon and 10K is an annual running event that takes place along the stunning Brandon Bay, which provides the backdrop for Ireland's longest sandy beach.",
      "The beach stretches back to Fermoyle on the west side and all the way to Fahamore in the Maharees on the eastern side. The entry fee is €30 for the 10km run and €40 for the half marathon. Included in the fee is an event tech t-shirt, bespoke event medal, race number and timing chip.",
      "The organisers of the event are Castlegregory Celtic Football Club, and every year there is an increase in the number of participants from all over Ireland. The event also attracts athletes from abroad.",
      "The Wild Atlantic Way Cottage is the perfect base for this event, as the starting point is virtually on our doorstep. After the race, you can relax and recover at the cottage and enjoy the beautiful surroundings.",
    ],
  },
  {
    slug: 'dingle-adventure-race-2019',
    title: 'Dingle Adventure Race 2019',
    date: 'May 20, 2019',
    author: 'WildAtlanticWayCottage',
    category: 'Blog',
    image: '/images/blog/dingle-adventure-race.jpg',
    alt: 'Dingle Adventure Race 2019',
    excerpt:
      'The Dingle Adventure Race 2019 involves hiking, running, and kayaking set in the magnificent landscapes of the Dingle Peninsula.',
    content: [
      "The Dingle Adventure Race is an annual multi-sport event that involves hiking, running, cycling and kayaking, all set in the magnificent landscapes of the Dingle Peninsula.",
      "The 2019 race took place on Saturday June 8th, with a course of 48km that offered breathtaking views. The course included cycling over the renowned Conor Pass and climbing Mount Brandon, one of Ireland's highest mountains.",
      "Participants also had the opportunity to kayak around Dingle Bay, described by many as a magical experience. The race attracts adventure enthusiasts from all over Ireland and beyond.",
      "The Wild Atlantic Way Cottage is ideally situated for those participating in or spectating at this event. The cottage is centrally located on the Dingle Peninsula, making it easy to access all the event locations.",
    ],
  },
  {
    slug: 'an-tintean-ceoil',
    title: 'An Tintean Ceoil',
    date: 'May 10, 2019',
    author: 'WildAtlanticWayCottage',
    category: 'Blog',
    image: '/images/blog/an-tintean-ceoil.jpg',
    alt: 'An Tintean Ceoil',
    excerpt:
      "An Tintean Ceoil is a traditional Irish music session held in the village of Cloghane on the Dingle Peninsula.",
    content: [
      "An Tintean Ceoil is a traditional Irish music session that takes place in the charming village of Cloghane on the Dingle Peninsula. It is run by and for locals, but visitors are very welcome to attend and enjoy the music.",
      "Cloghane is a small village nestled at the foot of Mount Brandon, and it has a rich tradition of Irish music and culture. An Tintean Ceoil provides a wonderful opportunity to experience authentic Irish traditional music in an intimate setting.",
      "The sessions feature local musicians playing a variety of traditional instruments including fiddles, flutes, tin whistles, bodhrán drums, and concertinas. It is a truly memorable experience.",
      "Cloghane is only a short drive from the Wild Atlantic Way Cottage, making it easy to enjoy an evening of traditional music during your stay.",
    ],
  },
  {
    slug: 'feile-na-bealtaine',
    title: 'Féile na Bealtaine',
    date: 'Apr 15, 2019',
    author: 'WildAtlanticWayCottage',
    category: 'Blog',
    image: '/images/blog/feile-na-bealtaine.jpg',
    alt: 'Féile na Bealtaine',
    excerpt:
      "Féile na Bealtaine is a community arts festival that takes place annually in the town of Dingle on the Dingle Peninsula.",
    content: [
      "Féile na Bealtaine is a vibrant community arts festival that takes place annually in the beautiful town of Dingle on the Dingle Peninsula. The festival celebrates the coming of summer with a rich programme of music, art, literature, and cultural events.",
      "The festival has been running for many years and has become one of the most anticipated cultural events on the Dingle Peninsula. It attracts artists, performers, and visitors from all over Ireland and beyond.",
      "Events take place in various venues around Dingle, including pubs, galleries, and outdoor spaces. The programme includes concerts, exhibitions, workshops, readings, and much more.",
      "Dingle is only a 20-minute drive from the Wild Atlantic Way Cottage over the scenic Conor Pass, making the cottage an ideal base for enjoying the festival.",
    ],
  },
  {
    slug: 'heritage-sites-in-kerry',
    title: 'Heritage sites in Kerry',
    date: 'Dec 20, 2018',
    author: 'WildAtlanticWayCottage',
    category: 'Blog',
    image: '/images/blog/gallarus.jpg',
    alt: 'Heritage sites',
    excerpt:
      "Kerry is rich in heritage sites, including the famous Gallarus Oratory on the Dingle Peninsula, one of Ireland's best-preserved early Christian buildings.",
    content: [
      "County Kerry is home to an extraordinary wealth of heritage sites that span thousands of years of history. From ancient stone forts to early Christian churches, the landscape is dotted with fascinating historical monuments.",
      "One of the most famous is the Gallarus Oratory on the Dingle Peninsula, one of Ireland's best-preserved early Christian buildings. This remarkable stone structure, which dates from around the 7th century, is built entirely without mortar and remains watertight to this day.",
      "The Dingle Peninsula alone has over 2,000 archaeological monuments, including beehive huts (clocháns), ring forts, ogham stones, and crosses. Many of these can be found along the Slea Head Drive, a spectacular coastal route.",
      "Other notable heritage sites in Kerry include Ross Castle in Killarney, the Skellig Islands (a UNESCO World Heritage Site), and the Blasket Island Centre. All of these are accessible from the Wild Atlantic Way Cottage.",
      "The Blasket Island Centre reveals the rich history of the Blasket Islands and the people who once lived there. In recent times, the area near the Blaskets was used as a filming location for Star Wars.",
    ],
  },
  {
    slug: '5-great-things-to-do-in-castlegregory',
    title: '5 great things to do in Castlegregory',
    date: 'Dec 12, 2018',
    author: 'WildAtlanticWayCottage',
    category: 'Blog',
    image: '/images/blog/5-great-things.jpg',
    alt: '5 great things to do in Castlegregory',
    excerpt:
      "5 great things to do in Castlegregory: Watersports, Bird-Watching, Walking and Hillwalking, exploring the local area, and Golfing.",
    content: [
      "Castlegregory and the surrounding area offers a wide variety of activities for visitors. Here are 5 great things to do during your stay.",
      "1. Watersports – The endless miles of surf of Brandon Bay creates a haven for water-sports enthusiasts. There is a wide variety of water activities to choose from. Brandon Bay is internationally recognised as one of the best places for wind-surfing, kite-surfing, and board-surfing in Ireland and Europe.",
      "2. Bird-Watching – Castlegregory is at the centre of excellent birdwatching in Kerry, famous for its seabirds and swans that inhabit Lough Gill. Winter is the best time for birdwatching due to bird migration from the northern hemisphere.",
      "3. Walking and Hillwalking – Visitors can enjoy walks along sandy beaches or explore Glentinassig Forest Park, which covers 450 hectares of woodland, mountain and lakes. Mount Brandon, one of Ireland's highest mountains, offers climbers rewarding views of the Atlantic Ocean and surrounding terrain.",
      "4. Exploring the Local Area – The Dingle Peninsula is rich in heritage and culture. You can visit the vibrant town of Dingle, drive the scenic Slea Head route, or explore the many archaeological sites in the region.",
      "5. Golfing – Castlegregory Golf Club is located between Lough Gill and the Wild Atlantic Ocean, featuring a nine-hole links course with sandy dunes that challenge golfers of all abilities.",
    ],
  },
]

export default blogPosts
