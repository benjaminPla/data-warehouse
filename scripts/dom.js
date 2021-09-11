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
    <li area-id="${area.id}">
    <span>${area.name}</span>
    <div>
    <button><i class="fas fa-pencil-alt"></i></button>
    <button><i class="fas fa-trash-alt"></i></button>
    </div>
    </li>`;
  },
  pop: () => {
    return "<div id='pop'><div id='pop-container'></div></div>";
  },
  areaPost: () => {
    return (
      "<h2>Crear tu nueva ciudad</h2>" +
      "<input id='area_name-post-input' type='text' placeholder='Ingrese el nombre de la ciudad' autocomplete='off' />" +
      "<input id='country_name-post-input' type='text' placeholder='Ingresa a que país pertenece' autocomplete='off' />" +
      "<button id='area_save-btn'>Guardar</button>" +
      "<span id='post-response'></span>"
    );
  },
};

export { dom };
