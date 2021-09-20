import { users } from "../../server/users.js";

let response = { success: false, body: null };

const usersMiddlewares = {
  missingName: (req, res, next) => {
    response.body = "missing name";
    !req.body.name ? res.send(response) : next();
  },
  missingPassword: (req, res, next) => {
    response.body = "missing password";
    !req.body.password ? res.send(response) : next();
  },
  nameDoNotFound: async (req, res, next) => {
    response.body = "user not found";
    (await users.findByName(req.body)) == "" ? res.send(response) : next();
  },
  dataDoNotMatch: async (req, res, next) => {
    response.body = "data do not match";
    (await users.login(req.body)) == "" ? res.send(response) : next();
  },
};

export { usersMiddlewares };
