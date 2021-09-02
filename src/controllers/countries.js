import { sequelize } from "../../server/server.js";
import { countries } from "../../server/countries.js";

const controllers = {
  countriesFindAll: async (req, res) => {
    res.send(await countries.findAll());
  },
  countriesFindOne: async (req, res) => {
    const idOrName = req.body.id || req.body.name || req.params.idOrName;
    res.send(await countries.findOne(idOrName));
  },
  countriesPost: (req, res) => {
    countries.post(req.body.name);
    res.send(`posted ${req.body.name}`);
  },
  countriesDelete: (req, res) => {
    const idOrName = req.body.id || req.body.name || req.params.idOrName;
    countries.delete(idOrName);
    res.send(`deleted ${idOrName}`);
  },
  countriesPut: (req, res) => {
    const idOrName = req.body.id || req.body.name || req.params.idOrName;
    const data = { put: req.body.put, idOrName: idOrName };
    countries.put(data);
    res.send(`updated ${req.body.put}`);
  },
};

export { controllers };
