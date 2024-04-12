import { connect } from "mongoose";
import { MONGODB_URI } from "../config";

// connection to db
(async () => {
  try {
    const db = await connect("mongodb://localhost:27017");
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
