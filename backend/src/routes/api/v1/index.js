import { Router } from "express";
import { getCsrfToken } from "./handlers.js";

const router = Router();
router.get(`/csrf-token`, getCsrfToken);
export default router;
