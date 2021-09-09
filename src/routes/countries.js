import express from "express";
import { countriesControllers } from "../controllers/countries.js";
import { countriesMiddlewares } from "../middlewares/countries.js";

const countriesRoutes = express.Router();

countriesRoutes.get("/countries/findAll", countriesControllers.findAll);
countriesRoutes.get(
  "/countries/findByName",
  countriesMiddlewares.missingName,
  countriesMiddlewares.notFound,
  countriesControllers.findByName
);
countriesRoutes.post(
  "/countries/post",
  countriesMiddlewares.missingName,
  countriesMiddlewares.nameAlreadyExists,
  countriesControllers.post
);
countriesRoutes.delete(
  "/countries/delete",
  countriesMiddlewares.missingName,
  countriesMiddlewares.notFound,
  countriesControllers.delete
);
countriesRoutes.put(
  "/countries/put",
  countriesMiddlewares.missingName,
  countriesMiddlewares.notFound,
  countriesControllers.put
);

export { countriesRoutes };
