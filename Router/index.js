import express from 'express'
import Product from './products.js';

const router = express.Router()

router.use('/product', Product)

export default router;