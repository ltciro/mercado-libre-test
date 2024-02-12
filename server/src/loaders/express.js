import cors from "cors";

import { prefix } from "./../config/index.js";
import routes from "./../api/routes/index.js";

import bodyParser from "body-parser";

export default (app) => {
  process.on("uncaughtException", async (error) => {
    console.log("00001", "", error.message, "Uncaught Exception", "");
  });

  process.on("unhandledRejection", async (ex) => {
    console.log("00002", "", ex.message, "Unhandled Rejection", "");
  });

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(prefix, routes);

  app.get("/", (_req, res) => {
    return res
      .status(200)
      .json({
        resultMessage: {
          es: "Proyecto funcionando...",
        },
        resultCode: "00004",
      })
      .end();
  });

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Content-Security-Policy-Report-Only", "default-src: https:");
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "GET");
      return res.status(200).json({});
    }
    next();
  });

  app.use((_req, _res, next) => {
    const error = new Error("Endpoint could not find!");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, _next) => {
    res.status(error.status || 500);
    let resultCode = "00015";
    if (error.status === 500) {
      resultCode = "00013";
    } else if (error.status === 404) {
      resultCode = "00014";
    }
    return res.json({
      resultMessage: {
        es: error.message,
      },
      resultCode: resultCode,
    });
  });
};
