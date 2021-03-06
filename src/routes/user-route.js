'use strict';

const express = require('express');
const router = express.Router();
const controller = require("../controllers/user-controller");
const AuthService = require("../services/auth-service");

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', AuthService.authorize, controller.refreshToken);

module.exports = router;