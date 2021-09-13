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
      events.areaDeleteBtn();
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
    document.getElementById("area_save-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("area_name-post-input").value,
        countryId: document.getElementById("country_name-post-input").value, // mejor un <select>
      };
      const response = await functions.fetch("http://localhost:3000/cities/post", "POST", body);
      functions.fillNode("pop-container", dom.response);
      if (response.success) {
        document.getElementById("response").classList.remove("response-error");
        document.getElementById("response").classList.add("response-success");
        functions.fillNode("response", dom.successIcon);
        functions.fillNode("response", response.response);
        setTimeout(() => {
          document.getElementById("pop").remove();
          document.getElementById("areas-btn").click();
        }, 1000);
      } else {
        document.getElementById("response").classList.remove("response-success");
        document.getElementById("response").classList.add("response-error");
        functions.fillNode("response", dom.errorIcon);
        functions.fillNode("response", response.response);
      }
    });
  },
  areaDeleteBtn: () => {
    document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
      btn.addEventListener("click", async () => {
        functions.fillNode("section-main", dom.pop);
        events.closePop();
        functions.fillNode("pop-container", dom.response);
        const body = { name: btn.parentElement.parentElement.parentElement.childNodes[1].textContent };
        let response = await functions.fetch("http://localhost:3000/cities/delete", "DELETE", body);
        if (response.success) {
          document.getElementById("response").classList.remove("response-error");
          document.getElementById("response").classList.add("response-success");
          functions.fillNode("response", dom.successIcon);
          functions.fillNode("response", response.response);
          setTimeout(() => {
            document.getElementById("pop").remove();
            document.getElementById("areas-btn").click();
          }, 1000);
        } else {
          document.getElementById("response").classList.remove("response-success");
          document.getElementById("response").classList.add("response-error");
          functions.fillNode("response", dom.errorIcon);
          functions.fillNode("response", response.response);
        }
      });
    });
  },
};

export { events };
