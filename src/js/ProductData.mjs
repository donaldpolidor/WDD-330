function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}

export function productCardTemplate(product) {
  return `
    <div class="product-card">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>${product.price}</p>
      <img src="${product.imageUrl}" alt="${product.name}">
    </div>
  `;
}

// ProductData.mjs

export const productData = [
  {
    name: 'Marmot',
    brand: 'Marmot',
    description: 'Ajax Tent - 3-Person, 3-Season',
    price: '$199.99',
    imageUrl: 'src/public/images/tents/marmot-ajax-tent-3-person-3-season-in-pale-pumpkin-terracotta~p~880rr_01~320.jpg' // chemin absolu
  },
  {
    name: 'The North Face',
    brand: 'The North Face',
    description: 'Talus Tent - 4-Person, 3-Season',
    price: '$199.99',
    imageUrl: 'src/public/images/tents/the-north-face-talus-tent-4-person-3-season-in-golden-oak-saffron-yellow~p~985rf_01~320.jpg' // chemin absolu
  },
  {
    name: 'The North Face',
    brand: 'The North Face',
    description: 'Alpine Guide Tent - 3-Person, 4-Season',
    price: '$349.99',
    imageUrl: 'src/public/images/tents/the-north-face-alpine-guide-tent-3-person-4-season-in-canary-yellow-high-rise-grey~p~985pr_01~320.jpg' // chemin absolu
  },
  {
    name: 'Cedar Ridge',
    brand: 'Cedar Ridge',
    description: 'Rimrock Tent - 2-Person, 3-Season',
    price: '$69.99',
    imageUrl: 'src/public/images/tents/cedar-ridge-rimrock-tent-2-person-3-season-in-rust-clay~p~344yj_01~320.jpg' // chemin absolu
  }
];