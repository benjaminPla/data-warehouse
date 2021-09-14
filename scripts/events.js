import { functions } from "./functions.js";
import { dom } from "./dom.js";

const events = {
  areasBtn: () => {
    document.getElementById("areas-btn").addEventListener("click", async () => {
      functions.clearNode("section-main");
      functions.fillNode("section-main", dom.areas);
      const areas = await functions.fetch("http://localhost:3000/cities/findAll", "GET");
      console.log(areas);
      areas.body.forEach((area) => {
        functions.fillNode("areas", dom.area(area));
      });
      events.postAreaBtn();
      events.areaDeleteBtn();
      events.areaPutBtn();
    });
  },
  postAreaBtn: () => {
    document.getElementById("post_area-btn").addEventListener("click", () => {
      functions.fillNode("section-main", dom.pop);
      events.closePop();
      functions.fillNode("pop-container", dom.areaPost);
      events.areaPostSaveBtn();
    });
  },
  closePop: () => {
    document.getElementById("pop").addEventListener("mousedown", (element) => {
      if (element.target.id === "pop") document.getElementById("pop").remove();
    });
  },
  areaPostSaveBtn: () => {
    document.getElementById("area_save-post-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("area_name-post-input").value,
        countryId: document.getElementById("country_name-post-input").value, // mejor un <select>
      };
      const data = await functions.fetch("http://localhost:3000/cities/post", "POST", body);
      functions.clearNode("response-container");
      functions.fillNode("response-container", dom.response);
      functions.response(data);
    });
  },
  areaDeleteBtn: () => {
    document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
      btn.addEventListener("click", async () => {
        functions.fillNode("section-main", dom.pop);
        events.closePop();
        functions.clearNode("pop-container");
        functions.fillNode("pop-container", dom.response);
        const body = { name: btn.parentElement.parentElement.parentElement.childNodes[1].textContent };
        let data = await functions.fetch("http://localhost:3000/cities/delete", "DELETE", body);
        functions.response(data);
      });
    });
  },
  areaPutBtn: () => {
    document.querySelectorAll(".fa-pencil-alt").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cityName = btn.parentElement.parentElement.parentElement.childNodes[1].textContent;
        functions.fillNode("section-main", dom.pop);
        events.closePop();
        functions.clearNode("pop-container");
        functions.fillNode("pop-container", dom.areaPut(cityName));
        events.areaPutSaveBtn(cityName);
      });
    });
  },
  areaPutSaveBtn: (cityName) => {
    document.getElementById("area_save-put-btn").addEventListener("click", async () => {
      functions.clearNode("response-container");
      functions.fillNode("response-container", dom.response);
      const body = {
        name: cityName,
        newName: document.getElementById("area_new_name-put-input").value,
        countryId: document.getElementById("country_name-put-input").value,
      };
      let data = await functions.fetch("http://localhost:3000/cities/put", "PUT", body);
      functions.response(data);
    });
  },
};

export { events };
