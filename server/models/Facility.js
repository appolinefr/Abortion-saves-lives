const { Schema, model } = require("mongoose");

const facilitySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    maxLength: 300,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  surgicalAbortion: {
    type: String,
  },
  medicalAbortion: {
    type: String,
  },
  cost: {
    type: String,
  },
  reviews: [
    {
      reviewText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      reviewAuthor: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Facility = model("Facility", facilitySchema);

module.exports = Facility;
