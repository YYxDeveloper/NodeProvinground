const fs = require("fs");
const { getDB } = require("./node_promissify");
const promisify = require("util").promisify;

const path = require("path");
const readFile = promisify(fs.readFile);

const dbPath = path.join(__dirname, "test.json");
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

app.get("/todos1/:id", (req, res) => {
  fs.readFile("test.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("fail1");
    }

    const db = JSON.parse(data);
    console.log(db);
    let todo = db.todos.find((item) => item.id === Number(req.params.id));
    if (!todo) {
      return res.status(404).send("fail2");
    }

    return res.status(200).json(todo);
  });
});
app.get("/node_promissify", async (req, res) => {
  try {
    const db = await getDB();
    res.send(db);
  } catch (err) {
    res.status(500).send("fail");
  }
});
