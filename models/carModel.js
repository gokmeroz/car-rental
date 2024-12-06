const mongoose = require("mongoose");
const { type } = require("os");

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: false,
    required: [true, "A car must have a name parameter"],
  },
  brand: {
    type: String,
    unique: false,
    required: [true, "A car must have a brand parameter"],
  },
  model: {
    type: String,
    unique: false,
    required: [true, "A car must have a model parameter"],
  },
  year: {
    type: Number,
    unique: false,
    required: [true, "A car must have a year parameter"],
  },
  price: {
    type: Number,
    required: [true, "A car must have a price tag"],
  },

  transmission: {
    type: String,
    enum: ["automatic", "manual", "cvt", "dual-clutch"],
  },
  availability: {
    type: Boolean,
    default: true,
  },
  fuelType: {
    type: String,
    enum: ["gas", "diesel", "hybrid", "electric"],
    required: true,
  },
  locations: [
    {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: [Number],
      address: String,
      description: String,
      day: Number,
    },
  ],
  images: [String],
  milage: Number,
  seatingCapacity: {type: Number, required: [true, 'A car must have seats']},
  horsepower: String,
  features: [String],
  carType: {
    type: String,
    enum: ['economy', 'luxury', 'suv', 'truck', 'motorcycle', 'scooter']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});

const Car= mongoose.model('Car', carSchema);
module.exports = Car;
