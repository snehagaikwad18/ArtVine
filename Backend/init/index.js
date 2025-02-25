const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Art = require("../models/art.js");
const ArtistDetail = require("../models/artistDetail.js");

main()
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("error is :", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/artvine");
}

const initDB = async () => {
  await ArtistDetail.deleteMany({});
  await ArtistDetail.insertMany(initData.data);
  console.log("data has been initialize");
};

initDB();
