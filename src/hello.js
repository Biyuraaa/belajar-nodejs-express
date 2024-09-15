import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World from Express");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
