const express = require("express");

const router = express.Router();

const { verifyPassword, verifyToken, logout } = require("./services/auth");

const { getUserByEmailMiddleWare } = require("./controllers/authControllers");
// routes publiques

router.post("/login", getUserByEmailMiddleWare, verifyPassword);

// auth
router.get("/logout", verifyToken, logout);

// routes privées
router.use(verifyToken);

const technologyControllers = require("./controllers/technologyControllers");

router.get("/technologys", technologyControllers.browse);
router.get("/technologys/:id", technologyControllers.read);
router.put("/technologys/:id", technologyControllers.edit);
router.post("/technologys", technologyControllers.add);
router.delete("/technologys/:id", technologyControllers.destroy);

module.exports = router;
