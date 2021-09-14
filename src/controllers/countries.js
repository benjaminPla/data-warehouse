import { sequelize } from "../../server/server.js";
import { countries } from "../../server/countries.js";

let response = { success: true, body: null };

const countriesControllers = {
  findAll: async (req, res) => {
    response.body = await countries.findAll();
    res.send(response);
  },
  findByName: async (req, res) => {
    response.body = await countries.findByName(req.body.name);
    res.send(response);
  },
  post: (req, res) => {
    response.body = `posted ${req.body.name}`;
    countries.post(req.body);
    res.send(response);
  },
  delete: (req, res) => {
    response.body = `deleted ${req.body.name}`;
    countries.delete(req.body.name);
    res.send(response);
  },
  put: (req, res) => {
    response.body = `updated ${req.body.name} to ${req.body.newName}`;
    countries.put(req.body);
    res.send(response);
  },
};

export { countriesControllers };
