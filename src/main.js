import ProductList from "./ProductList.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");

const products = new ProductList("tents", dataSource, listElement);
products.init();

// Sorting controls (added dynamically, no HTML changes needed)
const controls = document.createElement("div");

controls.innerHTML = `
  <button id="sortName">Sort by Name</button>
  <button id="sortLowHigh">Price: Low → High</button>
  <button id="sortHighLow">Price: High → Low</button>
`;

document.body.insertBefore(controls, listElement);

document.querySelector("#sortName").addEventListener("click", () => {
  products.sortByName();
});

document.querySelector("#sortLowHigh").addEventListener("click", () => {
  products.sortByPriceAsc();
});

document.querySelector("#sortHighLow").addEventListener("click", () => {
  products.sortByPriceDesc();
});
