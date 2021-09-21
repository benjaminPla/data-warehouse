let response = { success: false, body: null };

const globalsMiddlewares = {
  missingId: (req, res, next) => {
    response.body = "missing id";
    !req.body.id ? res.send(response) : next();
  },
  missingName: (req, res, next) => {
    response.body = "missing name";
    !req.body.name ? res.send(response) : next();
  },
  missingNewName: (req, res, next) => {
    response.body = "missing newName";
    !req.body.newName ? res.send(response) : next();
  },
  missingRegionId: (req, res, next) => {
    response.body = "missing regionId";
    !req.body.regionId ? res.send(response) : next();
  },
};

export { globalsMiddlewares };
