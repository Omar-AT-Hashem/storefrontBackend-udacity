import express, { Request, Response } from "express";

const app = express();
const PORT: string | number = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response): void => {
  res.send("main page");
});

app.listen(PORT, (): void => {
  console.log(`Running on port ${PORT}`);
});

export default app;
