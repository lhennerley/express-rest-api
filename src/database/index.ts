import dotenv from "dotenv";
dotenv.config();

export * from "./models/user";

// Database bootstrap
import pgPromise = require("pg-promise");

// Initializing the library:
const pgp: pgPromise.IMain = pgPromise();

// Creating the database instance with extensions:
const cn = <string>process.env.DATABASE_URL;
const db = pgp(cn);

// Alternatively, you can get access to pgp via db.$config.pgp
// See: https://vitaly-t.github.io/pg-promise/Database.html#$config
export { db };
