export function renderBreadcrumbs(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
  
    const path = window.location.pathname
      .split("/")
      .filter((segment) => segment && !segment.includes(".html"));
  
    let breadcrumbHTML = `<a href="./index.html">Home</a>`;
  
    path.forEach((segment) => {
      breadcrumbHTML += ` / <span>${formatSegment(segment)}</span>`;
    });
  
    container.innerHTML = breadcrumbHTML;
  }
  
  function formatSegment(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  