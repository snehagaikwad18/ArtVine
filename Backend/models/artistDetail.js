const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistDetailSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      unique: true,
      trim: true,
      match: [/^\d{10}$/, "Enter a valid 10-digit phone number"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Enter a valid email address"],
    },
    dob: {
      type: Date, // Ensures the field stores a date
      required: [true, "Date of birth is required"], // Makes it mandatory
      validate: { // Custom validation logic
        validator: function (value) { 
          const today = new Date(); // Get the current date
          const minAgeDate = new Date(
            today.getFullYear() - 18, // Subtract 18 years from the current year
            today.getMonth(), // Keep the same month
            today.getDate() // Keep the same day
          );
          return value <= minAgeDate; // Ensures DOB is at least 18 years in the past
        },
        message: "User must be at least 18 years old", // Error message if validation fails
      },
    },    
    address: {
      type: String,
      trim: true,
      minlength: [3, "Address must be at least 3 characters long"],
      default: "",
    },
    city: {
      type: String,
      trim: true,
      minlength: [2, "City name must be at least 2 characters long"],
      default: "",
    },
    state: {
      type: String,
      trim: true,
      minlength: [2, "State name must be at least 2 characters long"],
      default: "",
    },
    country: {
      type: String,
      trim: true,
      minlength: [3, "Country name must be at least 3 characters long"],
      default: "",
    },
    biography: {
      type: String,
      trim: true,
      minlength: [10, "Biography must be at least 10 characters long"],
      default: "",
    },
    artistType: {
      type: String,
      trim: true,
      minlength: [3, "Artist type must be at least 3 characters long"],
      default: "",
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
  },
  { timestamps: true }
);

const ArtistDetail = mongoose.model("ArtistDetail", artistDetailSchema);
module.exports = ArtistDetail;
