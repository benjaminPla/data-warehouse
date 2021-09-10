// document.getElementById("login-btn").addEventListener("click", async () => {
//   location.href = "http://127.0.0.1:5500/public/home.html";
// });

document.getElementById("areas-btn").addEventListener("click", async () => {
  document.getElementById("section-main").innerHTML =
    "<div class='control-panel'>" +
    "<div>" +
    "<input type='text' />" +
    "<button><i class='fas fa-search'></i></button>" +
    "</div>" +
    "<div>" +
    "<button><i class='fas fa-plus-square'></i></button>" +
    "<button><i class='fas fa-file-download'></i></button>" +
    "<button><i class='fas fa-file-upload'></i></button>" +
    "</div>" +
    "</div>" +
    "<ul id='areas'></ul>";
  let areas = await fetch("http://localhost:3000/cities/findAll").then((res) => res.json());
  areas.forEach((area) => {
    document.getElementById("areas").innerHTML += `
    <li>
    <span>${area.name}</span>
    <div>
    <button><i class="fas fa-pencil-alt"></i></button>
    <button><i class="fas fa-trash-alt"></i></button>
    </div>
    </li>`;
  });
});
