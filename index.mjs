import express from 'express';
import router from './Router/index.js';
import mongoose from './config/db.js';  // Import the mongoose instance
import cors from 'cors'
const app = express();

app.get('/', (req, res) => {
    res.send({ message: "Hello from the server !" })
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
    mongoose.connection.once('open', () => {
        console.log('db connected successfully!')
    });
});
app.use(express.json());
// Use the router
app.use(cors());
app.use('/', router);
