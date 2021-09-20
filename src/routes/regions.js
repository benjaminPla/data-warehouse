import express from "express";
import { regionsControllers } from "../controllers/regions.js";
import { regionsMiddlewares } from "../middlewares/regions.js";

const regionsRoutes = express.Router();

regionsRoutes.get("/regions/findAll", regionsControllers.findAll);
regionsRoutes.get("/regions/findByName", regionsMiddlewares.missingName, regionsMiddlewares.regionNotFound, regionsControllers.findByName);
regionsRoutes.post("/regions/post", regionsMiddlewares.missingName, regionsMiddlewares.nameAlreadyExists, regionsControllers.post);
regionsRoutes.delete("/regions/delete", regionsMiddlewares.missingName, regionsMiddlewares.regionNotFound, regionsControllers.delete);
regionsRoutes.put(
  "/regions/put",
  regionsMiddlewares.missingName,
  regionsMiddlewares.missingNewName,
  regionsMiddlewares.newNameAlreadyExists,
  regionsMiddlewares.regionNotFound,
  regionsControllers.put
);

export { regionsRoutes };
