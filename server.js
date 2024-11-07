import express from 'express';
import userRoutes from './routes/userRoutes.js';
import shoprouter from './routes/shopRoutes.js';
import dbConnect from './dbConnect.js';

const app = express();
app.use(express.json());
const PORT =   process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/v1/user", userRoutes);
app.use("/v1/shop", shoprouter);

app.use((req,res,next ) => {
    res.status(404).json({
        message: 'Route not found'
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbConnect();
});


