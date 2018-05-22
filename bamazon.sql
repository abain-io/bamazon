DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity VARCHAR(100) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quantity)
VALUES ("Bleach", "Cleaning", 7.95, 50),("Soap", "Cleaning", 2.95, 100), ("Paper_Towels", "Cleaning", 7.95, 50),("Batteries", "Electronics", 7.95, 50), ("TV", "Electronics", 7.95, 50), ("Gameboy", "Electronics", 7.95, 50), ("Shampoo", "Cleaning", 7.95, 50),("Conditioner", "Cleaning", 7.95, 50)
