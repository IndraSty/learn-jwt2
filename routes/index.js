import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { getUsers, register, login, logout } from "../controller/users.js";
import { refreshToken } from "../controller/refreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers)
router.post('/users', register)
router.post('/users/login', login)
router.delete('/logout', logout)
router.get('/token', refreshToken)

export default router;