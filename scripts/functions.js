import { dom } from "./dom.js";

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
  response: (data) => {
    if (data.success) {
      document.getElementById("response").classList.remove("response-error");
      document.getElementById("response").classList.add("response-success");
      functions.fillNode("response", dom.successIcon);
      functions.fillNode("response", data.body);
      setTimeout(() => {
        document.getElementById("pop").remove();
        document.getElementById("areas-btn").click();
      }, 1000);
    } else {
      document.getElementById("response").classList.remove("response-success");
      document.getElementById("response").classList.add("response-error");
      functions.fillNode("response", dom.errorIcon);
      functions.fillNode("response", data.body);
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
