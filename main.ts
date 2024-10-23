import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello World!";
  })
  .get("/users", (context) => {
    context.response.body = [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }];
  });

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Listening on port 8000");
await app.listen({ port: 8000 });
