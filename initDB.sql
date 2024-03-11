# 建立資料庫

CREATE DATABASE IF NOT EXISTS provinggroundDB;

# 建立表格

USE provinggroundDB;

CREATE TABLE User (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255),
  email VARCHAR(255),
  PRIMARY KEY (id)
);

# 插入第一筆資料

INSERT INTO User (firstName, lastName, email) VALUES ('John', 'Doe','John@gmail');

# 插入第二筆資料

INSERT INTO User (firstName, lastName, email) VALUES ('Jane', 'Doe','Jane@gmail');

# 插入第三筆資料

INSERT INTO User (firstName, lastName, email) VALUES ('Mike', 'Jones','Mike@gmail');
