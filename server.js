const app = require("./app");
const sequelize = require("./config/db");

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection failed:", err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});