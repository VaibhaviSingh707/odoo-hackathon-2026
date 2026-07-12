CREATE TABLE IF NOT EXISTS Users (
    UserID INTEGER PRIMARY KEY AUTOINCREMENT,
    Email TEXT NOT NULL UNIQUE,
    Password TEXT NOT NULL
);

INSERT INTO Users (Email, Password)
VALUES ('admin@assetflow.com', 'admin123');


CREATE TABLE Assets(
    AssetID INTEGER PRIMARY KEY AUTOINCREMENT,
    AssetName TEXT,
    Category TEXT,
    Status TEXT,
    AllocatedTo TEXT
);

CREATE TABLE Departments(
    DepartmentID INTEGER PRIMARY KEY AUTOINCREMENT,
    DepartmentName TEXT,
    ParentDepartment TEXT,
    DepartmentHead TEXT,
    Status TEXT
);

CREATE TABLE Categories(
    CategoryID INTEGER PRIMARY KEY AUTOINCREMENT,
    CategoryName TEXT,
    Warranty TEXT,
    Description TEXT,
    Status TEXT
);

CREATE TABLE Employees(
    EmployeeID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT,
    Email TEXT,
    Department TEXT,
    Role TEXT,
    Status TEXT
);