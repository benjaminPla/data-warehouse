import { functions } from "./functions.js";
import { dom } from "./dom.js";

const events = {
  usersBtn: () => {
    document.getElementById("users-btn").addEventListener("click", async () => {
      functions.clearNode("section-main");
      functions.fillNode("section-main", dom.table("users-table", "users", "users_post-btn"));
      const data = await functions.fetch("http://localhost:3000/users/findAll", "GET");
      data.body.forEach((user) => {
        functions.fillNode("users-table", dom.tableDataUsers(user, "table-data-x3"));
      });
      events.expandBtn();
      events.userPostBtn();
      events.putBtns();
      events.deleteBtns();
    });
  },
  userPostBtn: () => {
    document.getElementById("users_post-btn").addEventListener("click", () => {
      functions.pop(dom.userPost);
      events.usersPostSaveBtn();
    });
  },
  usersPostSaveBtn: () => {
    document.getElementById("user_save-post-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("user_name-post-input").value,
        password: document.getElementById("user_password-post-input").value,
        rank: 2,
      };
      const data = await functions.fetch("http://localhost:3000/users/post", "POST", body);
      functions.response(data);
    });
  },
  onEnter: (buttonId) => {
    window.addEventListener("keyup", (key) => {
      if (key.key == "Enter") document.getElementById(buttonId).click();
    });
  },
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
        name: document.getElementById("user-name").value,
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
        functions.fillNode("regions-table", dom.tableDataRegion(region, "table-data-x2"));
      });
      functions.fillNode("section-main", dom.table("countries-table", "Países", "countries_post-btn"));
      const countries = await functions.fetch("http://localhost:3000/countries/findAll", "GET");
      countries.body.forEach((country) => {
        functions.fillNode("countries-table", dom.tableDataCountry(country, "table-data-x3"));
      });
      functions.fillNode("section-main", dom.table("cities-table", "Ciudades", "cities_post-btn"));
      const cities = await functions.fetch("http://localhost:3000/cities/findAll", "GET");
      cities.body.forEach((city) => {
        functions.fillNode("cities-table", dom.tableDataCity(city, "table-data-x4"));
      });
      events.expandBtn();
      events.regionsPostBtn();
      events.countriesPostBtn();
      events.citiesPostBtn();
      events.putBtns();
      events.deleteBtns();
    });
  },
  regionsPostBtn: () => {
    document.getElementById("regions_post-btn").addEventListener("click", () => {
      functions.pop(dom.regionPost);
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
  countriesPostBtn: () => {
    document.getElementById("countries_post-btn").addEventListener("click", async () => {
      functions.pop(dom.countryPost);
      const regions = await functions.fetch("http://localhost:3000/regions/findAll", "GET");
      regions.body.forEach((region) => {
        functions.fillNode("country_post-select", dom.option(region));
      });
      events.countriesPostSaveBtn();
    });
  },
  countriesPostSaveBtn: () => {
    document.getElementById("country_save-post-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("country_name-post-input").value,
        regionId: document.getElementById("country_post-select").value,
      };
      const data = await functions.fetch("http://localhost:3000/countries/post", "POST", body);
      functions.response(data);
    });
  },
  citiesPostBtn: () => {
    document.getElementById("cities_post-btn").addEventListener("click", async () => {
      functions.pop(dom.cityPost);
      const countries = await functions.fetch("http://localhost:3000/countries/findAll", "GET");
      countries.body.forEach((country) => {
        functions.fillNode("city_post-select", dom.option(country));
      });
      events.cityPostSaveBtn();
    });
  },
  cityPostSaveBtn: () => {
    document.getElementById("city_save-post-btn").addEventListener("click", async () => {
      const body = {
        name: document.getElementById("city_name-post-input").value,
        countryId: document.getElementById("city_post-select").value,
      };
      const data = await functions.fetch("http://localhost:3000/cities/post", "POST", body);
      functions.response(data);
    });
  },
  putBtns: () => {
    document.querySelectorAll(".fa-pencil-alt").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (btn.id.split("-")[1] === "regions") {
          functions.pop(dom.putRegion(btn.id.split("-")[2]));
          events.regionPutSaveBtn(btn.id.split("-")[2]);
        }
        if (btn.id.split("-")[1] === "countries") {
          functions.pop(dom.putCountry(btn.id.split("-")[2]));
          const data = await functions.fetch("http://localhost:3000/regions/findAll", "GET");
          data.body.forEach((region) => {
            functions.fillNode("country_put-select", dom.option(region));
          });
          events.countryPutSaveBtn(btn.id.split("-")[2]);
        }
        if (btn.id.split("-")[1] === "cities") {
          functions.pop(dom.putCity(btn.id.split("-")[2]));
          const data = await functions.fetch("http://localhost:3000/countries/findAll", "GET");
          data.body.forEach((country) => {
            functions.fillNode("city_put-select", dom.option(country));
          });
          events.cityPutSaveBtn(btn.id.split("-")[2]);
        }
        if (btn.id.split("-")[1] === "users") {
          functions.pop(dom.putUser(btn.id.split("-")[2]));
          events.userPutSaveBtn(btn.id.split("-")[2]);
        }
      });
    });
  },
  userPutSaveBtn: (userName) => {
    document.getElementById("user_save-put-btn").addEventListener("click", async () => {
      const body = {
        name: userName,
        newName: document.getElementById("user-new_name-put-input").value,
        password: document.getElementById("user-new_password-put-input").value,
      };
      const data = await functions.fetch("http://localhost:3000/users/put", "PUT", body);
      functions.response(data);
    });
  },
  regionPutSaveBtn: (regionName) => {
    document.getElementById("region_save-put-btn").addEventListener("click", async () => {
      const body = {
        name: regionName,
        newName: document.getElementById("region-new_name-put-input").value,
      };
      const data = await functions.fetch("http://localhost:3000/regions/put", "PUT", body);
      functions.response(data);
    });
  },
  countryPutSaveBtn: (countryName) => {
    document.getElementById("country_save-put-btn").addEventListener("click", async () => {
      const body = {
        name: countryName,
        newName: document.getElementById("country-new_name-put-input").value,
        regionId: document.getElementById("country_put-select").value,
      };
      const data = await functions.fetch("http://localhost:3000/countries/put", "PUT", body);
      functions.response(data);
    });
  },
  cityPutSaveBtn: (cityName) => {
    document.getElementById("city_save-put-btn").addEventListener("click", async () => {
      const body = {
        name: cityName,
        newName: document.getElementById("city-new_name-put-input").value,
        countryId: document.getElementById("city_put-select").value,
      };
      const data = await functions.fetch("http://localhost:3000/cities/put", "PUT", body);
      functions.response(data);
    });
  },
  deleteBtns: () => {
    document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
      btn.addEventListener("click", () => {
        functions.pop(dom.confirm);
        sessionStorage.setItem("del", btn.id);
        events.confirmNo();
        events.confirmYes();
      });
    });
  },
  confirmYes: () => {
    document.getElementById("confirm-yes-btn").addEventListener("click", async () => {
      const body = { name: sessionStorage.getItem("del").split("-")[2] };
      const endPoint = `http://localhost:3000/${sessionStorage.getItem("del").split("-")[1]}/delete`;
      const data = await functions.fetch(endPoint, "DELETE", body);
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
