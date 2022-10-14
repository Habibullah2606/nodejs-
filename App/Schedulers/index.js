const root = require("app-root-path");
const cron = require("node-cron");
const monthlyDirectoryUsage = require(`${root}/Schedulers/monthlyDirectoryUsage.js`);
const monthlySubaccountCost = require(`${root}/Schedulers/monthlySubaccountsCost.js`);
const monthlyUsage = require(`${root}/Schedulers/monthlyUsage.js`);
const subAccountUsage = require(`${root}/Schedulers/subAccountUsage.js`);

cron.schedule("*/10 * * * * *", function() {
    console.log("running a task every 10 second");
    monthlyDirectoryUsage.storeMonthlyDirectoryUsage();
});

cron.schedule("*/10 * * * * *", function() {
    console.log("running a task every 10 second");
    monthlySubaccountCost.storeMonthlySubaccountCost();
});

cron.schedule("*/10 * * * * *", function() {
    console.log("running a task every 10 second");
    monthlyUsage.storeMonthlyUsage();
});

cron.schedule("*/10 * * * * *", function() {
    console.log("running a task every 10 second");
    subAccountUsage.storeSubAccountUsage();
});