PRAGMA foreign_keys = OFF;

BEGIN TRANSACTION;

CREATE TABLE users_with_role_check (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('admin', 'member')),
  height_cm REAL NOT NULL,
  weight_kg REAL NOT NULL,
  age INTEGER,
  sex TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users_with_role_check (
  id,
  email,
  password_hash,
  name,
  role,
  height_cm,
  weight_kg,
  age,
  sex,
  created_at
)
SELECT
  id,
  email,
  password_hash,
  name,
  CASE
    WHEN role = 'admin' THEN 'admin'
    ELSE 'member'
  END,
  height_cm,
  weight_kg,
  age,
  sex,
  created_at
FROM users;

DROP TABLE users;

ALTER TABLE users_with_role_check RENAME TO users;

CREATE UNIQUE INDEX users_email_key ON users(email);

COMMIT;

PRAGMA foreign_keys = ON;
