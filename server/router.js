const router = require('express').Router();
const controller = require('./controller');

router.route('/').get(controller.getAllSearch);

router.route('/beats').get(controller.getAllBody);

router.route('/beats/:id').get(controller.getOneBody);

router.route('/play/:id').get(controller.playSong);

router.route('/queue/:id').get(controller.queueSong);

module.exports = router;
