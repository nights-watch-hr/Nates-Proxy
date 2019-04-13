const router = require('express').Router();
const controller = require('./controller');

router.route('/').get(controller.getAllSearch);

router.route('/beats').get(controller.getAllBody);

router.route('/beats/:id').get(controller.getOneBody);

router.route('/tracks/:id').get(controller.getOneMediaPlayer);

module.exports = router;
