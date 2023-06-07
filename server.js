import process from "node:process";
import { fastify } from "fastify";
import fastifyStatic from "@fastify/static";
import fastifyMultipart from "@fastify/multipart";
import fs from "fs/promises";
import path from "path";

const app = fastify();

app.register(fastifyStatic, {
  root: new URL(path.join(`.`, "public"), import.meta.url).pathname,
});
app.register(fastifyMultipart);
app.post("/upload", async (req, res) => {
  const file = await req.file();

  const newFileDir = path.join(
    new URL(path.join(`.`, "uploaded-files"), import.meta.url).pathname,
    file.filename
  );

  await fs.writeFile(newFileDir, file.file);

  res.status(200).send();
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
