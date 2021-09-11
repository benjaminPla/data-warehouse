const functions = {
  fetchGet: async (endpoint) => {
    return fetch(endpoint)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  },
  fetchPost: async (endpoint, body) => {
    const response = {};
    let orto = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    let text = await orto.text();
    response.response = text;
    response.success = orto.ok;
    return response;
  },
  clearNode: (node) => {
    document.getElementById(node).innerHTML = "";
  },
  fillNode: (node, content) => {
    document.getElementById(node).insertAdjacentHTML("beforeend", content);
  },
};

export { functions };
