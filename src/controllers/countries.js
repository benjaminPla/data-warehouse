import { sequelize } from "../../server/server.js";
import { countries } from "../../server/countries.js";

const controllers = {
  countriesFindAll: async (req, res) => {
    let find = await countries.findAll();
    res.send(find[0]);
  },
  countriesFindOne: async (req, res) => {
    const idOrName = 2 || req.body.id || req.body.name || req.params.idOrName;
    let find = await countries.findOne(idOrName);
    res.send(find[0]);
  },
  countriesPost: async (req, res) => {
    countries.post(req.body.name);
    res.send(`posted ${req.body.name}`);
  },
};

export { controllers };
