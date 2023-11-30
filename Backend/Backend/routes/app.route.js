const { Router } = require("express");

const controller = require("../controllers/app.controller");

const router = Router();

router.route("/").get(controller);

module.exports = router;
