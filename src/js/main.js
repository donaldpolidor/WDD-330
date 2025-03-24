import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// Definition of data source for products
class DataSource {
    async getData() {
        return [
            { name: 'Marmot', description: 'Ajax Tent - 3-Person, 3-Season', price: '$199.99' },
            { name: 'The North Face', description: 'Talus Tent - 4-Person, 3-Season', price: '$199.99' },
            { name: 'The North Face', description: 'Alpine Guide Tent - 3-Person, 4-Season', price: '$349.99' },
            { name: 'Cedar Ridge', description: 'Rimrock Tent - 2-Person, 3-Season', price: '$69.99' },
        ];
    }
}

// Select HTML element to display product list
const listElement = document.getElementById('product-list');

// Create the ProductData instance with the “tents” category
const productData = new ProductData("tents");

// Create a ProductList instance with the category “tents”, the data source and the HTML element
const dataSource = new DataSource();
const productList = new ProductList("tents", dataSource, listElement);

// Initialize product list
productList.init();
