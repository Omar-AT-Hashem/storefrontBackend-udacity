create type orderStatus as enum('active', 'completed');
CREATE TABLE orders (
    id serial PRIMARY KEY, 
    user_id INTEGER NOT NULL REFERENCES users(id), 
    status orderStatus NOT NULL 
)