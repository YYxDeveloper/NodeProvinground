# 建立資料庫

CREATE DATABASE IF NOT EXISTS provinggroundDB;

# 建立表格

USE provinggroundDB;

CREATE TABLE User (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255),
  PRIMARY KEY (id)
);

# 插入第一筆資料

INSERT INTO User (firstName, lastName) VALUES ('John', 'Doe');

# 插入第二筆資料

INSERT INTO User (firstName, lastName) VALUES ('Jane', 'Doe');

# 插入第三筆資料

INSERT INTO User (firstName, lastName) VALUES ('Mike', 'Jones');
