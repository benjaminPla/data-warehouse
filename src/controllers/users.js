import { sequelize } from "../../server/server.js";
import { users } from "../../server/users.js";

let response = { success: true, body: null };

const usersControllers = {
  findAll: async (req, res) => {
    response.body = await users.findAll();
    res.send(response);
  },
  findByName: async (req, res) => {
    response.body = await users.findByName(req.body);
    res.send(response);
  },
  post: (req, res) => {
    response.body = `posted ${req.body.name}`;
    users.post(req.body);
    res.send(response);
  },
  delete: (req, res) => {
    response.body = `deleted ${req.body.name}`;
    users.delete(req.body);
    res.send(response);
  },
  login: (req, res) => {
    response.body = `welcome ${req.body.name}`;
    res.send(response);
  },
};

export { usersControllers };
