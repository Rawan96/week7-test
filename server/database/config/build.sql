BEGIN;

DROP TABLE IF EXISTS cities;

CREATE TABLE cities(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR NOT NULL,
  city TEXT NOT NULL
);

INSERT INTO cities (name, city) VALUES
  ('Mohammed', 'Gaza'),
  ('Mark', 'London'),
  ('Sally', 'Cario');

COMMIT;