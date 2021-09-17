const dom = {
  pop: `
  <div id='pop'>
    <div id='pop-container'></div>
  </div>`,
  response: "<span id='response'></span>",
  regionPostPop: `
    <h2>Crear una nueva región</h2>
    <input id='region_name-post-input' type='text' placeholder='Ingrese el nombre de la región' autocomplete='off' />
    <button id='region_save-post-btn'>Guardar</button>
    <div id='response-container'></div>`,
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
  confirm: `
  <h2>¿Desea continuar?</h2>
  <div>
    <button id='confirm-yes-btn'>CONTINUAR</button>
    <button id='confirm-no-btn'>CANCELAR</button>
  </div>
  <div id='response-container'></div>`,
};

export { dom };
