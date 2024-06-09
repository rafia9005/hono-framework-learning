import { Hono } from "hono";
const router = new Hono();

router.get("/", (c) => {
  return c.json({
    test: "test"
  });
});

export default router;

