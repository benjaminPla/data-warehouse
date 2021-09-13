import { countries } from "../../server/countries.js";
import { regions } from "../../server/regions.js";

const countriesMiddlewares = {
  countryNotFound: async (req, res, next) => {
    (await countries.findByName(req.body.name)) == ""
      ? res.status(400).send("country not found")
      : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    (await countries.findByName(req.body.name)) == ""
      ? next()
      : res.status(400).send("country already exists");
  },
  missingName: (req, res, next) => {
    !req.body.name ? res.status(400).send("missing name") : next();
  },
  missingNewName: (req, res, next) => {
    !req.body.newName ? res.status(400).send("missing newName") : next();
  },
  missingRegionId: (req, res, next) => {
    !req.body.regionId ? res.status(400).send("missing regionId") : next();
  },
  regionNotFound: async (req, res, next) => {
    (await regions.findById(req.body.regionId)) == ""
      ? res.status(400).send("region not found")
      : next();
  },
};

export { countriesMiddlewares };
