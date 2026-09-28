let product = [
  { name: "Laptop", price: 120000, stock: 5 },
  { name: "Mouse", price: 2500, stock: 0 },
  { name: "Keyboard", price: 50000, stock: 10 },
  { name: "Monitor", price: 45000, stock: 3 },
  { name: "Headphones", price: 8000, stock: 0 },
];

let inStock = product.filter(function (product) {
  return product.stock > 0;
});

console.log(inStock); // inStock products result on the here

let names = inStock.map(function (product) {
  return product.name;
});
console.log(names); // inStock products names result on the here

let expensiveProducts = inStock.find(function (product) {
  return product.price > 40000;
});
console.log(expensiveProducts); // expensive products names result on the here
