import { db } from "../services/DB.js";

class CostStructure {
  static async createStructure(req, res) {
    const { name, description, items } = req.body;
    try {
      const { rows } = await db.query(
        "INSERT INTO cost_structure (name, description, items) VALUES ($1, $2, $3) RETURNING *",
        [name, description, JSON.stringify(items)]
      );
      return res.status(200).json({ status: 200 });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  static async getAll(req, res) {
    try {
      const { rows } = await db.query("SELECT * FROM cost_structure");

      return res.status(200).json(rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  static async updateStructure(req, res) {
    const { name, description, items, id } = req.body;
    try {
      await db.query(
        `UPDATE cost_structure SET name = $1, description = $2, items = $3 WHERE id = $4`,
        [name, description, JSON.stringify(items), id]
      );

      return res.status(200).json({ status: 200 });
    } catch (error) {
      console.log("UPDATE ERROR: " + error);
      return res.status(500).json({ error });
    }
  }

  static async deleteById(req, res) {
    const { id } = req.body;
    try {
      await db.query(`DELETE FROM cost_structure WHERE id = ${id}`);
      return res.status(200).json({ status: 200 });
    } catch (error) {
      console.log("UPDATE ERROR: " + error);
      return res.status(500).json({ error });
    }
  }
}

export default CostStructure;
