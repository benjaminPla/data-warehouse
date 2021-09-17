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
    "<div class='limiter'><span>Regiones</span><span><i expand='regions' class='fas fa-angle-down'></i></span></div>" +
    "<ul id='regions' class='data-container'></ul>" +
    "<div class='limiter'><span>Países</span><span><i expand='countries' class='fas fa-angle-down'></i></span></div>" +
    "<ul id='countries' class='data-container'></ul>" +
    "<div class='limiter'><span>Ciudades</span><span><i expand='cities' class='fas fa-angle-down'></i></span></div>" +
    "<ul id='cities' class='data-container'></ul>",
  pop: "<div id='pop'><div id='pop-container'></div></div>",
  response: "<span id='response'></span>",
  regionPost: () => {
    return `
    <h2>Crear una nueva región</h2>
    <input id='region_name-post-input' type='text' placeholder='Ingrese el nombre de la región' autocomplete='off' />
    <button id='region_save-post-btn'>Guardar</button>
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
  table: (tableId, header, btnPostId) => {
    return `
    <ul id='${tableId}' class='table'>
      <li class='table-header'>
        <span>${header}</span>
        <div class='inputs'>
          <div class='inputs-hide'>
            <i class='fas fa-search'></i>
            <input type='text' placeholder='Buscar...'>
            <i id='${btnPostId}' class='fas fa-plus-square'></i>
          </div>
          <i expand='cities' class='fas fa-angle-down'></i>
        </div>
      </li>
    </ul>`;
  },
  tableData: (data) => {
    return `
    <li class='table-data'>
      <span>${data.id}</span>
      <span>${data.name}</span>
      <div>
        <i class="fas fa-pencil-alt"></i>
        <i class="fas fa-trash-alt"></i>
      </div>
    </li>`;
  },
  confirm:
    "<h2>¿Desea continuar?</h2>" +
    "<div>" +
    "<button id='confirm-yes-btn'>CONTINUAR</button>" +
    "<button id='confirm-no-btn'>CANCELAR</button>" +
    "</div>",
};

export { dom };
