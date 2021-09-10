const functions = {
  fetchGet: (endpoint) => {
    return fetch(endpoint)
      .then((res) => res.json())
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
