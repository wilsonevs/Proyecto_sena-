CREATE DATABASE mi
raweb_general;

USE miraweb_general;

CREATE TABLE afiliados(
    fecha DATE,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    edad INT(10),
    documento INT NOT NULL PRIMARY KEY,
    direccion VARCHAR(50),
    telefono INT(50),
    profesion VARCHAR(50),
    observaciones TEXT, 
    nombre_comite VARCHAR(50),
    firma_digitalizada VARCHAR(20),
    registra VARCHAR(50)
);

DESCRIBE afiliados;

CREATE TABLE actores(
    usuario VARCHAR(20) NOT NULL PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    registra VARCHAR(50),
    contrasena VARCHAR(255)
);

DESCRIBE actores;

CREATE TABLE actas(
    fecha_creacion VARCHAR(50),
    codigo_actas VARCHAR(50) NOT NULL PRIMARY KEY,
    registra VARCHAR(50)
);

DESCRIBE actas;