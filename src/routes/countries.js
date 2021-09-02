import express from "express";
import { controllers } from "../controllers/countries.js";
import { countriesMiddlewares } from "../middlewares/countries.js";
const countriesRoutes = express.Router();

countriesRoutes.get("/countriesFindAll", controllers.countriesFindAll);
countriesRoutes.get(
  "/countriesFindOne",
  countriesMiddlewares.missingId,
  countriesMiddlewares.idOrNameNotFound,
  controllers.countriesFindOne
);
countriesRoutes.get(
  "/countriesFindOne/:idOrName",
  countriesMiddlewares.missingId,
  countriesMiddlewares.idOrNameNotFound,
  controllers.countriesFindOne
);
countriesRoutes.post(
  "/countriesPost",
  countriesMiddlewares.missingName,
  countriesMiddlewares.nameAlreadyExists,
  controllers.countriesPost
);
countriesRoutes.delete(
  "/countriesDelete",
  countriesMiddlewares.delete,
  controllers.countriesDelete
);
countriesRoutes.put("/countriesPut", controllers.countriesPut);

export { countriesRoutes };
