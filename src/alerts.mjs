export function showAlert(message, type = "info") {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
  
    document.body.prepend(alert);
  
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
  