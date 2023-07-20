const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (email, hashedPassword) values (?, ?)`,
      [user.email, user.hashedPassword]
    );
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
