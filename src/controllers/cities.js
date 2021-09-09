import { sequelize } from "../../server/server.js";
import { cities } from "../../server/cities.js";

const citiesControllers = {
  findAll: async (req, res) => {
    res.send(await cities.findAll());
  },
  findByName: async (req, res) => {
    res.send(await cities.findByName(req.body.name));
  },
  post: (req, res) => {
    cities.post(req.body);
    res.send(`posted ${req.body.name}`);
  },
  delete: (req, res) => {
    cities.delete(req.body.name);
    res.send(`deleted ${req.body.name}`);
  },
  put: (req, res) => {
    cities.put(req.body);
    res.send(`updated ${req.body.name} to ${req.body.newName}`);
  },
};

export { citiesControllers };
