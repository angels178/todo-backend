DROP DATABASE IF EXISTS todo_dev;

CREATE DATABASE todo_dev;

\c todo_dev;

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    name TEXT, 
    notes TEXT,
    deadline_date DATE, 
    completed BOOLEAN DEFAULT false
);