const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let words = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('api/save', (req, res) => {
    const {word} = req.body;
    words.push(word);
    res.json({message: 'Word saved successfully!'});
});

app.get('api/view',(req, res) => {
    res.json(words);
});

app.listen(port, () => {
    console.log('Server running at http://localhost:/${port}/');
})