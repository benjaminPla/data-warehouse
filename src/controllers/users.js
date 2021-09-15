import { sequelize } from "../../server/server.js";
import { users } from "../../server/users.js";

let response = { success: true, body: null };

const usersControllers = {
  findAll: async (req, res) => {
    response.body = await users.findAll();
    res.send(response);
  },
  login: async (req, res) => {
    response.body = await users.login(req.body);
    res.send(response);
  },
};

export { usersControllers };
