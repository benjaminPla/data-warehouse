import { events } from "./events.js";

const set = {
  nav: () => {
    events.areasBtn();
  },
  areas: () => {
    events.postAreaBtn();
  },
  pop: () => {
    events.closePop();
  },
  popAreaPost: () => {
    events.areaPostSaveBtn();
  },
};

export { set };
