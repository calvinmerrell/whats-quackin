-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY, 
--     username VARCHAR(50) not null, 
--     hash VARCHAR(500) not null, 
--     first_name VARCHAR(100) not null,      
--     last_name VARCHAR(100) not null,
--     email VARCHAR(100) not null,
--     street_address VARCHAR(100),
--     city VARCHAR(50),
--     state VARCHAR(50),
--     zip integer,
--     phone text,
--     is_admin boolean
--     )

-- CREATE TABLE products (
--     product_id SERIAL PRIMARY KEY,
--     product_type VARCHAR(30) not null,
--     product_name VARCHAR(30) not null,
--     call_style VARCHAR(30),
--     wood_type VARCHAR(30),
--     price integer,
--     image bytea,
--     quantity integer
--     )

-- CREATE TABLE orders (
--     order_id SERIAL PRIMARY KEY,
--     user_id integer,
--     FOREIGN KEY (user_id) references users(user_id),
--     first_name VARCHAR(100),
--     last_name VARCHAR(100) not null,
--     email VARCHAR(100) not null,
--     street_address VARCHAR(100),
--     city VARCHAR(50),
--     state VARCHAR(50),
--     zip integer,
--     phone text
--     )

-- INSERT INTO products (product_type,product_name,call_style,wood_type,price)
-- VALUES ('Goose_call','Maple Goose Call','short reed', 'Maple', 150)

-- INSERT INTO products (product_type,product_name,wood_type,price)
-- VALUES ('Call_Blank','Paduk Blank', 'Paduk', 10)