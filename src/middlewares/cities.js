import { cities } from "../../server/cities.js";
import { regions } from "../../server/regions.js";

const citiesMiddlewares = {
  cityNotFound: async (req, res, next) => {
    (await cities.findByName(req.body.name)) == "" ? res.status(400).send("city not found") : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    (await cities.findByName(req.body.name)) == "" ? next() : res.status(400).send("city already exists");
  },
  missingName: (req, res, next) => {
    !req.body.name ? res.status(400).send("missing name") : next();
  },
  missingNewName: (req, res, next) => {
    !req.body.newName ? res.status(400).send("missing newName") : next();
  },
  missingCountryId: (req, res, next) => {
    !req.body.countryId ? res.status(400).send("missing countryId") : next();
  },
  countryNotFound: async (req, res, next) => {
    (await regions.findById(req.body.countryId)) == "" ? res.status(400).send("country not found") : next();
  },
};

export { citiesMiddlewares };
