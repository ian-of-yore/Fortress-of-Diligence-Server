const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Eije ${port} port e sona jaitece`)
})

app.get('/', (req, res) => {
    res.send('Eije api kaj kortace')
})