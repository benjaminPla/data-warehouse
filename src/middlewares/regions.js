import { regions } from "../../server/regions.js";

let response = { success: false, body: null };

const regionsMiddlewares = {
  regionNotFound: async (req, res, next) => {
    response.body = "region not found";
    (await regions.findByName(req.body.name)) == "" ? res.send(response) : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    response.body = "region already exists";
    (await regions.findByName(req.body.name)) == "" ? next() : res.send(response);
  },
  newNameAlreadyExists: async (req, res, next) => {
    response.body = "another region already exist with that name";
    (await regions.findByName(req.body.newName)) == "" ? next() : res.send(response);
  },
  missingName: (req, res, next) => {
    response.body = "missing name";
    !req.body.name ? res.send(response) : next();
  },
  missingNewName: (req, res, next) => {
    response.body = "missing newName";
    !req.body.newName ? res.send(response) : next();
  },
};

export { regionsMiddlewares };
