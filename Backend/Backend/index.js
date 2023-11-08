const app = require("./config/app.config");
const { PORT } = require("./config/constants.config");
const { ConnectDb } = require("./config/db.config");

const startApp = async (port) => {
  try {
    await ConnectDb();
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

startApp(PORT);
