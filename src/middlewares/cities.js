import { cities } from "../../server/cities.js";
import { countries } from "../../server/countries.js";

let response = { success: false, body: null };

const citiesMiddlewares = {
  cityIdNotFound: async (req, res, next) => {
    response.body = "city not found";
    (await cities.findById(req.body)) == "" ? res.send(response) : next();
  },
  cityNameNotFound: async (req, res, next) => {
    response.body = "city not found";
    (await cities.findByName(req.body)) == "" ? res.send(response) : next();
  },
  cityAlreadyExists: async (req, res, next) => {
    response.body = "city already exists";
    (await cities.findByName(req.body)) == "" ? next() : res.send(response);
  },
  newNameAlreadyExists: async (req, res, next) => {
    response.body = "another city already exist with that name";
    (await cities.findByName(req.body.newName)) == "" ? next() : res.send(response);
  },
  missingId: (req, res, next) => {
    response.body = "missing id";
    !req.body.id ? res.send(response) : next();
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
    (await countries.findById(req.body)) == "" ? res.send(response) : next();
  },
};

export { citiesMiddlewares };
