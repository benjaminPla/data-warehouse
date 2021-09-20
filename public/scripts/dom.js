const dom = {
  pop: `
  <div id='pop'>
    <div id='pop-container'></div>
  </div>`,
  response: "<span id='response'></span>",
  regionPost: `
    <h2>Crear una nueva región</h2>
    <input id='region_name-post-input' type='text' placeholder='Ingrese el nombre de la región' autocomplete='off' />
    <button id='region_save-post-btn'>Guardar</button>
    <div id='response-container'></div>`,
  countryPost: `
    <h2>Crear un nuevo país</h2>
    <input id='country_name-post-input' type='text' placeholder='Ingrese el nombre del país' autocomplete='off' />
    <select id="country_post-select"><option selected disabled>Seleccionar</option></select>
    <button id="country_save-post-btn">Guardar</button>
    <div id='response-container'></div>`,
  cityPost: `
    <h2>Crear una nueva ciudad</h2>
    <input id='city_name-post-input' type='text' placeholder='Ingrese el nombre de la ciudad' autocomplete='off' />
    <select id="city_post-select"><option selected disabled>Seleccionar</option></select>
    <button id="city_save-post-btn">Guardar</button>
    <div id='response-container'></div>`,
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
  tableDataRegion: (data, gridStyle) => {
    return `
    <li class='table-data'>
      <div class='${gridStyle}'>
        <span>${data.id}</span>
        <span>${data.name}</span>
      </div>
      <div>
        <i class="fas fa-pencil-alt"></i>
        <i id="del-regions-${data.name}" class="fas fa-trash-alt"></i>
      </div>
    </li>`;
  },
  tableDataCountry: (data, gridStyle) => {
    return `
    <li class='table-data'>
      <div class='${gridStyle}'>
        <span>${data.id}</span>
        <span>${data.name}</span>
        <span>${data.region_name}</span>
      </div>
      <div>
        <i class="fas fa-pencil-alt"></i>
        <i id="del-countries-${data.name}" class="fas fa-trash-alt"></i>
      </div>
    </li>`;
  },
  tableDataCity: (data, gridStyle) => {
    return `
    <li class='table-data'>
      <div class='${gridStyle}'>
        <span>${data.id}</span>
        <span>${data.name}</span>
        <span>${data.country_name}</span>
        <span>${data.region_name}</span>
      </div>
      <div>
        <i class="fas fa-pencil-alt"></i>
        <i id="del-cities-${data.name}" class="fas fa-trash-alt"></i>
      </div>
    </li>`;
  },
  confirm: `
  <h2>¿Desea continuar?</h2>
  <div>
    <button id='confirm-yes-btn'>CONTINUAR</button>
    <button id='confirm-no-btn'>CANCELAR</button>
  </div>
  <div id='response-container'></div>`,
};

export { dom };
