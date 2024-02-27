const express = require("express");
const validate = require("../middlewares/validate");
const { restController } = require("../controllers");
const restValidation = require("../validation/rest.validation");
const { upload } = require("../middlewares/multer");

const route = express.Router();

route.get("/get", restController.getRest);
route.post(
  "/add",
  upload.single("restImg"),
  validate(restValidation.addRest),
  restController.addRest
);
route.put(
  "/update/:id",
  validate(restValidation.addRest),
  restController.updateRest
);
route.delete("/delete/:id", restController.deleteRest);

module.exports = route;
