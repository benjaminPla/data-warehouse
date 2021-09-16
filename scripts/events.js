import { functions } from "./functions.js";
import { dom } from "./dom.js";

const events = {
  expandBtn: () => {
    document.querySelectorAll(".fa-angle-down").forEach((btn) => {
      btn.addEventListener("click", (element) => {
        document.getElementById(element.target.attributes[0].value).classList.toggle("vertical-expand");
      });
    });
  },
  loginBtn: () => {
    document.getElementById("login-btn").addEventListener("click", async () => {
      functions.clearNode("response-container");
      functions.fillNode("response-container", dom.response);
      const body = {
        user_name: document.getElementById("user-name").value,
        password: document.getElementById("password").value,
      };
      const login = await functions.fetch("http://localhost:3000/users/login", "POST", body);
      if (login.success) {
        document.getElementById("response").classList.add("response-success");
        functions.fillNode("response", login.body);
        setInterval(() => {
          location.href = "http://127.0.0.1:5500/public/home.html";
        }),
          500;
      } else {
        document.getElementById("response").classList.add("response-error");
        functions.fillNode("response", login.body);
      }
    });
  },
  areasBtn: () => {
    document.getElementById("areas-btn").addEventListener("click", async () => {
      functions.clearNode("section-main");
      functions.fillNode("section-main", dom.areas);
      const areas = await functions.fetch("http://localhost:3000/cities/findAll", "GET");
      areas.body.forEach((area) => {
        functions.fillNode("areas", dom.area(area));
      });
      events.postAreaBtn();
      events.areaDeleteBtn();
      events.areaPutBtn();
      events.expandBtn();
    });
  },
  postAreaBtn: () => {
    document.getElementById("post_area-btn").addEventListener("click", async () => {
      functions.fillNode("section-main", dom.pop);
      events.closePop();
      functions.fillNode("pop-container", dom.areaPost());
      const country = await functions.fetch("http://localhost:3000/countries/findAll", "GET");
      country.body.forEach((country) => {
        functions.fillNode("cities-select", dom.option(country));
      });
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
        countryId: document.getElementById("cities-select").value,
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
