const functions = {
  fetchGet: async (endpoint) => {
    return fetch(endpoint)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  },
  fetch: async (endpoint, method, body) => {
    const response = { response: "", success: "" };
    try {
      let res = await fetch(endpoint, { method: method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      response.response = await res.text();
      response.success = res.ok;
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  clearNode: (node) => {
    document.getElementById(node).innerHTML = "";
  },
  fillNode: (node, content) => {
    document.getElementById(node).insertAdjacentHTML("beforeend", content);
  },
};

export { functions };
