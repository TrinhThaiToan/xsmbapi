// path: /auth/login

const { Router } = require('express');
const { getKetquas } = require('../controllers/ketquasController');
const { validateJWT } = require('../middlewares/validate_jwt');

const router = Router();

//validateJWT
router.get('/',validateJWT, getKetquas)

module.exports = router;

