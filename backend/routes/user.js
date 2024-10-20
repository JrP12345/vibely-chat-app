import express from "express";
import {
  userRegister,
  userLogin,
  userProfile,
  checkAuth,
  userLogout,
  getAllUsers,
  userUpdate,
  newGroup,
  userGroups,
} from "../controllers/user.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/userProfile", auth, userProfile);
router.get("/users", auth, getAllUsers);
router.get("/check", checkAuth);
router.put("/update", auth, userUpdate);
router.post("/logout", auth, userLogout);

router.get("/groups", auth, userGroups);
router.post("/createGroup", auth, newGroup);
export default router;
