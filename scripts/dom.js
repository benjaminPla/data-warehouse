const dom = {
  areas:
    "<div class='control-panel'>" +
    "<div>" +
    "<input type='text' />" +
    "<button><i class='fas fa-search'></i></button>" +
    "</div>" +
    "<div>" +
    "<button id='post_area-btn'><i class='fas fa-plus-square'></i></button>" +
    "<button><i class='fas fa-file-download'></i></button>" +
    "<button><i class='fas fa-file-upload'></i></button>" +
    "</div>" +
    "</div>" +
    "<ul id='areas'></ul>",
  area: (area) => {
    return `
    <li area-id="${area.city_id}">
    <span>${area.city_name}</span>
    <span>${area.country_name}</span>
    <span>${area.region_name}</span>
    <div>
    <button><i class="fas fa-pencil-alt"></i></button>
    <button><i class="fas fa-trash-alt"></i></button>
    </div>
    </li>`;
  },
  pop: "<div id='pop'><div id='pop-container'></div></div>",
  response: "<span id='response'></span>",
  areaPost: (option) => {
    return `
    <h2>Crear una nueva ciudad</h2>
    <input id='area_name-post-input' type='text' placeholder='Ingrese el nombre de la ciudad' autocomplete='off' />
    <select id='cities-select'>${option}</select>
    <button id='area_save-post-btn'>Guardar</button>
    <div id='response-container'></div>`;
  },
  areaPut: (cityName) => {
    return `<h2>Actualiza los datos de ${cityName}</h2>
      <input id='area_new_name-put-input' type='text' placeholder='Ingrese el nuevo nombre de la ciudad' autocomplete='off' />
      <input id='country_name-put-input' type='number' placeholder='Ingresa el nuevo país al cual pertenece' autocomplete='off' />
      <button id='area_save-put-btn'>Guardar</button>
      <div id='response-container'></div>`;
  },
  option: (data) => {
    return `<option value="${data.id}">${data.name}</option>`;
  },
  successIcon: "<i class='fas fa-check-circle'></i>",
  errorIcon: "<i class='fas fa-exclamation-circle'></i>",
};

export { dom };
