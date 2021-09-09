import { sequelize } from "../../server/server.js";
import { regions } from "../../server/regions.js";

const regionsControllers = {
  findAll: async (req, res) => {
    res.send(await regions.findAll());
  },
  findByName: async (req, res) => {
    res.send(await regions.findByName(req.body.name));
  },
  post: (req, res) => {
    regions.post(req.body.name);
    res.send(`posted ${req.body.name}`);
  },
  delete: (req, res) => {
    regions.delete(req.body.name);
    res.send(`deleted ${req.body.name}`);
  },
    put: (req, res) => {
      regions.put(req.body);
      res.send(`updated ${req.body.name} to ${req.body.newName}`);
    },
};

export { regionsControllers };
