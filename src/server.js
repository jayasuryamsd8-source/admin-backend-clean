import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
     console.log(`🚀 Server running on port ${PORT}`); 
      console.log(`📦 Environment: ${process.env.NODE_ENV || "development"}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server");
    console.error(error);
    process.exit(1);
  }
}

startServer();
