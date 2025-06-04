import express from "express";
import { addRole, getRoles } from "../controllers/role.controller";

const router = express.Router();

router.post("/", addRole);
router.get("/", getRoles);

export default router;
