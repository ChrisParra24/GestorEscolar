DROP DATABASE IF EXISTS "DB_Escuela";
DROP DATABASE IF EXISTS "LosReactivos";

CREATE DATABASE "DB_Escuela"
    WITH
    OWNER = "LosReactivos"
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-------------------------------------------------------
-------------REMOVE TABLES ANS RELATIONS---------------
-------------------------------------------------------
ALTER TABLE Alumnos DROP CONSTRAINT FKAlumnos372362;
ALTER TABLE Maestros DROP CONSTRAINT FKMaestros89169;
ALTER TABLE Usuarios DROP CONSTRAINT FKUsuarios851960;
ALTER TABLE AlumnosEnClases DROP CONSTRAINT FKAlumnosEnC283022;
ALTER TABLE AlumnosEnClases DROP CONSTRAINT FKAlumnosEnC92263;
ALTER TABLE ClasesEnPeriodos DROP CONSTRAINT FKClasesEnPe175289;
ALTER TABLE ClasesEnPeriodos DROP CONSTRAINT FKClasesEnPe773524;
ALTER TABLE Clases DROP CONSTRAINT FKClases284300;
ALTER TABLE Clases DROP CONSTRAINT FKClases629337;
ALTER TABLE Clases DROP CONSTRAINT FKClases180770;
ALTER TABLE AlumnosEnClases DROP CONSTRAINT FKAlumnosEnC978512;
ALTER TABLE Periodos DROP CONSTRAINT FKPeriodos288104;
ALTER TABLE Materias DROP CONSTRAINT FKMaterias565205;
DROP TABLE IF EXISTS Alumnos CASCADE;
DROP TABLE IF EXISTS AlumnosEnClases CASCADE;
DROP TABLE IF EXISTS Clases CASCADE;
DROP TABLE IF EXISTS ClasesEnPeriodos CASCADE;
DROP TABLE IF EXISTS Horarios CASCADE;
DROP TABLE IF EXISTS Maestros CASCADE;
DROP TABLE IF EXISTS Materias CASCADE;
DROP TABLE IF EXISTS Periodos CASCADE;
DROP TABLE IF EXISTS Status CASCADE;
DROP TABLE IF EXISTS Usuarios CASCADE;

----------------------------------
-------------TABLES---------------
----------------------------------
CREATE TABLE Alumnos (
  ID         uuid DEFAULT gen_random_uuid() NOT NULL, 
  Matricula  int8 NOT NULL UNIQUE, 
  UsuariosID uuid NOT NULL, 
  PRIMARY KEY (ID));
CREATE TABLE AlumnosEnClases (
  AlumnosID    uuid NOT NULL, 
  ClasesID     uuid NOT NULL, 
  Calificacion float8 NOT NULL, 
  StatusID     uuid NOT NULL, 
  PRIMARY KEY (AlumnosID, 
  ClasesID));
CREATE TABLE Clases (
  ID         uuid DEFAULT gen_random_uuid() NOT NULL, 
  Nombre     text NOT NULL, 
  MaestrosId uuid NOT NULL, 
  MateriasID uuid NOT NULL, 
  Horariosid uuid NOT NULL, 
  PRIMARY KEY (ID));
CREATE TABLE ClasesEnPeriodos (
  PeriodosID uuid NOT NULL, 
  ClasesID   uuid NOT NULL, 
  PRIMARY KEY (PeriodosID, 
  ClasesID));
CREATE TABLE Horarios (
  id         uuid DEFAULT gen_random_uuid() NOT NULL, 
  HoraInicio time NOT NULL, 
  HoraFin    time NOT NULL, 
  Dia        date NOT NULL, 
  EsVirtual  bytea DEFAULT 'False' NOT NULL, 
  PRIMARY KEY (id));
CREATE TABLE Maestros (
  Id            uuid DEFAULT gen_random_uuid() NOT NULL, 
  NumTrabajador int8 NOT NULL UNIQUE, 
  UsuariosID    uuid NOT NULL, 
  PRIMARY KEY (Id));
