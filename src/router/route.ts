import { Hono } from "hono";
const router = new Hono();

import {GET, POST} from "../controller/Controller"


router.get("/", GET);
router.post("/", POST)

export default router;

