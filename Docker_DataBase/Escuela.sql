ALTER TABLE AlumnosEnClases DROP CONSTRAINT FKAlumnosEnC978512;
ALTER TABLE Clases DROP CONSTRAINT FKClases180770;
ALTER TABLE Clases DROP CONSTRAINT FKClases629337;
ALTER TABLE Clases DROP CONSTRAINT FKClases284300;
ALTER TABLE ClasesEnPeriodos DROP CONSTRAINT FKClasesEnPe175289;
ALTER TABLE ClasesEnPeriodos DROP CONSTRAINT FKClasesEnPe773524;
ALTER TABLE AlumnosEnClases DROP CONSTRAINT FKAlumnosEnC283022;
ALTER TABLE AlumnosEnClases DROP CONSTRAINT FKAlumnosEnC92263;
ALTER TABLE Usuarios DROP CONSTRAINT FKUsuarios851960;
ALTER TABLE Maestros DROP CONSTRAINT FKMaestros89169;
ALTER TABLE Alumnos DROP CONSTRAINT FKAlumnos372362;
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

CREATE TABLE Alumnos (
  ID         uuid DEFAULT gen_random_uuid() NOT NULL, 
  Matricula  int8 NOT NULL UNIQUE, 
  UsuariosID int4 NOT NULL, 
  PRIMARY KEY (ID));
CREATE TABLE AlumnosEnClases (
  AlumnosID    uuid DEFAULT gen_random_uuid() NOT NULL, 
  ClasesID     uuid DEFAULT gen_random_uuid() NOT NULL, 
  Calificación float8 NOT NULL, 
  StatusID     uuid DEFAULT gen_random_uuid() NOT NULL, 
  PRIMARY KEY (AlumnosID, 
  ClasesID));
CREATE TABLE Clases (
  ID         uuid DEFAULT gen_random_uuid() NOT NULL, 
  Nombre     text NOT NULL, 
  MaestrosId uuid DEFAULT gen_random_uuid() NOT NULL, 
  MateriasID uuid DEFAULT gen_random_uuid() NOT NULL, 
  Horariosid uuid DEFAULT gen_random_uuid() NOT NULL, 
  PRIMARY KEY (ID));
CREATE TABLE ClasesEnPeriodos (
  PeriodosID uuid DEFAULT gen_random_uuid() NOT NULL, 
  ClasesID   uuid DEFAULT gen_random_uuid() NOT NULL, 
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
  UsuariosID    int4 NOT NULL, 
  PRIMARY KEY (Id));
CREATE TABLE Materias (
  ID     uuid DEFAULT gen_random_uuid() NOT NULL, 
  Nombre text NOT NULL, 
  PRIMARY KEY (ID));
CREATE TABLE Periodos (
  ID     uuid DEFAULT gen_random_uuid() NOT NULL, 
  Nombre varchar(255) NOT NULL, 
  Año    int4 NOT NULL, 
  PRIMARY KEY (ID));
CREATE TABLE Status (
  ID     uuid DEFAULT gen_random_uuid() NOT NULL, 
  Status text NOT NULL, 
  PRIMARY KEY (ID));
CREATE TABLE Usuarios (
  ID         SERIAL NOT NULL, 
  NombrePila varchar(150) NOT NULL, 
  AppPaterno varchar(150) NOT NULL, 
  AppMaterno varchar(150) NOT NULL, 
  Email      text, 
  Telefono   int4 DEFAULT 1234567890 NOT NULL, 
  UserName   varchar(70) NOT NULL, 
  Password   text NOT NULL, 
  StatusID   uuid DEFAULT gen_random_uuid() NOT NULL, 
  PRIMARY KEY (ID));


ALTER TABLE AlumnosEnClases ADD CONSTRAINT FKAlumnosEnC978512 FOREIGN KEY (StatusID) REFERENCES Status (ID);
ALTER TABLE Clases ADD CONSTRAINT FKClases180770 FOREIGN KEY (Horariosid) REFERENCES Horarios (id);
ALTER TABLE Clases ADD CONSTRAINT FKClases629337 FOREIGN KEY (MateriasID) REFERENCES Materias (ID);
ALTER TABLE Clases ADD CONSTRAINT FKClases284300 FOREIGN KEY (MaestrosId) REFERENCES Maestros (Id);
ALTER TABLE ClasesEnPeriodos ADD CONSTRAINT FKClasesEnPe175289 FOREIGN KEY (PeriodosID) REFERENCES Periodos (ID);
ALTER TABLE ClasesEnPeriodos ADD CONSTRAINT FKClasesEnPe773524 FOREIGN KEY (ClasesID) REFERENCES Clases (ID);
ALTER TABLE AlumnosEnClases ADD CONSTRAINT FKAlumnosEnC283022 FOREIGN KEY (AlumnosID) REFERENCES Alumnos (ID);
ALTER TABLE AlumnosEnClases ADD CONSTRAINT FKAlumnosEnC92263 FOREIGN KEY (ClasesID) REFERENCES Clases (ID);
ALTER TABLE Usuarios ADD CONSTRAINT FKUsuarios851960 FOREIGN KEY (StatusID) REFERENCES Status (ID);
ALTER TABLE Maestros ADD CONSTRAINT FKMaestros89169 FOREIGN KEY (UsuariosID) REFERENCES Usuarios (ID);
ALTER TABLE Alumnos ADD CONSTRAINT FKAlumnos372362 FOREIGN KEY (UsuariosID) REFERENCES Usuarios (ID);
