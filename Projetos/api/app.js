import express from "express";
import cors from "cors";
import { BD, testarConexao } from "./db.js";
import swaggerUi from "swagger-ui-express";
import documentacao from "./config/swagger.js";
import rotasUsuarios from "./src/routes/rotasUsuarios.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(documentacao));
app.use("/", rotasUsuarios);

app.get("/", (req, res) => {
    res.send("API rodando!");
});

const porta = 3000

const servidor = app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
    testarConexao();
});
