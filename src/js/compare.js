const products = [
  {
    id: "trail-lite",
    name: "Trail Lite Sleeping Bag",
    price: "$99.99",
    weight: "1.4 kg",
    temperature: "0°C",
    material: "Synthetic",
    season: "3-Season",
    rating: "★★★★☆"
  },
  {
    id: "mountain-pro",
    name: "Mountain Pro Sleeping Bag",
    price: "$149.99",
    weight: "1.2 kg",
    temperature: "-10°C",
    material: "Down",
    season: "4-Season",
    rating: "★★★★★"
  },
  {
    id: "camp-basic",
    name: "Camp Basic Sleeping Bag",
    price: "$79.99",
    weight: "1.8 kg",
    temperature: "5°C",
    material: "Synthetic",
    season: "Summer",
    rating: "★★★☆☆"
  }
];

const selectedProducts = [];

const productList = document.getElementById("productList");
const comparisonBody = document.getElementById("comparisonBody");

function renderProductList() {
  productList.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>Price:</strong> ${product.price}</p>
      <button data-id="${product.id}">Compare</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      addToComparison(product);
    });

    productList.appendChild(card);
  });
}

function addToComparison(product) {
  if (selectedProducts.length >= 3) {
    alert("You can compare up to 3 products only.");
    return;
  }

  if (selectedProducts.find(p => p.id === product.id)) {
    return;
  }

  selectedProducts.push(product);
  renderComparison();
}

function renderComparison() {
  const columns = ["col1", "col2", "col3"];
  columns.forEach((col, index) => {
    const th = document.getElementById(col);
    th.textContent = selectedProducts[index]?.name || "—";
  });

  const features = ["price", "weight", "temperature", "material", "season", "rating"];
  comparisonBody.innerHTML = "";

  features.forEach(feature => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="feature-name">${feature.toUpperCase()}</td>
      <td>${selectedProducts[0]?.[feature] || "—"}</td>
      <td>${selectedProducts[1]?.[feature] || "—"}</td>
      <td>${selectedProducts[2]?.[feature] || "—"}</td>
    `;
    comparisonBody.appendChild(row);
  });
}

renderProductList();
