\c festivals

DROP TABLE IF EXISTS festival CASCADE;
DROP TABLE IF EXISTS festival_artist CASCADE;
DROP TABLE IF EXISTS artist CASCADE;
DROP TABLE IF EXISTS instrument CASCADE;
DROP TABLE IF EXISTS genre CASCADE;

CREATE TABLE festival(
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  location varchar(255) NOT NULL,
  date DATE NOT NULL,
  cost int NOT NULL
);

CREATE TABLE artist (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL
);

CREATE TABLE festival_artist (
  festival_id int NOT NULL,
  artist_id int NOT NULL,
  FOREIGN KEY (festival_id) REFERENCES festival(id),
  FOREIGN KEY (artist_id) REFERENCES artist(id)
);

CREATE TABLE genre (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  artist_id int NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artist(id)
);

CREATE TABLE instrument (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  artist_id int NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artist(id)
)
