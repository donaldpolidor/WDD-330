import { renderListWithTemplate } from './utils.mjs';  
import { productData } from './ProductData.mjs';  // Importation de productData

// Assurez-vous d'importer correctement productCardTemplate si vous l'exportez nommément
import { productCardTemplate } from './ProductData.mjs';  // Importation de productCardTemplate

// Classe ProductList
export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        try {
            // Récupérer la liste des produits via la méthode getData() de la source de données
            const list = await this.dataSource.getData();
            // Appeler la méthode pour afficher la liste des produits
            this.renderList(list);
        } catch (error) {
            console.error("Erreur lors du chargement des données des produits:", error);
        }
    }

    renderList(products) {
        // Utiliser la fonction utilitaire pour rendre la liste avec le modèle de carte produit
        renderListWithTemplate(productCardTemplate, this.listElement, products, "afterbegin", true);
    }
}
