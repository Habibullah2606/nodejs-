const express = require("express");
const root = require("app-root-path");
const app = express();
const logger = require("logger");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const router = require(`./routes.js`);
var cfenv = require("cfenv")



var appEnv = cfenv.getAppEnv()
const port1= appEnv.port ;

(async function () {
    // parse requests of content-type - application/json
    app.use(express.json());
    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));
    var corsOptions = {
        origin: "*"
    };
    app.use(cors(corsOptions));
    app.use(helmet());
    app.use(cookieParser());
    app.use(bodyParser.json({ limit: "100mb" }));

    app.get("/", (req, res) => {
        res.json({ message: "<<<<<<<<<<<<<<<< Welcome to Paccar >>>>>>>>>>>>>>" });
    });

    app.use("/api/v1", router);
    app.use((req, res, next) => {
        // catch 404 and forward to error handler
        const err = new Error("Resource Not Found");
        err.status = 404;
        next(err);
    });
    app.use((err, req, res, next) => {
        console.log(err);
        logger.httpLogger.error(req, {
            message: err.message,
            error: err,
        });
        const statusCode = err.status || 500;
        // let message = err.message || "Internal Server Error";
        let message = "Internal Server Error";

        if (statusCode === 500) {
            message = "Internal Server Error";
        }
        // res.status(statusCode).json({ message });
    });
    app.listen(port1, function () {
        console.log(`Application started at port:${port}`);
    });
})();