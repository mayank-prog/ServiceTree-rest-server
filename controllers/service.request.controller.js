const service_request = require('../models/service_request.model.js');

// Retrieve all_service_request
exports.all_service_request = async (req, res) => {
    try {
      const request = await service_request.find();
      res.json(request);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
};

// Create a new service_request..
exports.add_service_request = async (req, res) => {
  try {
    const service = new service_request(req.body);
    const request = await service.save();
    res.json(request);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

//get service_request by user_id..
exports.service_requestByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const request = await service_request.find({user_id:user_id});
    res.status(200).json(request);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Update an existing request..
exports.update_service_request = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await service_request.findByIdAndUpdate(id, req.body, { new: true });
    res.json(request);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};



