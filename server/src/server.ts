import configRoutes from './routes/configurations'
import express from 'express';
const app = express()

app.use(configRoutes)

app.get('/api', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

const PORT = 5001

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
