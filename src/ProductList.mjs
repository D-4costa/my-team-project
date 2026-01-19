import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
    <img src="${product.Image}" alt="Image of ${product.Name}">
    <h2>${product.Brand}</h2>
    <h3>${product.Name}</h3>
    <p>$${product.Price}</p>
  </li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.products = [];
  }

  async init() {
    this.products = await this.dataSource.getData();
    this.renderList(this.products);
  }

  renderList(list) {
    renderListWithTemplate(
      productCardTemplate,
      this.listElement,
      list,
      "afterbegin",
      true
    );
  }

  sortByPriceAsc() {
    const sorted = [...this.products].sort((a, b) => a.Price - b.Price);
    this.renderList(sorted);
  }

  sortByPriceDesc() {
    const sorted = [...this.products].sort((a, b) => b.Price - a.Price);
    this.renderList(sorted);
  }

  sortByName() {
    const sorted = [...this.products].sort((a, b) =>
      a.Name.localeCompare(b.Name)
    );
    this.renderList(sorted);
  }
}

