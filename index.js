import express from "express";
import { addUsers, getAllUsers, getUsers } from "../controller/Users-controller.js";

const router = express.Router();

router.get('/v1/users/:id', getUsers);
router.get('/v1/users', getAllUsers);
router.post('/v1/users', addUsers);

export default router;