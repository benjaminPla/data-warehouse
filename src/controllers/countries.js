import { sequelize } from "../../server/server.js";
import { countries } from "../../server/countries.js";

const countriesControllers = {
  findAll: async (req, res) => {
    res.send(await countries.findAll());
  },
  findByName: async (req, res) => {
    res.send(await countries.findByName(req.body.name));
  },
  post: (req, res) => {
    countries.post(req.body);
    res.send(`posted ${req.body.name}`);
  },
  delete: (req, res) => {
    countries.delete(req.body.name);
    res.send(`deleted ${req.body.name}`);
  },
  put: (req, res) => {
    countries.put(req.body);
    res.send(`updated ${req.body.name} to ${req.body.newName}`);
  },
};

export { countriesControllers };