CREATE TABLE Materias (
  ID       uuid DEFAULT gen_random_uuid() NOT NULL, 
  Nombre   text NOT NULL, 
  StatusID uuid NOT NULL, 
  PRIMARY KEY (ID));
CREATE TABLE Periodos (
  ID       uuid DEFAULT gen_random_uuid() NOT NULL, 
  Nombre   varchar(255) NOT NULL, 
  Anio     int4 NOT NULL, 
  StatusID uuid NOT NULL, 
  PRIMARY KEY (ID));
CREATE TABLE "status" (
  ID     uuid DEFAULT gen_random_uuid() NOT NULL, 
  status text NOT NULL, 
  PRIMARY KEY (ID));
CREATE TABLE Usuarios (
  ID         uuid DEFAULT gen_random_uuid() NOT NULL, 
  NombrePila varchar(150) NOT NULL, 
  AppPaterno varchar(150) NOT NULL, 
  AppMaterno varchar(150) NOT NULL, 
  Email      varchar(250), 
  Telefono   int8 DEFAULT 1234567890 NOT NULL, 
  UserName   varchar(70) NOT NULL, 
  Password   text NOT NULL, 
  StatusID   uuid NOT NULL, 
  PRIMARY KEY (ID));

----------------------------------
------------Relations-------------
----------------------------------
ALTER TABLE Alumnos ADD CONSTRAINT FKAlumnos372362 FOREIGN KEY (UsuariosID) REFERENCES Usuarios (ID);
ALTER TABLE Maestros ADD CONSTRAINT FKMaestros89169 FOREIGN KEY (UsuariosID) REFERENCES Usuarios (ID);
ALTER TABLE Usuarios ADD CONSTRAINT FKUsuarios851960 FOREIGN KEY (StatusID) REFERENCES Status (ID);
ALTER TABLE AlumnosEnClases ADD CONSTRAINT FKAlumnosEnC283022 FOREIGN KEY (AlumnosID) REFERENCES Alumnos (ID);
ALTER TABLE AlumnosEnClases ADD CONSTRAINT FKAlumnosEnC92263 FOREIGN KEY (ClasesID) REFERENCES Clases (ID);
ALTER TABLE ClasesEnPeriodos ADD CONSTRAINT FKClasesEnPe175289 FOREIGN KEY (PeriodosID) REFERENCES Periodos (ID);
ALTER TABLE ClasesEnPeriodos ADD CONSTRAINT FKClasesEnPe773524 FOREIGN KEY (ClasesID) REFERENCES Clases (ID);
ALTER TABLE Clases ADD CONSTRAINT FKClases284300 FOREIGN KEY (MaestrosId) REFERENCES Maestros (Id);
ALTER TABLE Clases ADD CONSTRAINT FKClases629337 FOREIGN KEY (MateriasID) REFERENCES Materias (ID);
ALTER TABLE Clases ADD CONSTRAINT FKClases180770 FOREIGN KEY (Horariosid) REFERENCES Horarios (id);
ALTER TABLE AlumnosEnClases ADD CONSTRAINT FKAlumnosEnC978512 FOREIGN KEY (StatusID) REFERENCES Status (ID);
ALTER TABLE Periodos ADD CONSTRAINT FKPeriodos288104 FOREIGN KEY (StatusID) REFERENCES Status (ID);
ALTER TABLE Materias ADD CONSTRAINT FKMaterias565205 FOREIGN KEY (StatusID) REFERENCES Status (ID);


INSERT INTO "status" ("id", "status") VALUES
('1ff8a932-5470-46e0-90e8-fe4d0abd40eb', 'Activo'),
('c0277191-f9dd-4b73-9079-a1764a00f967', 'Inactivo'),
('739677ac-caf9-4695-a565-f34732fde90a', 'Espera'),
('ad058260-b00b-4a02-8198-11669986b959', 'DadoBaja'),
('a5a41122-c656-4304-b32d-326bf3f27763', 'Jubilado');
