import { countries } from "../../server/countries.js";

const countriesMiddlewares = {
  notFound: async (req, res, next) => {
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
};

export { countriesMiddlewares };
