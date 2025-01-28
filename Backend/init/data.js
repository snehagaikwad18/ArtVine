// const sampleListing = [
//   {
//     title: "Sunset Over the Ocean",
//     description:
//       "A serene painting capturing the sun setting over the ocean waves.",
//     price: 1500.5,
//     image_url: "http://example.com/sunset-over-ocean.jpg",
//     width: 24,
//     height: 36,
//     medium: "Acrylic on Canvas",
//     category: "Landscape",
//     style: "Modern",
//     available_stock: 3,
//   },
//   {
//     title: "Abstract Colors",
//     description:
//       "A vibrant mix of colors blending together to create an abstract masterpiece.",
//     price: 1250.0,
//     image_url: "http://example.com/abstract-colors.jpg",
//     width: 30,
//     height: 30,
//     medium: "Oil on Canvas",
//     category: "Abstract",
//     style: "Contemporary",
//     available_stock: 5,
//   },
//   {
//     title: "Golden Horizon",
//     description: "A stunning painting of a golden horizon at dusk.",
//     price: 1800.75,
//     image_url: "http://example.com/golden-horizon.jpg",
//     width: 36,
//     height: 48,
//     medium: "Oil on Canvas",
//     category: "Landscape",
//     style: "Impressionism",
//     available_stock: 2,
//   },
//   {
//     title: "City Skyline",
//     description: "A dynamic painting of a bustling city skyline at night.",
//     price: 2000.0,
//     image_url: "http://example.com/city-skyline.jpg",
//     width: 40,
//     height: 60,
//     medium: "Acrylic on Canvas",
//     category: "Urban",
//     style: "Modern",
//     available_stock: 4,
//   },
//   {
//     title: "Mystic Forest",
//     description:
//       "A magical depiction of a dense forest with rays of sunlight breaking through.",
//     price: 1600.25,
//     image_url: "http://example.com/mystic-forest.jpg",
//     width: 28,
//     height: 40,
//     medium: "Watercolor on Paper",
//     category: "Nature",
//     style: "Classic",
//     available_stock: 6,
//   },
// ];

// module.exports = { data: sampleListing };

const sampleData = [
  {
    title: "Starry Night",
    description:
      "A mesmerizing portrayal of the night sky with swirling stars.",
    price: 1500,
    image_url: "https://example.com/images/starry-night.jpg",
    width: 80,
    height: 60,
    medium: "Oil on Canvas",
    category: "Abstract",
    style: "Post-Impressionism",
    available_stock: 10,
    rating: 4.8,
    reviews: [
      {
        user: "JohnDoe123",
        comment: "Absolutely stunning artwork! Looks even better in person.",
        rating: 5,
      },
      {
        user: "ArtLover99",
        comment: "Beautiful piece, but I expected a larger size.",
        rating: 4,
      },
    ],
  },
  {
    title: "The Persistence of Memory",
    description:
      "A surreal masterpiece featuring melting clocks symbolizing the fluidity of time.",
    price: 2000,
    image_url: "https://example.com/images/persistence-of-memory.jpg",
    width: 100,
    height: 70,
    medium: "Oil on Canvas",
    category: "Surrealism",
    style: "Modern",
    available_stock: 5,
    rating: 4.7,
    reviews: [
      {
        user: "SurrealFan42",
        comment:
          "A timeless piece that captures the surrealistic vibe perfectly.",
        rating: 5,
      },
      {
        user: "Collector2023",
        comment: "Beautiful, but the price feels a bit steep.",
        rating: 4,
      },
    ],
  },
  {
    title: "Mona Lisa",
    description:
      "The iconic portrait by Leonardo da Vinci, capturing enigmatic beauty and mystery.",
    price: 3000,
    image_url: "https://example.com/images/mona-lisa.jpg",
    width: 77,
    height: 53,
    medium: "Oil on Poplar Panel",
    category: "Portrait",
    style: "Renaissance",
    available_stock: 2,
    rating: 5,
    reviews: [
      {
        user: "HistoryBuff",
        comment: "An all-time classic. A must-have for any art enthusiast!",
        rating: 5,
      },
      {
        user: "ArtFanatic88",
        comment: "It’s perfect, nothing else to say.",
        rating: 5,
      },
    ],
  },
];

module.exports = { data: sampleData };
