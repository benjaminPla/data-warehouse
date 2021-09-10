const functions = {
  fetch: async (endpoint) => {
    return await fetch(endpoint).then((res) => res.json());
  },
  fillNode: (node, content) => {
    document.getElementById(node).innerHTML = content;
  },
};

export { functions };
