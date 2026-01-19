export function navigateTo(url) {
    window.location.href = url;
  }
  
  export function bindNavigation(selector) {
    const links = document.querySelectorAll(selector);
  
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(link.getAttribute("href"));
      });
    });
  }
  