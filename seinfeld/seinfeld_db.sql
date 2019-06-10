DROP DATABASE IF EXISTS seinfeld_db;

CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors (
	id int AUTO_INCREMENT, 
    name VARCHAR (30) NOT NULL,
    coolness_points int NOT NULL,
    attitude VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
    );
    
    INSERT INTO actors ("jerry seinfeld", 100, "stable"), ("kramer", 70, "crazy"), ("george castanza", 60, "stupid"), ("bra-less wonder", 100, "free-spirit");
    