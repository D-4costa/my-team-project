export function trackPageView(pageName) {
    const views =
      JSON.parse(localStorage.getItem("pageViews")) || {};
  
    views[pageName] = (views[pageName] || 0) + 1;
  
    localStorage.setItem("pageViews", JSON.stringify(views));
  }
  
  export function getPageViews() {
    return JSON.parse(localStorage.getItem("pageViews")) || {};
  }
  