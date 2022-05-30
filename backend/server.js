import express from 'express';
import data from './data.js';

const app = express();
// test
app.get('/api/products', (req, res) => {
  res.send(data.products);
});


app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Listed' });
  }
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});