const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String
  },
  account: {
    type: String
  },
  purchase: {
    type: Number
  },
  purchase_date: {
    type: Date
  },
  reward_point: {
    type: Number
  },
  reward_total: {
    type: Number
  }
});

module.exports = Customer = mongoose.model('customer', CustomerSchema);