import dotenv from "dotenv"
dotenv.config()

async function GET(c: any) {
  return c.json({
    name: process.env.APP_NAME,
    version: "4.4.4",
    router: "./src/router/route.ts",
  });
}

async function POST(c: any) {
  const body = await c.req.json()

  return c.json({
    data: body
  })
}

export { GET, POST };
