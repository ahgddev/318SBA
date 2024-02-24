//Create routes for the server to manage
// Utilize route parameters, where appropriate.
//Create GET routes for all data that should be exposed to the client.
//Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request.
//Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request.
//Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request.

// As a pizza store owner I should be able to manage toppings available for my pizza chefs.

// It should allow me to add a new topping
// It should allow me to update an existing topping
// It should not allow me to enter duplicate pizzas
// It should not allow me to enter duplicate toppings

import toppingDB from "../data/database.mjs";
import express from "express";
import { ObjectId } from "mongodb";
const router = express.Router();

// It should allow me to see a list of available toppings
router
  .route("/")
  .get(async (req, res) => {
    res.sendFile("pages/toppingsManager.html", { root: "." });
    let allToppingsData = await toppingDB.collection("Ingredients");
    let foundToppings = await allToppingsData.find({}).toArray();
    res.send(foundToppings).status(200);
  })
  .post(async (req, res) => {
    let newTopping = req.body;
    //Need to work on adding a topping.
    // toppingDB.collection.
  });

//Get a topping with a specific ID
// DELETE: Delete a single Topping
// PATCH: Update a single Topping
router
  .route("/:id")
  .get(async (req, res) => {
    let allToppingsData = await toppingDB.collection("Ingredients");
    let searchData = { topping_id: Number(req.params.id) };
    let foundTopping = await allToppingsData.findOne(searchData);

    res.send(foundTopping).status(200);
  })
  .delete(async (req, res) => {
    let allToppingsData = await toppingDB.collection("Ingredients");
    let searchData = { topping_id: Number(req.params.id) };
    await allToppingsData.deleteOne(searchData);

    res.send("Topping deleted").status(204);
  })
  .patch(async (req, res) => {
    let allToppingsData = await toppingDB.collection("Ingredients");
    let searchData = await allToppingsData.find({ topping_id: Number(req.params.id) });
    let result = await allToppingsData.updateOne(searchData, {
      $set: { 
        topping_id: Number(req.params.id),
        name: req.body.name,
        type: req.body.type,
        serving_size: req.body.serving_size,
        price_per_serving: req.body.price_per_serving
       }
    });

    if (!searchData) res.send("Topping not found").status(400);
    res.json(result).status(200);
  });

export default router;