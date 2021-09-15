import { events } from "./events.js";

if (location.href.endsWith("index.html")) events.loginBtn(); //cambiar, obvio
if (location.href.endsWith("home.html")) events.areasBtn();
