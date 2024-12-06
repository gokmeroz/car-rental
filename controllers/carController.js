const Car = require("../models/carModel");

exports.createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);

    res.status(200).json({
      status: "success",
      car,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllCars = async(req, res) => {
    try {
        const cars = await Car.find();
    
        res.status(200).json({
          status: "success",
          car: cars,
        });
      } catch (err) {
        console.log(err);
      }

}
exports.getCarWithId = async(req, res) => {
    try {
        const car = await Car.findById(req.params.id);
    
        res.status(200).json({
          status: "success",
          car,
        });
      } catch (err) {
        console.log(err);
      }
}
exports.updateCar = async(req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            car,
          });
    } catch (err) {
        console.log(err);
    }
};
exports.deleteCar = async(req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            data: null
        })
    } catch (err) {
        console.log(err);
    }
};
