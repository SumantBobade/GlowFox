import express from 'express';
import { signUpHandler, loginHandler, getMyProfile, updateMyProfile } from '../controllers/user.controller.js'
import { authenticate } from "../middlewares/auth.js";
import { authorizeRoles, authorizePermissions } from "../middlewares/authorize.js";
import authMiddleware from '../middlewares/authMiddleware.js';

const route = express.Router();

route.get(
  "/admin/creator",
  authenticate,
  authorizeRoles("admin"),
  authorizePermissions("user:read"),
  (req, res) => {
    res.json({ message: "Admin users list" });
  }
);

route.post('/signup', signUpHandler);
route.post('/login', loginHandler);

route.get("/me", authMiddleware, getMyProfile);
route.put("/me", authMiddleware, updateMyProfile);

export default route;