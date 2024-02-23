//Create routes for the server to manage
// Utilize route parameters, where appropriate.
//Create GET routes for all data that should be exposed to the client.
//Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request.
//Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request.
//Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request.

// As a pizza chef I should be able to create new pizza master pieces

// It should allow me to see a list of existing pizzas and their toppings
// It should allow me to create a new pizza and add toppings to it
// It should allow me to delete an existing pizza
// It should allow me to update an existing pizza
// It should allow me to update toppings on an existing pizza
import db from "../data/database.mjs";
import express from "express";
import { ObjectId } from "mongodb";
const router = express.Router();

router.get("/", (req, res) => {

});

export default router