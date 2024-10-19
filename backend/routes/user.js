import express from "express";
import {
  userRegister,
  userLogin,
  userProfile,
  checkAuth,
  userLogout,
  getAllUsers,
} from "../controllers/user.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/userProfile", auth, userProfile);
router.get("/users", auth, getAllUsers);
router.get("/check", checkAuth);
router.post("/logout", auth, userLogout);
export default router;
