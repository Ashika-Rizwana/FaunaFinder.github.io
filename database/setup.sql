-- Create Database
CREATE DATABASE IF NOT EXISTS fauna_finder;
USE fauna_finder;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    address TEXT NOT NULL,
    dob DATE NOT NULL,
    occupation ENUM('Student', 'Working', 'Other') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_username (username),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Animal Sightings Table (for future feature)
CREATE TABLE IF NOT EXISTS sightings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    animal_name VARCHAR(100) NOT NULL,
    continent VARCHAR(50),
    location VARCHAR(255),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    sighting_date DATE,
    description TEXT,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_continent (continent),
    INDEX idx_animal (animal_name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Sample Admin User (password: admin123)
INSERT INTO users (username, email, password, fullname, phone, address, dob, occupation) 
VALUES (
    'admin',
    'admin@faunafinder.org',
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    'Admin User',
    '0000000000',
    'FaunaFinder HQ',
    '1990-01-01',
    'Working'
);