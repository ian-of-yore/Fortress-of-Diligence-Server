const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const courses = require('./data/courses.json')

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})

app.get('/', (req, res) => {
    res.send('API is working')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const selectedCourse = courses.find(course => course.course_id === req.params.id);
    res.send(selectedCourse);
})