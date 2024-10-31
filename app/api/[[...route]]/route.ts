import { Hono } from "hono";
import { handle } from "hono/vercel";

import accounts from "./accounts";

export const runtime = "edge";

const app = new Hono().basePath("/api"); //This initializes a new Hono application and sets the base path for all routes to /api. This means any routes you define will be prefixed with /api.

const routes = app
    .route("/accounts", accounts); //Defines the /accounts route using the imported accounts module.

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;