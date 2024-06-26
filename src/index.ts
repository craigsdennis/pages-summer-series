import { Hono } from "hono";

type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key];
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/api/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
