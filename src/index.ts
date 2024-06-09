import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { portServe } from "./config/app";
import router from "./router/route";

const app = new Hono();

app.route("/", router);

const port: any = portServe;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
