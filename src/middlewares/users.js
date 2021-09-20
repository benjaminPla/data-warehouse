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
  missingNewName: (req, res, next) => {
    response.body = "missing newName";
    !req.body.newName ? res.send(response) : next();
  },
  newNameAlreadyExist: async (req, res, next) => {
    response.body = "another user with that name already exists";
    (await users.findByName(req.body.newName)) == "" ? next() : res.send(response);
  },
  userAlreadyExists: async (req, res, next) => {
    response.body = "user already exists";
    (await users.findByName(req.body.name)) == "" ? next() : res.send(response);
  },
  nameDoNotFound: async (req, res, next) => {
    response.body = "user not found";
    (await users.findByName(req.body.name)) == "" ? res.send(response) : next();
  },
  dataDoNotMatch: async (req, res, next) => {
    response.body = "data do not match";
    (await users.login(req.body)) == "" ? res.send(response) : next();
  },
};

export { usersMiddlewares };
