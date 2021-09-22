import express from "express";
import { companiesControllers } from "../controllers/companies.js";
// import { companiesMiddlewares } from "../middlewares/companies.js";
import { globalsMiddlewares } from "../middlewares/globals.js";

const companiesRoutes = express.Router();

companiesRoutes.get("/companies/findAll", companiesControllers.findAll);

export { companiesRoutes };
