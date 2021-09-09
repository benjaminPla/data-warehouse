import { countries } from "../../server/countries.js";
import { regions } from "../../server/regions.js";

const countriesMiddlewares = {
  countryNotFound: async (req, res, next) => {
    (await countries.findByName(req.body.name)) == ""
      ? res.send("country not found")
      : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    (await countries.findByName(req.body.name)) == ""
      ? next()
      : res.send("country already exists");
  },
  missingName: (req, res, next) => {
    !req.body.name ? res.send("missing name") : next();
  },
  missingNewName: (req, res, next) => {
    !req.body.newName ? res.send("missing newName") : next();
  },
  missingRegionId: (req, res, next) => {
    !req.body.regionId ? res.send("missing regionId") : next();
  },
  regionNotFound: async (req, res, next) => {
    (await regions.findById(req.body.regionId)) == ""
      ? res.send("region not found")
      : next();
  },
};

export { countriesMiddlewares };
