import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Debug: Check if dist folder exists
const distPath = path.join(__dirname, "dist");
console.log(`Looking for dist folder at: ${distPath}`);
console.log(`Dist folder exists: ${fs.existsSync(distPath)}`);

// Serve static files from dist folder
app.use(
  express.static(distPath, {
    maxAge: "1h",
    etag: false,
  }),
);

// SPA fallback: serve index.html for all non-file routes
app.get("*", (req, res) => {
  const indexPath = path.join(distPath, "index.html");
  console.log(`Serving ${req.path} -> ${indexPath}`);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(`Error serving index.html: ${err.message}`);
      res.status(500).send("Error loading page");
    }
  });
});

app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ Serving static files from: ${distPath}`);
});
