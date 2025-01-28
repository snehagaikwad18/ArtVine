const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    image_url: {
      type: String,
      default:
        "https://unsplash.com/photos/woman-looking-at-painting-on-wall-inside-well-lit-room-CR9EGFPVNoU",
      set: (value) =>
        value === ""
          ? "https://unsplash.com/photos/woman-looking-at-painting-on-wall-inside-well-lit-room-CR9EGFPVNoU"
          : value,
    },
    width: { type: Number, required: true }, // Width in centimeters or inches
    height: { type: Number, required: true }, // Height in centimeters or inches
    medium: { type: String }, // Example: "Oil on Canvas"
    category: { type: String }, // Example: "Abstract", "Portrait"
    style: { type: String }, // Example: "Modern", "Realism"
    available_stock: { type: Number, default: 0 }, // Stock availability
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0, // Default rating value
    },
    reviews: [
      {
        user: { type: String,  }, // Reviewer name or ID
        comment: { type: String,  }, // Review text
        rating: { type: Number, min: 0, max: 5,  }, // Individual rating
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Art = mongoose.model("Art", artSchema);
module.exports = Art;
