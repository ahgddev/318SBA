//Create routes for the server to manage
// Utilize route parameters, where appropriate.
//Create GET routes for all data that should be exposed to the client.
//Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request.
//Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request.
//Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request.


// As a pizza store owner I should be able to manage toppings available for my pizza chefs.

// It should allow me to see a list of available toppings
// It should allow me to add a new topping
// It should allow me to delete an existing topping
// It should allow me to update an existing topping
import toppingDB from "../data/database.mjs";
import express from "express";
import { ObjectId } from "mongodb";
const router = express.Router();

router.route("/").get(async (req, res) => {
let collection = await toppingDB.collection("Ingredients");
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});

export default router