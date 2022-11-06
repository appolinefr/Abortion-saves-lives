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
    type: Boolean,
  },
  medicalAbortion: {
    type: Boolean,
  },
  cost: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Facility = model("Facility", facilitySchema);

module.exports = Facility;
