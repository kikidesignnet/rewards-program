const mongoose = require('mongoose');

const TransitionSchema = new mongoose.Schema({
  date: {
    type: String
  },
  purchase: {
    type: Number
  }
});

const PurchaseSchema = new mongoose.Schema({
  month: {
    type: String
  },
  transitions: [TransitionSchema]
});

const CustomerSchema = new mongoose.Schema({
  account: {
    type: String
  },
  name: {
    type: String
  },
  purchase_history: {
    type: [PurchaseSchema]
  }
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;