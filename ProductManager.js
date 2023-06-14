const fs = require('fs');

class ProductManager {
  constructor() {
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync('productos.json', 'utf8');
      this.products = JSON.parse(data);
    } catch (err) {
      console.error('Error al cargar los productos:', err);
    }
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(pid) {
    return this.products.find((product) => product.id === pid);
  }
}

module.exports = ProductManager;

const fs = require('fs');

const products = [
  {
    id: 1,
    name: 'CAMPERA',
    price: 15000,
    color: 'VERDE'
  },
  {
    id: 2,
    name: 'REMERA',
    price: 3000,
    color: 'ROJO'
  },
  {
    id: 3,
    name: 'MUSCULOSA',
    price: 2500,
    color: 'VIOLETA'
  },
  {
    id: 4,
    name: 'BUZO',
    price: 7000,
    color: 'AMARILLO'
  },
  {
    id: 5,
    name: 'BUFANDA',
    price: 1000,
    color: 'AZUL'
  },
  {
    id: 6,
    name: 'POLLERA',
    price: 3000,
    color: 'NARANJA'
  },
  {
    id: 7,
    name: 'SHORT',
    price: 3000,
    color: 'BLANCO'
  },
  {
    id: 8,
    name: 'MEDIAS',
    price: 1000,
    color: 'MARRON'
  },
  {
    id: 9,
    name: 'CHALECO',
    price: 6000,
    color: 'GRIS'
  },
  {
    id: 10,
    name: 'SACO',
    price: 20000,
    color: 'NEGRO'
  }
];

try {
  const data = JSON.stringify(products, null, 2);
  fs.writeFileSync('productos.json', data, 'utf8');
  console.log('Productos creados exitosamente.');
} catch (err) {
  console.error('Error al crear los productos:', err);
}