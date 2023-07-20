const AbstractManager = require("./AbstractManager");

class TechnologyManager extends AbstractManager {
  constructor() {
    super({ table: "technology" });
  }

  insert(technology) {
    return this.database.query(
      `INSERT INTO ${this.table} (technology_name) VALUES (?)`,
      [technology.technology_name]
    );
  }

  update(technology) {
    return this.database.query(
      `UPDATE ${this.table} set technology_name = ? where id = ?`,
      [technology.technology_name, technology.id]
    );
  }
}

module.exports = TechnologyManager;
