import express from "express";
import dotenv from "dotenv";
import { countriesRoutes } from "./src/routes/countries.js";
import { regionsRoutes } from "./src/routes/regions.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(regionsRoutes);
app.use(countriesRoutes);

const PORT = process.env.PORT || "3001";
app.listen(PORT, console.log(`srv on port: ${PORT}`));
