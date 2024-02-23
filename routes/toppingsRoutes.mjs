//Create routes for the server to manage
// Utilize route parameters, where appropriate.
//Create GET routes for all data that should be exposed to the client.
//Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request.
//Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request.
//Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request.

// As a pizza store owner I should be able to manage toppings available for my pizza chefs.

// It should allow me to add a new topping

// It should allow me to update an existing topping
import toppingDB from "../data/database.mjs";
import express from "express";
import { ObjectId } from "mongodb";
const router = express.Router();

// It should allow me to see a list of available toppings
router.route("/").get(async (req, res) => {
  res.sendFile('pages/toppingsManager.html', { root: "." });
  let allToppingsData = await toppingDB.collection("Ingredients");
  let foundToppings = await allToppingsData.find({}).toArray();
  res.send(foundToppings).status(200);
}).post(async (req, res) => {
  let newTopping = req.body;
  // toppingDB.collection.
});

//Get a topping with a specific ID
// DELETE: Delete a single Topping
router.route("/:id").get(async (req, res) => {
    let allToppingsData = await toppingDB.collection("Ingredients");
    let searchData = { topping_id: Number(req.params.id) };
    let foundTopping = await allToppingsData.findOne(searchData);
  
    res.send(foundTopping).status(200);
  }).delete(async (req, res) => {
    // let allToppingsData = await toppingDB.collection("Ingredients");
    // let searchData = { topping_id: Number(req.params.id) };
    // await allToppingsData.deleteOne(searchData);
  
    // res.send("Topping deleted").status(204);
  });

export default router;
