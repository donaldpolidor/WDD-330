import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];

  // Vérification si cartItems est un tableau valide
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    console.log("Panier vide ou données invalides.");
    document.querySelector(".product-list").innerHTML =
      "<p>Le panier est vide.</p>";
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));

  // Vérifier si l'élément .product-list existe dans le DOM
  const productList = document.querySelector(".product-list");
  if (!productList) {
    console.error("L'élément .product-list n'existe pas dans le DOM.");
    return;
  }

  productList.innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  // Vérifier si les propriétés existent avant de les utiliser
  const image = item.Image ? item.Image : "default.jpg";
  const name = item.Name ? item.Name : "Produit inconnu";
  const color =
    item.Colors && item.Colors.length > 0
      ? item.Colors[0].ColorName
      : "Couleur inconnue";
  const price = item.FinalPrice ? `$${item.FinalPrice}` : "Prix non disponible";

  return `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${image}" alt="${name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${name}</h2>
    </a>
    <p class="cart-card__color">${color}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">${price}</p>
  </li>`;
}

renderCartContents();
