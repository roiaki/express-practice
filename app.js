const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const taskRoute = require("./routes/tasks");
require("dotenv").config();
app.use(express.json());

const PORT = 5001;

// ルーティング設計
app.use("/api/v1/tasks", taskRoute);

// データベース接続
const start = async() => {
  try {
    await connectDB(process.env.MONGO_URL);
    
    app.listen(PORT, console.log("サーバーが起動しました"));

  } catch(err) {
    console.log(err);
  }
};

start();




