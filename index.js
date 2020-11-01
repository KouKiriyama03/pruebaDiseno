// Importar express
const express = require("express");

// Importar handlebars como template engine
const exphbs = require("express-handlebars");

// se declara y ya con la de abajo se manda a pantalla
const path = require("path");


// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Llama las cosas que estan estaticas
app.use(express.static(path.join(__dirname, "public")));
// jala archivisto de la vista
/*app.get("/", (req, res, next) => {
res.render("index");
});*/

/*app.get("/", (req, res, next) => {
  res.render("nuevo_login");
});*/
app.get("/", (req, res, next) => {
  res.render("registro");
});
/*app.get("/", (req, res, next) => {
  res.render("login");
  });*/

 /* app.get("/", (req, res, next) => {
  res.render("formulario");
  });*/

// Inicializar el servidor en un puerto en específico
app.listen(5005, () => {
    console.log("Servidor ejecutándose en el puerto 5000");
  });
