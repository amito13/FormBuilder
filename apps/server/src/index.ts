import express from "express";
import cors from "cors";

import * as trpcExpress from "@trpc/server/adapters/express";

import { appRouter } from "./routers";

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.get("/", (_, res) => {
  res.send("tRPC Server Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});