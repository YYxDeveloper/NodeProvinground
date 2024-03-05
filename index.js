const fs = require("fs");

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
app.get("/post/:id", (req, res) => {
  res.send(`取得了${req.params.id}`);
});

//監聽port號
app.listen(3000, function () {
  console.log("服務已啟動");
});

app.get("/todos", (req, res) => {
  fs.readFile("test.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("fail");
    } else {
      res.send(data);
    }
  });
});
