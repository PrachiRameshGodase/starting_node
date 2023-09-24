const path = require("path");
const express = require("express");

const bodyparser = require("body-parser");

const app = express();
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const contactRoutes=require("./routes/contactus")

app.use(bodyparser.urlencoded({ extended: false }));

//addind css path
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
