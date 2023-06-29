const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const cors = require("cors");
app.use(cors());

const productRoutes = require("./routes/product");
const userRoutes = require("./routes/auth");
const cartRoutes = require("./routes/cart");

app.use(bodyParser.json());

app.use((req, res, next) => {
  next();
});

// connexion à la base de donnée
app.use("/", productRoutes);
app.use("/auth", userRoutes);
app.use("/cart", cartRoutes);

mongoose
  .connect(process.env.connection)
  .then((result) => {
    //je lance l'appli express que si je suis connecter à mongodb
    app.listen(3003, () => {
      console.log("app is listening on port 3003");
    });
    //le +e signifie d'afficher l'erreur
  })
  .catch((e) => console.log("echec de connexion" + e));
