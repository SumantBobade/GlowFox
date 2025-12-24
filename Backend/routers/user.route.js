import express from 'express';
import { signUpHandler, loginHandler } from '../controllers/user.controller.js'
import { authenticate } from "../middlewares/auth.js";
import { authorizeRoles, authorizePermissions } from "../middlewares/authorize.js";

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

export default route;