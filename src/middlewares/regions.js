import { regions } from "../../server/regions.js";

let response = { success: false, body: null };

const regionsMiddlewares = {
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
  idNotFound: async (req, res, next) => {
    response.body = "region not found";
    (await regions.findOne(req.body)) == "" ? res.send(response) : next();
  },
  nameNotFound: async (req, res, next) => {
    response.body = "region not found";
    (await regions.findOne(req.body)) == "" ? res.send(response) : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    response.body = "region already exists";
    (await regions.findOne(req.body)) == "" ? next() : res.send(response);
  },
};

export { regionsMiddlewares };
