async function Home(c: any) {
  return c.json({
    name: "Hono",
    version : "4.4.4",
    router: "./src/router/route.ts"
  })
}

export {Home}
