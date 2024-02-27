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

// Manage Pizzas
// Utilize route parameters, where appropriate.
// As a pizza chef I should be able to create new pizza master pieces

// It should allow me to see a list of existing pizzas and their toppings
// It should allow me to create a new pizza and add toppings to it
// It should allow me to delete an existing pizza
// It should allow me to update an existing pizza
// It should allow me to update toppings on an existing pizza

//Create and use error-handling middleware.


//Utilize reasonable data structuring practices.

// Adhere to the guiding principles of REST.
// Utilize reasonable code organization practices.
app.use("/toppings", toppingRoutes);
app.use("/pizzas", pizzasRoutes);

app.listen(PORT, () => {
  console.log("Listening....");
});
