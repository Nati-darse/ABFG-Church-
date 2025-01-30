
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 2929;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, I am Natisha this is a project with TypeScript!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});