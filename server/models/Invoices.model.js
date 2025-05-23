import { db } from "../services/DB.js";

class Invoices {
  static async getAll(req, res) {
    try {
      const { rows } = await db.query("SELECT * FROM invoices");

      return res.status(200).json(rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}

export default Invoices;
