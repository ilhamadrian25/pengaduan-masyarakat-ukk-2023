import express from "express";
import db from "./src/config/Database.js";
import router from "./src/routes/index.js";

const app = express();

app.listen(5000, () => {
    console.log(`Server is running at ${5000}`)
});

try {
    await db.authenticate();
    console.log(`Database has connected`);
} catch (error) {
    console.log(error);
}

app.use(express.json());
app.use(router);