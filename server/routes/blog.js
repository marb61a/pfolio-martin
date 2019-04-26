const express = require('express');
const router = express.Router();

const blogCtrl = require('../controllers/blog');
const authService = require('../services/auth');

router.get('', blogCtrl.getBlogs);

router.get('/me', authService.checkJWT,
                  authService.checkRole('siteOwner'),
                  blogCtrl.getUserBlogs);

router.get('/:id', blogCtrl.getBlogById);

module.exports = router;
