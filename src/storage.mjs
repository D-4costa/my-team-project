export function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  export function getFromStorage(key, defaultValue = null) {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  }
  
  export function removeFromStorage(key) {
    localStorage.removeItem(key);
  }
  