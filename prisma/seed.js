/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("../lib/generated/prisma");
const products = [
  {
    name: "avant-garde lamp",
    company: "Modenza",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    featured: true,
    image:
      "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 100,
    clerkId: "clerkId",
  },
  {
    name: "chic chair",
    company: "Luxora",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    featured: true,
    image:
      "https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 200,
    clerkId: "clerkId",
  },
  {
    name: "comfy bed",
    company: "Homestead",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    featured: true,
    image:
      "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 300,
    clerkId: "clerkId",
  },
  {
    name: "contemporary sofa",
    company: "Comfora",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    featured: false,
    image:
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 400,
    clerkId: "clerkId",
  },
];

const prisma = new PrismaClient();

// async function main() {
//   for (const product of products) {
//     await prisma.product.create({
//       data: product,
//     });
//   }
// }

async function main() {
  await prisma.product.createMany({
    data: products,
    skipDuplicates: true, // optional
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
