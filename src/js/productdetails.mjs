import { getLocalStorage } from "./utils.mjs";

// Sélectionne l'élément HTML où afficher les détails
const productContainer = document.querySelector(".product-detail");

// Fonction pour récupérer un produit depuis l'API ou localStorage
async function getProductDetails(productId) {
  let products = getLocalStorage("so-cart");

  // Si le produit n'est pas dans localStorage, essayer de le récupérer via API
  if (!products) {
    try {
      const response = await fetch("./json/tents.json");
      if (!response.ok) throw new Error("Erreur de chargement des produits");
      products = await response.json();
    } catch (error) {
      console.error("Erreur lors de la récupération du produit :", error);
      return null;
    }
  }

  return products.find((product) => product.id == productId);
}

// Fonction pour afficher les détails du produit
async function renderProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id"); // Récupère l'ID depuis l'URL

  if (!productId) {
    productContainer.innerHTML = "<p>Aucun produit sélectionné.</p>";
    return;
  }

  const product = await getProductDetails(productId);

  if (!product) {
    productContainer.innerHTML = "<p>Produit introuvable.</p>";
    return;
  }

  // Insère les détails du produit dans le HTML
  productContainer.innerHTML = `
    <div class="product-card">
      <img src="${product.Image}" alt="${product.Name}" class="product-image">
      <h2>${product.Name}</h2>
      <p class="product-description">${product.Description || "Description non disponible."}</p>
      <p class="product-price">$${product.FinalPrice}</p>
      <button class="add-to-cart" data-id="${product.id}">Ajouter au panier</button>
    </div>
  `;

  // Ajouter un événement pour le bouton "Ajouter au panier"
  document.querySelector(".add-to-cart").addEventListener("click", () => {
    addToCart(product);
  });
}

// Fonction pour ajouter un produit au panier
function addToCart(product) {
  let cart = getLocalStorage("so-cart") || [];
  cart.push(product);
  localStorage.setItem("so-cart", JSON.stringify(cart));
  alert(`${product.Name} a été ajouté au panier !`);
}

// Exécuter le rendu des détails du produit au chargement de la page
renderProductDetails();
