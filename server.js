const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

app.use(express.static(PUBLIC_DIR, {
  extensions: ["html"],
}));

// SPA-style catch-all: any unmatched route falls back to index.html
// (the site itself routes internally via #hash tabs, so this only
// matters for direct deep-links that a static host would 404 on).
app.use((req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Nhất Quán website running at http://localhost:${PORT}`);
});
