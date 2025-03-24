// DataSource.mjs

import { productData } from './ProductData.mjs';

export default class DataSource {
    async getData() {
        // Retourner les données produits
        return productData;
    }
}
