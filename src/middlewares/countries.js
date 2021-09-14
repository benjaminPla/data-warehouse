import { countries } from "../../server/countries.js";
import { regions } from "../../server/regions.js";

let response = { success: false, body: null };

const countriesMiddlewares = {
  countryNotFound: async (req, res, next) => {
    response.body = "country not found";
    (await countries.findByName(req.body.name)) == "" ? res.send(response) : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    (await countries.findByName(req.body.name)) == "" ? next() : res.send(response);
  },
  missingName: (req, res, next) => {
    response.body = "missing name";
    !req.body.name ? res.send(response) : next();
  },
  missingNewName: (req, res, next) => {
    response.body = "missing newName";
    !req.body.newName ? res.send(response) : next();
  },
  missingRegionId: (req, res, next) => {
    response.body = "missing regionId";
    !req.body.regionId ? res.send(response) : next();
  },
  regionNotFound: async (req, res, next) => {
    response.body = "region not found";
    (await regions.findById(req.body.regionId)) == "" ? res.send(response) : next();
  },
};

export { countriesMiddlewares };
