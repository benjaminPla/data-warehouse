import { events } from "./events.js";

const set = {
  nav: () => {
    events.areasBtn();
  },
  areasControlPanel: () => {
    events.postAreaBtn();
  },
};

export { set };
