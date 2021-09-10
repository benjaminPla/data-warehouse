import { functions } from "./functions.js";
import { dom } from "./dom.js";
import { set } from "./set.js";

const events = {
  areasBtn: () => {
    document.getElementById("areas-btn").addEventListener("click", async () => {
      functions.clearNode("section-main");
      functions.fillNode("section-main", dom.areas);
      const areas = await functions.fetchGet("http://localhost:3000/cities/findAll");
      areas.forEach((area) => {
        functions.fillNode("areas", dom.area(area.name));
      });
      set.areas();
    });
  },
  postAreaBtn: () => {
    document.getElementById("post_area-btn").addEventListener("click", () => {
      functions.fillNode("section-main", dom.pop());
      // document.querySelector("body").innerHTML += dom.pop();
      set.pop();
      functions.fillNode("pop-container", dom.areaPost());
      set.popAreaPost();
    });
  },
  closePop: () => {
    document.getElementById("pop").addEventListener("click", (element) => {
      if (element.target.id === "pop") document.getElementById("pop").remove();
    });
  },
  areaPostSaveBtn: () => {
    document.getElementById("area_save-btn").addEventListener("click", async () => {
      const body = { name: document.getElementById("area_name-post-input").value, countryId: 1 };
      const response = await functions.fetchPost("http://localhost:3000/cities/post", body);
      functions.clearNode("pop-container");
      functions.fillNode("pop-container", dom.apiResponse(response));
      document.getElementById("areas-btn").click();
    });
  },
};

export { events };
