import { sequelize } from "../../server/server.js";
import { cities } from "../../server/cities.js";

let response = { success: true, body: null };

const citiesControllers = {
  findAll: async (req, res) => {
    response.body = await cities.findAll();
    res.send(response);
  },
  findByName: async (req, res) => {
    response.body = await cities.findByName(req.body.name);
    res.send(response);
  },
  post: (req, res) => {
    response.body = `posted ${req.body.name}`;
    cities.post(req.body);
    res.send(response);
  },
  delete: (req, res) => {
    response.body = `deleted ${req.body.name}`;
    cities.delete(req.body.name);
    res.send(response);
  },
  put: (req, res) => {
    response.body = `updated ${req.body.name} to ${req.body.newName}`;
    cities.put(req.body);
    res.send(response);
  },
};

export { citiesControllers };
