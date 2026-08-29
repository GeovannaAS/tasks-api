import express from "express";
import { healthRouter } from "./routes/health.routes";
import { tasksRoutes } from "./routes/tasks.routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(healthRouter);
app.use(tasksRoutes);

app.listen(PORT, ()=>{
    console.log(`servidor rodando na porta ${PORT}`);
});
