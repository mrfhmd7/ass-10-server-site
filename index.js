const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const mainBanner = require('./data/mainBanner.json');
const chefsData = require('./data/chefsData.json');
const detailChefsData = require('./data/detailChefsData.json');
const events = require('./data/events.json');
const details = require('./data/details.json');
const recipes = require('./data/recipes.json');
const blogs = require('./data/blogs.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('FoodBuzz is running');
});

app.get('/mainBanner', (req, res) => {
  res.send(mainBanner);
});

app.get('/chefsData', (req, res) => {
  res.send(chefsData);
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.get('/details', (req, res) => {
  res.send(details);
});
app.get('/recipes', (req, res) => {
  res.send(recipes);
});
app.get('/blogs', (req, res) => {
  res.send(blogs);
});

app.get('/detailChefsData/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const data = detailChefsData.filter((chefData) => chefData.id === id);

  res.send(data[0]);
});

app.listen(port, () => {
  console.log(`FOODBUZZ API is running on port: ${port}`);
});
