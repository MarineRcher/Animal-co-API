const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const productRoutes = require("./routes/product");

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

// connexion à la base de donnée
app.use("/", productRoutes);

mongoose
  .connect(
    "mongodb+srv://marine_patry:Pm13032002@cluster0.mgsf81h.mongodb.net/animalEcom"
  )
  .then((result) => {
    //je lance l'appli express que si je suis connecter à mongodb
    app.listen(3003, () => {
      console.log("app is listening on port 3003");
    });
    //le +e signifie d'afficher l'erreur
  })
  .catch((e) => console.log("echec de connexion" + e));
