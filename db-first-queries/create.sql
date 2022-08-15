CREATE TYPE validTypes AS ENUM ('admin','academician','student');
CREATE TABLE "USER" (
	Username varchar(10) NOT NULL,
	"Password" varchar(10) NOT NULL,
    Fname varchar(15) NOT NULL,
	Minit varchar(15),
	Lname varchar(15) NOT NULL,
	Birthdate date,
	"Address" varchar(200),
	PhoneNumber varchar(15) UNIQUE,
	GroupType validTypes NOT NULL,
	FirstLogin boolean NOT NULL,
    PRIMARY KEY (Username)
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SELECT uuid_generate_v4();
CREATE TABLE "NOTIFICATION" (
	N_Username varchar(10) NOT NULL,
	NotificationID uuid DEFAULT uuid_generate_v4 () NOT NULL UNIQUE,
	"Date" timestamp NOT NULL,
	Title varchar(20) NOT NULL,
	"Message" varchar(200) NOT NULL,
	Receipts boolean NOT NULL, 
	FOREIGN KEY (N_Username) References "USER"(Username),
	PRIMARY KEY (N_Username, NotificationID)
);

CREATE TABLE "ADMIN" (
	AD_Username varchar(10) NOT NULL,
	AccessLevel int NOT NULL,
	FOREIGN KEY (AD_Username) References "USER"(Username),
	PRIMARY KEY (AD_Username)
);

CREATE TABLE "DEPARTMENT" (
	DepCode varchar(3) NOT NULL,
	Head varchar(10),
	CreditLimit int NOT NULL,
	PRIMARY KEY (DepCode)
);

CREATE TYPE validDegreesA AS ENUM ('Araştırma Görevlisi', 'Doçent', 'Profesör');
CREATE TABLE "ACADEMICIAN" (
	A_Username varchar(10) NOT NULL,
	A_DepCode varchar(3) NOT NULL,
	"A_Degree" validDegreesA NOT NULL,
	FOREIGN KEY (A_Username) References "USER"(Username),
	FOREIGN KEY(A_DepCode) References "DEPARTMENT"(DepCode),
	PRIMARY KEY (A_Username)
);

CREATE TYPE validDegreesS AS ENUM ('Lisans', 'Yüksek Lisans', 'Doktora');
CREATE TABLE "STUDENT" (
	S_Username varchar(10) NOT NULL,
	S_DepCode varchar(3) NOT NULL,
	Advicer varchar(10) NOT NULL,
	StudentNumber int NOT NULL UNIQUE,
	"S_Degree" validDegreesS NOT NULL,
	Grade int NOT NULL,
	FOREIGN KEY (S_Username) References "USER"(Username),
	FOREIGN KEY(S_DepCode) References "DEPARTMENT"(DepCode),
	PRIMARY KEY (S_Username)
);

CREATE TABLE "LECTURE" (
	LectureCode int NOT NULL,
	L_DepCode varchar(3) NOT NULL,
	Lecturer varchar(10) NOT NULL,
	Assistant varchar(10),
	Credit int NOT NULL,
	Quota int NOT NULL,
	FOREIGN KEY (L_DepCode) References "DEPARTMENT"(DepCode),
	FOREIGN KEY (Lecturer) References "ACADEMICIAN"(A_Username),
	PRIMARY KEY (L_DepCode, LectureCode)
);

CREATE TYPE validApproved AS ENUM ('waiting', 'approved', 'denied');
CREATE TABLE "STUDENT_LECTURES" (
	SL_Username varchar(10) NOT NULL,
	SL_Depcode varchar(3) NOT NULL,
	SL_LectureCode int NOT NULL,
	Approved validApproved NOT NULL,
	FOREIGN KEY (SL_Username) References "USER"(Username),
	FOREIGN KEY (SL_Depcode, SL_LectureCode) References "LECTURE"(L_DepCode, LectureCode),
	PRIMARY KEY (SL_Username, SL_Depcode, SL_LectureCode)
);