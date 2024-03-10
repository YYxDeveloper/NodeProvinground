const EventEmitter = require("events");

// 創建一個事件發射器，代表新聞主題
const newsPublisher = new EventEmitter();

// 定義一些訂閱者 (讀者)
const subscriber1 = (data) => {
  console.log("訂閱者 1:", data);
};

const subscriber2 = (data) => {
  console.log("訂閱者 2:", data);
};

// 訂閱者 1 訂閱 "breakingNews" 事件
newsPublisher.on("breakingNews", subscriber1);

// 訂閱者 2 訂閱 "breakingNews" 事件
newsPublisher.on("breakingNews", subscriber2);

// 發布 "breakingNews" 事件，通知訂閱者
newsPublisher.emit("breakingNews", "發生重大新聞！");

// 訂閱者 1 可以選擇取消訂閱
newsPublisher.removeListener("breakingNews", subscriber1);

// 再次發布 "breakingNews" 事件，只有訂閱者 2 會收到通知
newsPublisher.emit("breakingNews", "又有一條最新消息！");
