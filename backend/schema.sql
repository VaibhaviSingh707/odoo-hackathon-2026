CREATE TABLE IF NOT EXISTS Users (
    UserID INTEGER PRIMARY KEY AUTOINCREMENT,
    Email TEXT NOT NULL UNIQUE,
    Password TEXT NOT NULL
);

INSERT INTO Users (Email, Password)
VALUES ('admin@assetflow.com', 'admin123');