import { users } from "../../server/users.js";

let response = { success: false, body: null };

const usersMiddlewares = {
  missingUserName: (req, res, next) => {
    response.body = "missing userName";
    !req.body.user_name ? res.send(response) : next();
  },
  missingPassword: (req, res, next) => {
    response.body = "missing password";
    !req.body.password ? res.send(response) : next();
  },
  notFound: async (req, res, next) => {
    response.body = "user not found";
    (await users.login(req.body)) == "" ? res.send(response) : next();
  },
};

export { usersMiddlewares };
