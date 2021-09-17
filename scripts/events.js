import { functions } from "./functions.js";
import { dom } from "./dom.js";

const events = {
  expandBtn: () => {
    document.querySelectorAll(".fa-angle-down").forEach((btn) => {
      btn.addEventListener("click", (element) => {
        document.getElementById(element.target.parentElement.parentElement.parentElement.id).classList.toggle("vertical-expand");
        element.target.previousElementSibling.classList.toggle("horizontal-expand");
        element.target.previousElementSibling.classList.toggle("vertical-expand");
      });
    });
  },
  loginBtn: () => {
    document.getElementById("login-btn").addEventListener("click", async () => {
      const body = {
        user_name: document.getElementById("user-name").value,
        password: document.getElementById("password").value,
      };
      const data = await functions.fetch("http://localhost:3000/users/login", "POST", body);
      functions.response(data, "http://127.0.0.1:5500/public/home.html");
    });
  },
  areasBtn: () => {
    document.getElementById("areas-btn").addEventListener("click", async () => {
      functions.clearNode("section-main");
      functions.fillNode("section-main", dom.table("regions-table", "Regiones", "regions_post-btn"));
      const regions = await functions.fetch("http://localhost:3000/regions/findAll", "GET");
      regions.body.forEach((region) => {
        functions.fillNode("regions-table", dom.tableData(region));
      });
      functions.fillNode("section-main", dom.table("countries-table", "Países", "countries_post-btn"));
      const countries = await functions.fetch("http://localhost:3000/countries/findAll", "GET");
      countries.body.forEach((country) => {
        functions.fillNode("countries-table", dom.tableData(country));
      });
      functions.fillNode("section-main", dom.table("cities-table", "Ciudades", "cities_post-btn"));
      const cities = await functions.fetch("http://localhost:3000/cities/findAll", "GET");
      cities.body.forEach((city) => {
        functions.fillNode("cities-table", dom.tableData(city));
      });
      events.expandBtn();
      events.regionsPostBtn();
      events.deleteBtns();
      // events.areaPutBtn();
    });
  },
  regionsPostBtn: () => {
    document.getElementById("regions_post-btn").addEventListener("click", () => {
      functions.fillNode("section-main", dom.pop);
      events.closePop();
      functions.fillNode("pop-container", dom.regionPost());
      events.regionPostSaveBtn();
    });
  },
  closePop: () => {
    document.getElementById("pop").addEventListener("mousedown", (element) => {
      if (element.target.id === "pop") document.getElementById("pop").remove();
    });
  },
  regionPostSaveBtn: () => {
    document.getElementById("region_save-post-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("region_name-post-input").value,
      };
      const data = await functions.fetch("http://localhost:3000/regions/post", "POST", body);
      functions.clearNode("response-container");
      functions.fillNode("response-container", dom.response);
      functions.response(data);
    });
  },
  deleteBtns: () => {
    document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
      btn.addEventListener("click", async () => {
        functions.fillNode("section-main", dom.pop);
        events.closePop();
        functions.clearNode("pop-container");
        functions.fillNode("pop-container", dom.confirm);
        events.confirmNo();
        events.confirmYes();
      });
    });
  },
  confirmYes: () => {
    document.getElementById("confirm-yes-btn").addEventListener("click", async () => {
      const body = { name: "orto" };
      const data = await functions.fetch("http://localhost:3000/regions/delete", "DELETE", body);
      functions.response(data);
    });
  },
  confirmNo: () => {
    document.getElementById("confirm-no-btn").addEventListener("click", () => {
      document.getElementById("pop").remove();
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
