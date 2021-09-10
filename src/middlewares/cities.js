import { cities } from "../../server/cities.js";
import { regions } from "../../server/regions.js";

const citiesMiddlewares = {
  cityNotFound: async (req, res, next) => {
    (await cities.findByName(req.body.name)) == "" ? res.send("city not found") : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    (await cities.findByName(req.body.name)) == "" ? next() : res.send("city already exists");
  },
  missingName: (req, res, next) => {
    !req.body.name ? res.send("missing name") : next();
  },
  missingNewName: (req, res, next) => {
    !req.body.newName ? res.send("missing newName") : next();
  },
  missingCountryId: (req, res, next) => {
    !req.body.countryId ? res.send("missing countryId") : next();
  },
  countryNotFound: async (req, res, next) => {
    (await regions.findById(req.body.countryId)) == "" ? res.send("country not found") : next();
  },
};

export { citiesMiddlewares };
