
export default class ProductData {
  constructor(category) {
    this.category = category;
  }

  async getData() {
    const response = await fetch(`./tents.json`);
    return response.json();
  }
}
