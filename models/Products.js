import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number
});

const Products = mongoose.model('Products', ProductSchema);

export default Products;