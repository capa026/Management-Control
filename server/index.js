import express from "express";
import cors from "cors";
import CostStructure from "./routes/CostStructure.route.js";
import Invoices from "./routes/Invoices.route.js";

const app = express();
//a
app.use(
  cors({
    origin: process.env.CLIENT_ROUTE,
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/costStructure", CostStructure);
app.use("/api/invoices", Invoices);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
