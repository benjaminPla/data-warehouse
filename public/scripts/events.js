import { functions } from "./functions.js";
import { dom } from "./dom.js";

const events = {
  areasBtn: () => {
    document.getElementById("areas-btn").addEventListener("click", async () => {
      functions.clearNode("section-main");
      functions.fillNode("section-main", dom.areas);
      const areas = await functions.fetchGet("http://localhost:3000/cities/findAll");
      areas.forEach((area) => {
        functions.fillNode("areas", dom.area(area));
      });
      events.postAreaBtn();
    });
  },
  postAreaBtn: () => {
    document.getElementById("post_area-btn").addEventListener("click", () => {
      functions.fillNode("section-main", dom.pop());
      events.closePop();
      functions.fillNode("pop-container", dom.areaPost());
      events.areaPostSaveBtn();
    });
  },
  closePop: () => {
    document.getElementById("pop").addEventListener("click", (element) => {
      if (element.target.id === "pop") document.getElementById("pop").remove();
    });
  },
  areaPostSaveBtn: () => {
    document.getElementById("area_save-btn").addEventListener("click", async () => {
      const body = { name: document.getElementById("area_name-post-input").value, countryId: 1 }; //cambiar el countryId
      const response = await functions.fetchPost("http://localhost:3000/cities/post", body);
      functions.clearNode("post-response");
      functions.fillNode("post-response", response.response);
      if (response.success) {
        setTimeout(() => {
          document.getElementById("pop").remove();
          document.getElementById("areas-btn").click();
        }, 1000);
      }
    });
  },
};

export { events };
