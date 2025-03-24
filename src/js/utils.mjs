// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// get the product id from the query string
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

/**
 * Render a list of items using a template function and insert it into the DOM
 * @param {Function} template - The template function to generate HTML for each item
 * @param {HTMLElement} parentElement - The parent element where the content will be inserted
 * @param {Array} list - The list of items to render
 * @param {string} position - The position where to insert the new HTML (default: 'afterbegin')
 * @param {boolean} clear - If true, the parent element's content will be cleared before insertion (default: false)
 */
export function renderListWithTemplate(template, parentElement, list, position = "afterbegin", clear = false) {
  // Create the HTML strings using the template function
  const htmlStrings = list.map(template).join('');

  // If clear is true, clear the parent element's content
  if (clear) {
    parentElement.innerHTML = "";
  }

  // Insert the new HTML at the specified position
  parentElement.insertAdjacentHTML(position, htmlStrings);
}
