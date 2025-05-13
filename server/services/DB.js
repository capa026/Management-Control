import { Pool } from "pg";

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

db.connect()
  .then(() => console.log("Connected successfully to the database"))
  .catch((err) => console.error("Connection FAILED:", err));

db.on("error", (err) => {
  console.error("Unexpected error on idle CLIENT", err);
  process.exit(-1);
});
