import process from "node:process";
import { fastify } from "fastify";
import fastifyStatic from "@fastify/static";

const app = fastify({ logger: true });

app.register(fastifyStatic, {
  root: new URL("./public", import.meta.url).pathname,
});

const start = async () => {
  try {
    await app.listen({ port: 8080 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
