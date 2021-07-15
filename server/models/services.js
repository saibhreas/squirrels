const mongoose =require ('mongoose');
const { String, Number, Boolean } = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const serviceSchema = new Schema (
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: Number,
      required: true,
      min: 0.99
    },

});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;