const dom = {
  areasControlPanel:
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
  area: (name) => {
    return `
    <li>
    <span>${name}</span>
    <div>
    <button><i class="fas fa-pencil-alt"></i></button>
    <button><i class="fas fa-trash-alt"></i></button>
    </div>
    </li>`;
  },
};

export { dom };
