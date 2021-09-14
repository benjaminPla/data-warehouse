const functions = {
  fetch: async (endpoint, method, body) => {
    return await fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  },
  clearNode: (node) => {
    document.getElementById(node).innerHTML = "";
  },
  fillNode: (node, content) => {
    document.getElementById(node).insertAdjacentHTML("beforeend", content);
  },
};

export { functions };
