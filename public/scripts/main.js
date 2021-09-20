import { events } from "./events.js";

if (location.href.endsWith("index.html")) {
  events.loginBtn();
  events.onEnter("login-btn");
}
if (location.href.endsWith("home.html")) {
  events.usersBtn();
  events.areasBtn();
}
