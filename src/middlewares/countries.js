import { countries } from "../../server/countries.js";

const countriesMiddlewares = {
  idOrNameNotFound: async (req, res, next) => {
    const idOrName = req.body.id || req.body.name || req.params.idOrName;
    if ((await countries.findOne(idOrName)) == "") {
      res.send("country not found");
    } else {
      next();
    }
  },
  nameAlreadyExists: async (req, res, next) => {
    if ((await countries.findOne(req.body.name)) == "") {
      next();
    } else {
      res.send("country already exists");
    }
  },
  missingId: (req, res, next) => {
    !req.body.id ? res.send("missing id") : next();
  },
  missingName: (req, res, next) => {
    !req.body.name ? res.send("missing name") : next();
  },
  delete: async (req, res, next) => {
    const idOrName = req.body.id || req.body.name || req.params.idOrName;
    let find = await countries.findOne(idOrName);
    if (find == "") {
      res.send("country not found");
    } else {
      next();
    }
  },
};

export { countriesMiddlewares };
