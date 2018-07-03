const router = require("express").Router();
const bucketListController = require("../../controllers/bucketListController");

router.route("/:id")
    .get(bucketListController.findById);

router.route('/')
    .put(bucketListController.createList);

module.exports = router;