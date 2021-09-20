import { cities } from "../../server/cities.js";
import { regions } from "../../server/regions.js";

let response = { success: false, body: null };

const citiesMiddlewares = {
  cityNotFound: async (req, res, next) => {
    response.body = "city not found";
    (await cities.findByName(req.body.name)) == "" ? res.send(response) : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    response.body = "city already exists";
    (await cities.findByName(req.body.name)) == "" ? next() : res.send(response);
  },
  newNameAlreadyExists: async (req, res, next) => {
    response.body = "another city already exist with that name";
    (await cities.findByName(req.body.newName)) == "" ? next() : res.send(response);
  },
  missingName: (req, res, next) => {
    response.body = "missing name";
    !req.body.name ? res.send(response) : next();
  },
  missingNewName: (req, res, next) => {
    response.body = "missing newName";
    !req.body.newName ? res.send(response) : next();
  },
  missingCountryId: (req, res, next) => {
    response.body = "missing countryId";
    !req.body.countryId ? res.send(response) : next();
  },
  countryNotFound: async (req, res, next) => {
    response.body = "country not found";
    (await regions.findById(req.body.countryId)) == "" ? res.send(response) : next();
  },
};

export { citiesMiddlewares };
