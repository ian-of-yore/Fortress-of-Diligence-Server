const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const courses = require('./data/courses.json')

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Eije ${port} port e sona jaitece`)
})

app.get('/', (req, res) => {
    res.send('Eije api kaj kortace')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})