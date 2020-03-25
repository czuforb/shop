import faker from "faker";
const products = [];

const createProducts = () => {
  for (let i = 0; i < 25; i++) {
    products.push({
      sku: faker.random.uuid(),
      product: faker.commerce.product(),
      department: faker.commerce.department(),
      color: faker.commerce.color(),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(),
      productAdjective: faker.commerce.productAdjective(),
      productMaterial: faker.commerce.productMaterial(),
      image: "https://source.unsplash.com/random/200x200"
    });
  }
};

createProducts();

export default products;
