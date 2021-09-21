import express from "express";
import { contactsControllers } from "../controllers/contacts.js";
import { contactsMiddlewares } from "../middlewares/contacts.js";

const contactsRoutes = express.Router();

contactsRoutes.get("/contacts/findAll", contactsControllers.findAll);
contactsRoutes.get("/contacts/findById", contactsMiddlewares.missingId, contactsMiddlewares.contactNotFound, contactsControllers.findById);
contactsRoutes.delete("/contacts/delete", contactsMiddlewares.missingId, contactsMiddlewares.contactNotFound, contactsControllers.delete);

export { contactsRoutes };
