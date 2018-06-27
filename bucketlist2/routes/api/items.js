const router = require("express").Router();
const bucketListController = require("../../controllers/bucketListController");

router.route('/:id')
    .get(bucketListController.findById)
    .put(bucketListController.update)
    .delete(bucketListController.remove);

module.exports = router