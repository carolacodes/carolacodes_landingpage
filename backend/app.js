import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import contactRoutes from "./routes/contact.routes.js";
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(helmet());
app.use(morgan("dev"));

app.use(
  express.json({
    limit: "20kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "20kb",
  })
);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "CarolaCodes API funcionando",
  });
});
app.use("/api/contact", contactRoutes);
export default app;