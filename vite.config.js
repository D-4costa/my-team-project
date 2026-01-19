
import { resolve } from "path";

export default {
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html")
      }
    }
  }
};
