import { sequelize } from "../../server/server.js";
import { regions } from "../../server/regions.js";

let response = { success: true, body: null };

const regionsControllers = {
  findAll: async (req, res) => {
    response.body = await regions.findAll();
    res.send(response);
  },
  findByName: async (req, res) => {
    response.body = await regions.findByName(req.body.name);
    res.send(response);
  },
  post: (req, res) => {
    response.body = `posted ${req.body.name}`;
    regions.post(req.body.name);
    res.send(response);
  },
  delete: (req, res) => {
    response.body = `deleted ${req.body.name}`;
    regions.delete(req.body.name);
    res.send(response);
  },
  put: (req, res) => {
    response.body = `updated ${req.body.name} to ${req.body.newName}`;
    regions.put(req.body);
    res.send(response);
  },
};

export { regionsControllers };
