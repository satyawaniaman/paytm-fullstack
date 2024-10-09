import express from "express";
import cors from "cors";
import mainRouter from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies
app.use("/api/v1", mainRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
