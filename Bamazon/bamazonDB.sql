DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products ( 
id int AUTO_INCREMENT NOT NULL,
product_name VARCHAR(20) NULL,
department_name VARCHAR(20) NULL,
price DECIMAL (10,2) NULL,
stock_quantity int NULL,
PRIMARY KEY (id)
);

Select * FROM products;

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (1, "chapstick", "beauty", 1.50, 500),
 (2, "waterbottle", "health", 7.00, 120),
 (3, "straw hat", "fashion", 15.00, 30),
 (4, "super-man cape", "apparel", 13.00, 12),
 (5, "television", "electronics", 299.00, 7),
 (6, "bose speaker", "electronics", 179.00, 4),
 (7, "dragon statue", "decor", 129.00, 3),
 (8, "wasabi peas", "food", 9.00, 14),
 (9, "world tapestry", "decor", 1100.00, 17),
 (10, "notebook", "stationary", 17.00, 20);







