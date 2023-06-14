const express = require('express');
const ProductManager = require('./ProductManager'); 

const app = express();
const port = 3000; 

const productManager = new ProductManager(); 


app.get('/products', (req, res) => {
  const { limit } = req.query;
  const products = productManager.getAllProducts();

  if (limit) {
    const limitedProducts = products.slice(0, limit);
    return res.json(limitedProducts);
  }

  res.json(products);
});


app.get('/products/:pid', (req, res) => {
  const { pid } = req.params;
  const product = productManager.getProductById(pid);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});