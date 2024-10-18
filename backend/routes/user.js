import express from "express";
import { userRegister, userLogin, userProfile } from "../controllers/user.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/userProfile", auth, userProfile);

export default router;
