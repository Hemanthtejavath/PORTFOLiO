import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    middlewareMode: false,
    middlewares: [
      // Fallback middleware for SPA routing
      (req, res, next) => {
        const url = req.url;
        // If request doesn't have a file extension, treat it as a route
        if (!url.includes(".") && url !== "/") {
          req.url = "/";
        }
        next();
      },
    ],
  },
});
