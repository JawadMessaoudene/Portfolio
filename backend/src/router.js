const express = require("express");

const router = express.Router();
// const { verifyPassword, verifyToken, logout } = require("./services/auth");
// const { getUserByEmailMiddleWare } = require("./controllers/authControllers");

// // Auth requiered
// router.use(verifyToken);
// router.get("/api/logout", logout);

// Public routes
// Auth
// router.post("/login", getUserByEmailMiddleWare, verifyPassword);

// Private routes
const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.get("/users", userControllers.getMyProfile);

const technologyControllers = require("./controllers/technologyControllers");

router.get("/technologys", technologyControllers.browse);
router.get("/technologys/:id", technologyControllers.read);
router.put("/technologys/:id", technologyControllers.edit);
router.post("/technologys", technologyControllers.add);
router.delete("/technologys/:id", technologyControllers.destroy);

module.exports = router;
