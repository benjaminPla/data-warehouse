import { functions } from "./functions.js";
import { dom } from "./dom.js";
import { set } from "./set.js";

const events = {
  areasBtn: () => {
    document.getElementById("areas-btn").addEventListener("click", async () => {
      functions.clearNode("section-main");
      functions.fillNode("section-main", dom.areasControlPanel);
      const areas = await functions.fetchGet("http://localhost:3000/cities/findAll");
      areas.forEach((area) => {
        functions.fillNode("areas", dom.area(area.name));
      });
      set.areasControlPanel();
    });
  },
  postAreaBtn: () => {
    document.getElementById("post_area-btn").addEventListener("click", async () => {
      let fede = { name: "orto", countryId: 3 };
      fetch("http://localhost:3000/cities/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fede),
      })
        .then((res) => res.text())
        .then((e) => console.log(e))
        .catch((err) => console.log(err));
    });
  },
};

export { events };
