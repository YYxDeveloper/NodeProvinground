//導入express
const express = require("express");
//創建一個實例
const app = express();
//寫出第一個route
app.get("/home", (req, res) => {
  res.end("hello");
});

//監聽port號
app.listen(3000, function () {
  console.Log("服務已啟動");
});
