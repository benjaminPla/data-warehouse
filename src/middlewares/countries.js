import { countries } from "../../server/countries.js";

const countriesMiddlewares = {
  checkIdOrName: async (req, res, next) => {
    const idOrName = req.body.id || req.body.name || req.params.idOrName;
    let find = await countries.findOne(idOrName);
    if (find[0] == "") {
      res.send("country not found");
    } else {
      next();
    }
  },
};

export { countriesMiddlewares };
