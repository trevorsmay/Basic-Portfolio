DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products ( 
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(20) NULL,
department_name VARCHAR(20) NULL,
price DECIMAL (10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product, price, stock_quantity)
VALUES ("chapstick", "beauty", 1.50, 500), ("waterbottle", "health", 7.00, 120), ("straw hat", "fashion", 15.00, 30), ("super-man cape", "apparel", 13.00, 12), ("television", "electronics", 299.00, 7), ("bose speaker", "electronics", 179.00, 4), ("dragon statue", "decor", 129.00, 3), ("wasabi peas", "food", 9.00, 14), ("world tapestry", "decor", 1100.00, 17);







