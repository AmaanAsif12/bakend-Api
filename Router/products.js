import express from 'express'
import Products from '../models/Products.js';

const router = express.Router()

router.get('/', async (req, res) => {
        const data = await Products.find();
        res.send({ message: "Hello GET api", data });
});

router.post('/post', async (req, res) => {
        const data = req.body
        await Products.create(data)
        res.send({ message: 'Products posted successfully', data })
})
export default router;