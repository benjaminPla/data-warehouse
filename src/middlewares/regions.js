import { regions } from "../../server/regions.js";

const regionsMiddlewares = {
  notFound: async (req, res, next) => {
    (await regions.findByName(req.body.name)) == ""
      ? res.send("region not found")
      : next();
  },
  nameAlreadyExists: async (req, res, next) => {
    (await regions.findByName(req.body.name)) == ""
      ? next()
      : res.send("region already exists");
  },
  missingName: (req, res, next) => {
    !req.body.name ? res.send("missing name") : next();
  },
  missingNewName: (req, res, next) => {
    !req.body.newName ? res.send("missing newName") : next();
  },
};

export { regionsMiddlewares };
