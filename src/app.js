import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import marvelVsDcRoutes from "./routes/marvel_vs_dc.routes.js"

const app = express();

app.use(express.json())

app.use(indexRoutes);

app.use('/api',employeesRoutes);

app.use('/marvel-vs-dc', marvelVsDcRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint Not found'
    })
})

export default app