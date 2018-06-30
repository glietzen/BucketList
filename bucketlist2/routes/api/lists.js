const router = require("express").Router();
const bucketListController = require("../../controllers/bucketListController");

router.route("/")
    .get(bucketListController.findAll)

module.exports = router;