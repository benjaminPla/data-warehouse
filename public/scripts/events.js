import { functions } from "./functions.js";
import { dom } from "./dom.js";

const events = {
  areasBtn: () => {
    document.getElementById("areas-btn").addEventListener("click", async () => {
      functions.fillNode("section-main", dom.areasControlPanel);
      let areas = await functions.fetch("http://localhost:3000/cities/findAll");
      console.log(areas);
      areas.forEach((area) => {
        functions.fillNode("area", dom.area(area.name));
      });
    });
  },
};

export { events };
