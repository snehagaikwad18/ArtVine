const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    title: { type: String, required: [true, "required"] },
    description: { type: String, required: [true, "required"] },
    price: { type: String, required: [true, "required"] },
    image_url: {
      type: String,
      default:
        "https://unsplash.com/photos/woman-looking-at-painting-on-wall-inside-well-lit-room-CR9EGFPVNoU",
      set: (value) =>
        value === ""
          ? "https://unsplash.com/photos/woman-looking-at-painting-on-wall-inside-well-lit-room-CR9EGFPVNoU"
          : value,
    },
    width: { type: Number, required: true }, // Separate field for width
    height: { type: Number, required: true }, // Separate field for height
    medium: { type: String },
    category: { type: String },
    style: { type: String },
    available_stock: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
