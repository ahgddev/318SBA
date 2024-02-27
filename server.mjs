import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import toppingRoutes from "./routes/toppingsRoutes.mjs";
import pizzasRoutes from "./routes/pizzasRoutes.mjs";
import path from "path";
import methodOverride from "method-override";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(".", "src")));

//Views
app.set("views", "./views");
app.set("view engine", "pug");

//Create and use error-handling middleware.

app.use("/toppings", toppingRoutes);
app.use("/pizzas", pizzasRoutes);

app.listen(PORT, () => {
  console.log("Listening....");
});
