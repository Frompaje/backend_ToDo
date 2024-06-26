import "dotenv/config";
import { env } from "./env";
import cors from "@fastify/cors";
import fastify, { FastifyInstance } from "fastify";
import fastifyJwt from "@fastify/jwt";
import { routerUserController } from "./controllers/user/router-user-controller";
import { routerTaskController } from "./controllers/task/router-task.controller";

export const app: FastifyInstance = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});

app.register(cors);

app.register(routerUserController);
app.register(routerTaskController);
