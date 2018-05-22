DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  year INT NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity VARCHAR(100) NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM top5000;