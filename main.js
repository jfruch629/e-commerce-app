let inventory = [
  ['LA-LG-STICKER', 300, 'Large Sticker', 'images/la-large-sticker-256px.png', 'Show your Launch pride by plastering your laptop with these beautiful die-cut stickers.'],
  ['LA-SM-STICKER', 200, 'Small Sticker', 'images/la-small-sticker-128px.png', `It\'s a tiny Launch sticker. How cute!`],
  ['LA-T-SHIRT', 50, 'T-Shirt', 'images/la-t-shirt-200px.png', '100% Cotton. Makes a great gift.']
]

class Product {
  constructor(id, quantity, name, image, description) {
    this.id = id;
    this.quantity = quantity;
    this.name = name;
    this.image = image;
    this.description = description;
  }

  sell() {
    quantity -= 1;
    return quantity;
  }

  toHTML() {
    let productDiv = document.createElement('div');
    productDiv.className = `${this.name}`;
    let info = `<h1>Product Name: ${this.name}</h1><h5>300 in stock</h5>`;
    let description = `<h3>Description</h3> <p>${this.description}</p>`;
    productDiv.innerHTML = info + description;

    let imageElement = document.createElement(`img`);
    imageElement.alt = `${this.name}`
    imageElement.src = `${this.image}`;
    productDiv.appendChild(imageElement);
    return productDiv;
  }
}

let products = []
inventory.forEach((productArgs) => {
  let product = new Product(...productArgs);
  products.push(product);
});

element = document.getElementById('all-products');

products.forEach((product) => {
  element.appendChild(product.toHTML());
});
