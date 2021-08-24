import express from "express";
import { controllers } from "../controllers/countries.js";
import { countriesMiddlewares } from "../middlewares/countries.js";
const countriesRoutes = express.Router();

countriesRoutes.get("/countriesFindAll", controllers.countriesFindAll);
countriesRoutes.get(
  "/countriesFindOne",
  countriesMiddlewares.checkIdOrName,
  controllers.countriesFindOne
);
countriesRoutes.get(
  "/countriesFindOne/:idOrName",
  countriesMiddlewares.checkIdOrName,
  controllers.countriesFindOne
);
countriesRoutes.post(
  "/countriesPost",
  countriesMiddlewares.post,
  controllers.countriesPost
);

export { countriesRoutes };
