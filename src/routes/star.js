module.exports = app => {
    const controller = require('../controllers/star');

    const router = require("express").Router();

    router.post('/', controller.create);
    router.get('/', controller.findAll);
    router.get("/:id", controller.findOne);
    router.delete("/:id", controller.delete);

    app.use('/star', router);
}