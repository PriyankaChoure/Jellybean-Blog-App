const router = require("express").Router();
const authController = require("../controllers/auth.controller");
/**
 * api- http://server:8082/backend/auth/register
 * 
 * req body example-
 * 
   {
    "email": "priyanka",
    "password": "123456"   
 }
 */
router.post("/register", authController.register);

/**
 * api- http://server:8082/backend/auth/login
 * 
 * req body example-
 * 
   {
    "email": "priyanka",
    "password": "123456"
 }
 */

router.post("/login", authController.login);

module.exports = router;
