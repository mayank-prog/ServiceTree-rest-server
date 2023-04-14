const Address = require('../models/address.model.js');

// Retrieve all addresses
exports.all_Addresses = async (req, res) => {
    try {
      const addresses = await Address.find();
      res.json(addresses);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
};

// Create a new address..
exports.add_Address = async (req, res) => {
  try {
    const address = new Address(req.body);
    const ad = await address.save();
    res.json(ad);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// get address by user_ID..
exports.address_By_UserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const address = await Address.findOne({user_id:user_id});
    res.json(address);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Update an existing address
exports.update_Address = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findByIdAndUpdate(id, req.body, { new: true });
    res.json(address);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};