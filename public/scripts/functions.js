const functions = {
  fetchGet: async (endpoint) => {
    return fetch(endpoint)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  },
  fetchPost: async (endpoint, body) => {
    return fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.text())
      .catch((err) => console.log(err));
  },
  clearNode: (node) => {
    document.getElementById(node).innerHTML = "";
  },
  fillNode: (node, content) => {
    document.getElementById(node).innerHTML += content;
  },
};

export { functions };
