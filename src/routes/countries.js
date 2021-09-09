import express from "express";
import { countriesControllers } from "../controllers/countries.js";
import { countriesMiddlewares } from "../middlewares/countries.js";

const countriesRoutes = express.Router();

countriesRoutes.get("/countries/findAll", countriesControllers.findAll);
countriesRoutes.get(
  "/countries/findByName",
  countriesMiddlewares.missingName,
  countriesMiddlewares.countryNotFound,
  countriesControllers.findByName
);
countriesRoutes.post(
  "/countries/post",
  countriesMiddlewares.missingName,
  countriesMiddlewares.missingRegionId,
  countriesMiddlewares.nameAlreadyExists,
  countriesMiddlewares.regionNotFound,
  countriesControllers.post
);
countriesRoutes.delete(
  "/countries/delete",
  countriesMiddlewares.missingName,
  countriesMiddlewares.countryNotFound,
  countriesControllers.delete
);
countriesRoutes.put(
  "/countries/put",
  countriesMiddlewares.missingName,
  countriesMiddlewares.missingNewName,
  countriesMiddlewares.missingRegionId,
  countriesMiddlewares.regionNotFound,
  countriesMiddlewares.countryNotFound,
  countriesControllers.put
);

export { countriesRoutes };
