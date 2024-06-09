import { Hono } from "hono";
const router = new Hono();

import {Home} from "../controller/Controller"


router.get("/", Home);

export default router;

