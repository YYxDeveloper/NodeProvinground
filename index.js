//導入express
const express = require("express");
//創建一個實例
const app = express();
//寫出第一個route
app.get("/home", (req, res) => {
  res.end("hello");
});
// route of /faile send 404 state & fail message is res.status(404).send('fail');
app.get("/fail", (req, res) => {
  res.status(404).send("fail route");
});

//監聽port號
app.listen(3000, function () {
  console.log("服務已啟動");
});
