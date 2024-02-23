import express from "express";
import dotenv from "dotenv";
import toppingRoutes from "./routes/toppingsRoutes.mjs";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Manage Toppings
// Utilize route parameters, where appropriate.
// As a pizza store owner I should be able to manage toppings available for my pizza chefs.

// It should allow me to see a list of available toppings
// It should allow me to add a new topping
// It should allow me to delete an existing topping
// It should allow me to update an existing topping



// Manage Pizzas
// Utilize route parameters, where appropriate.
// As a pizza chef I should be able to create new pizza master pieces

// It should allow me to see a list of existing pizzas and their toppings
// It should allow me to create a new pizza and add toppings to it
// It should allow me to delete an existing pizza
// It should allow me to update an existing pizza
// It should allow me to update toppings on an existing pizza


//Create and use at least two pieces of custom middleware.
//Create and use error-handling middleware.
// It should not allow me to enter duplicate pizzas
// It should not allow me to enter duplicate toppings

//Utilize reasonable data structuring practices.

// Adhere to the guiding principles of REST.
// Utilize reasonable code organization practices.
app.use("/toppings", toppingRoutes);

app.listen(PORT,  () => {
    console.log("Listening....");
});