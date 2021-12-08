import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);

import { global as EventBus } from "./event-bus.js";

EventBus.on("crypto-notification", () => {
  console.log("notification from crypto app");
});
EventBus.on("stocks-notification", () => {
  console.log("notification from stocks app");
});

// Load modules before needed
System.import("stocks");
System.import("crypto");
System.import("stocks");

registerApplication(
  "stocks",
  () => System.import("stocks"),
  (location) => location.pathname.startsWith("/stocks"),
  { message: "you are stocks app", eventBus: EventBus }
);
registerApplication(
  "crypto",
  () => System.import("crypto"),
  (location) => location.pathname.startsWith("/crypto"),
  { message: "you are crypto app", eventBus: EventBus }
);

layoutEngine.activate();
start();
