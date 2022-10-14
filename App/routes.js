const routes = require("express").Router();
const root = require("app-root-path");
const mainController = require(`${root}/controller/mainController.js`);
const schedulers = require(`${root}/schedulers/index.js`);

routes.post("/storeMonthlyDirectoryUsage", mainController.storeMonthlyDirectoryUsage);
routes.post("/storeMonthlySubaccountsCost", mainController.storeMonthlySubaccountsCost);
routes.post("/storeMonthlyUsage", mainController.storeMonthlyUsage);
routes.post("/storeSubaccountUsage", mainController.storeSubaccountUsage);

module.exports = routes;