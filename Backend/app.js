const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("../Backend/models/listing.js");
const Art = require("../Backend/models/art.js");
const cors = require("cors");

// Allow requests from any origin
app.use(cors());

// parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.get("/listings", async (req, res) => {
  let data = await Listing.find({});
  console.log("this is json response :", data);
  res.json(data);
});

// arts api start //
app.delete("/api/admin/arts/:id", async (req, res) => {
  let { id } = req.params;
  const deletedData = await Art.findByIdAndDelete(id, {
    runValidators: true,
    new: true,
  });
  res.json(deletedData);
});

app.get("/api/admin/arts", async (req, res) => {
  const data = await Art.find({});
  console.log("this is art data :", data);
  res.json(data);
});

app.post("/api/admin/arts/new", async (req, res) => {
  try {
    const newData = new Art({
      ...req.body,
    });
    await newData
      .save()
      .then((res) => {
        console.log("this is res ::", res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("this is art data :", newData);
    res.json(newData);
  } catch (error) {
    throw error;
  }
});

app.patch("/api/admin/arts/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const updatedData = await Art.findByIdAndUpdate(
      id,
      { ...req.body },
      { runValidators: true, new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Art Not Found" });
    }
    console.log("updated Data", updatedData);
    res.status(202).json(updatedData);
  } catch (error) {
    console.error("Error updating art:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

app.get("/api/admin/arts/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const data = await Art.findById(id);
    console.log("backend fetched data ::", data);
    res.json(data);
  } catch (error) {
    console.log("Error : ", error);
    throw error;
  }
});
// arts api end //

// personal details api start //
app.get("/api/admin/personal-details", (req, res) => {
  res.send("Personal details Successfull");
});

// personal details api end //

app.get("/", (req, res) => {
  res.send("root is working");
});

// app.get("/test-listing", (req, res) => {
//   let sampleListing = new Listing({
//     title: "The Scream",
//     description: "A masterpiece by Edvard Munch.",
//     price: "1200.50",
//     image_url: "http://example.com/the-scream.jpg",
//     dimensions: "20x30 inches",
//     medium: "Oil on Canvas",
//     category: "Expressionism",
//     style: "Classic",
//     available_stock: 3,
//   });
//   sampleListing
//     .save()
//     .then(() => console.log("data saved successfully"))
//     .catch((err) => {
//       console.log("err:", err);
//     });
//   res.send("hello testing");
// });

app.listen(port, () => {
  console.log("backend server working successfully");
});
