const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Grape'
    }
  ]
});

const Orange = mongoose.model('Orange', orangeSchema);

module.exports = Order;
