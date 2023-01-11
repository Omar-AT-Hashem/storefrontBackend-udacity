CREATE TABLE orders (
    id serial PRIMARY KEY, 
    user_id INTEGER NOT NULL REFERENCES users(id), 
    status varchar(100) NOT NULL 
)