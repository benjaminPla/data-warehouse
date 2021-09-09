import express from "express";
import { regionsControllers } from "../controllers/regions.js";
import { regionsMiddlewares } from "../middlewares/regions.js";

const regionsRoutes = express.Router();

regionsRoutes.get("/regions/findAll", regionsControllers.findAll);
regionsRoutes.get(
  "/regions/findByName",
  regionsMiddlewares.missingName,
  regionsMiddlewares.notFound,
  regionsControllers.findByName
);
// regionsRoutes.post(
//   "/countries/post",
//   regionsMiddlewares.missingName,
//   regionsMiddlewares.nameAlreadyExists,
//   regionsControllers.post
// );
// regionsRoutes.delete(
//   "/countries/delete",
//   regionsMiddlewares.missingName,
//   regionsMiddlewares.notFound,
//   regionsControllers.delete
// );
// regionsRoutes.put(
//   "/countries/put",
//   regionsMiddlewares.missingName,
//   regionsMiddlewares.notFound,
//   regionsControllers.put
// );

export { regionsRoutes };
