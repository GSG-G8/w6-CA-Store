BEGIN;

DROP TABLE IF EXISTS brand, product, cart, tag, product_tag;

CREATE TABLE brand (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL, 
    brand_id INTEGER
);

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    quantity INTEGER NOT NULL,
    product_id INTEGER
);

CREATE TABLE tag (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE product_tag (
    product_id INTEGER,
    tag_id INTEGER
);


INSERT INTO brand (name)
    VALUES 
        ('Apple'),
        ('Google'),
        ('Microsoft'),
        ('Amazon'),
        ('Facebook'),
        ('Coca-Cola'),
        ('Samsung'),
        ('Disney'),
        ('Toyota'),
        ('McDonalds'),
        ('Intel'),
        ('NIKE'),
        ('Cisco');

COMMIT;
