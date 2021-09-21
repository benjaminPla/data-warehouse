import express from "express";
import { regionsControllers } from "../controllers/regions.js";
import { regionsMiddlewares } from "../middlewares/regions.js";

const regionsRoutes = express.Router();

regionsRoutes.get("/regions/findAll", regionsControllers.findAll);
regionsRoutes.get("/regions/findById", regionsMiddlewares.missingId, regionsMiddlewares.idNotFound, regionsControllers.findOne);
regionsRoutes.get("/regions/findByName", regionsMiddlewares.missingName, regionsMiddlewares.nameNotFound, regionsControllers.findOne);
regionsRoutes.post("/regions/post", regionsMiddlewares.missingName, regionsMiddlewares.nameAlreadyExists, regionsControllers.post);
regionsRoutes.delete("/regions/deleteById", regionsMiddlewares.missingId, regionsMiddlewares.idNotFound, regionsControllers.delete);
regionsRoutes.delete("/regions/deleteByName", regionsMiddlewares.missingName, regionsMiddlewares.nameNotFound, regionsControllers.delete);
regionsRoutes.put(
  "/regions/putById",
  regionsMiddlewares.missingId,
  regionsMiddlewares.missingNewName,
  regionsMiddlewares.idNotFound,
  regionsControllers.put
);
regionsRoutes.put(
  "/regions/putByName",
  regionsMiddlewares.missingName,
  regionsMiddlewares.missingNewName,
  regionsMiddlewares.nameNotFound,
  regionsControllers.put
);

export { regionsRoutes };
