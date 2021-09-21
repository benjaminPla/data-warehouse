import express from "express";
import { contactsControllers } from "../controllers/contacts.js";
// import { contactsMiddlewares } from "../middlewares/contacts.js";

const contactsRoutes = express.Router();

contactsRoutes.get("/contacts/findAll", contactsControllers.findAll);

export { contactsRoutes };
