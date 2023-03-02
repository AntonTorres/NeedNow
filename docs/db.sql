CREATE SCHEMA neednow;
USE neednow;

CREATE TABLE
    users (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(500) NOT NULL,
        password VARCHAR(500) NOT NULL,
        email VARCHAR(500) UNIQUE NOT NULL,
        biography VARCHAR(2500),
        photo VARCHAR(255),
        registrationCode VARCHAR(100)
    );

CREATE TABLE
    services (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        tittle VARCHAR(500) NOT NULL,
        description VARCHAR(2500) NOT NULL,
        resolve BOOLEAN DEFAULT FALSE,
        userId INT UNSIGNED NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id)
    );

CREATE TABLE
    comments (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        comment VARCHAR(2500) NOT NULL,
        userId INT UNSIGNED NOT NULL,
        serviceId INT UNSIGNED NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id),
        FOREIGN KEY (serviceId) REFERENCES services(id)
    );

CREATE TABLE
    files (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        file VARCHAR(100) NOT NULL,
        serviceId INT UNSIGNED NOT NULL,
        FOREIGN KEY (serviceId) REFERENCES services(id)
    );
    
