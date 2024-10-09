import express from "express";
const router = express.Router();
import { userRouter } from "./user.js";
import { accountsRouter } from "./accounts.js";
router.use("/user", userRouter);
router.use("/accounts", accountsRouter);

export default router;
