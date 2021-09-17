import { functions } from "./functions.js";
import { dom } from "./dom.js";

const events = {
  expandBtn: () => {
    document.querySelectorAll(".fa-angle-down").forEach((btn) => {
      btn.addEventListener("click", (element) => {
        document.getElementById(element.target.parentElement.parentElement.parentElement.id).classList.toggle("vertical-expand");
        element.target.previousElementSibling.classList.toggle("horizontal-expand");
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
      const regions = await functions.fetch("http://localhost:3000/regions/findAll", "GET");
      functions.fillNode("section-main", dom.table("regions-table", "Regiones", "regions_post-btn"));
      regions.body.forEach((region) => {
        functions.fillNode("regions-table", dom.tableData(region));
      });
      const countries = await functions.fetch("http://localhost:3000/countries/findAll", "GET");
      functions.fillNode("section-main", dom.table("countries-table", "Países", "countries_post-btn"));
      countries.body.forEach((country) => {
        functions.fillNode("countries-table", dom.tableData(country));
      });
      const cities = await functions.fetch("http://localhost:3000/cities/findAll", "GET");
      functions.fillNode("section-main", dom.table("cities-table", "Ciudades", "cities_post-btn"));
      cities.body.forEach((city) => {
        functions.fillNode("cities-table", dom.tableData(city));
      });
      events.expandBtn();
      events.regionsPostBtn();
      events.deleteBtns();
    });
  },
  regionsPostBtn: () => {
    document.getElementById("regions_post-btn").addEventListener("click", () => {
      functions.pop(dom.regionPostPop);
      events.regionsPostSaveBtn();
    });
  },
  regionsPostSaveBtn: () => {
    document.getElementById("region_save-post-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("region_name-post-input").value,
      };
      const data = await functions.fetch("http://localhost:3000/regions/post", "POST", body);
      functions.response(data);
    });
  },
  deleteBtns: () => {
    document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
      btn.addEventListener("click", (element) => {
        functions.pop(dom.confirm);
        sessionStorage.setItem("del", element.target.parentElement.parentElement.children[1].textContent);
        events.confirmNo();
        events.confirmYes();
      });
    });
  },
  confirmYes: () => {
    document.getElementById("confirm-yes-btn").addEventListener("click", async (element) => {
      console.log(element.target.parentElement);
      const body = { name: sessionStorage.getItem("del") };
      const data = await functions.fetch("http://localhost:3000/regions/delete", "DELETE", body);
      functions.response(data);
    });
  },
  confirmNo: () => {
    document.getElementById("confirm-no-btn").addEventListener("click", () => {
      document.getElementById("pop").remove();
    });
  },
};

export { events };
