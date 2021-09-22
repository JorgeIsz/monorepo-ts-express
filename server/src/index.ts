import express, { Response } from "express";

import { User } from "@monorepo/shared";

const app = express();
const PORT = 8000;

app.get("/", (_, res: Response) => {
  const user: User = {
    id: 1,
    name: "Someone",
  };
  res.send(JSON.stringify(user));
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
