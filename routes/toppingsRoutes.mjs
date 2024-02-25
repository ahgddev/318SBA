//Create routes for the server to manage
// Utilize route parameters, where appropriate.
//Create GET routes for all data that should be exposed to the client.
//Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request.
//Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request.
//Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request.


import toppingDB from "../data/database.mjs";
import express from "express";
const router = express.Router();


// Base route, get all Toppings by default
// GET: Get all toppings.
// POST: Make a new topping. You cannot add duplicate toppings.
router
  .route("/")
  .get(async (req, res) => {
    // res.sendFile("pages/toppingsManager.html", { root: "." });
    res.render("toppings.pug", { root: "." });
  })
  .post(async (req, res) => {
    let allToppingsData = await toppingDB.collection("Ingredients");
    let lastTopping = await allToppingsData.find().sort({topping_id:-1}).limit(1).toArray();
    if(lastTopping[0].name == req.body.name){
      throw new Error("This topping already exists")
    }
    console.log(lastTopping)
    let newTopping = {
        topping_id: lastTopping[0].topping_id + 1,
        name: req.body.name,
        type: req.body.type,
        serving_size: req.body.serving_size,
        price_per_serving: req.body.price_per_serving,
    };
    allToppingsData.insertOne(newTopping);

    res.send("Topping added!").status(201);
  });

// Get all Toppings
// GET: Get all toppings. A specific route to get all of them will be useful.
router.route("/all").get(async (req, res) => {
  let allToppingsData = await toppingDB.collection("Ingredients");
  let foundToppings = await allToppingsData.find({}).toArray();
  res.send(foundToppings).status(200);
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
    let updateResult = await allToppingsData.updateOne(
      { topping_id: Number(req.params.id) },
      {
        $set: {
          topping_id: Number(req.params.id),
          name: req.body.name,
          type: req.body.type,
          serving_size: req.body.serving_size,
          price_per_serving: req.body.price_per_serving,
        },
      }
    );

    if (!updateResult) res.send("Topping not found").status(400);
    res.json(updateResult).status(200);
  });

export default router;
