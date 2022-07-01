CREATE TYPE validTypes AS ENUM ('admin','academician','student');
CREATE TABLE "USER" (
	Username varchar(10) NOT NULL,
    Fname varchar(15) NOT NULL,
	Minit varchar(15),
	Lname varchar(15) NOT NULL,
	Birthdate date,
	Address varchar(200),
	PhoneNumber varchar(15),
	GroupType validTypes NOT NULL,
    PRIMARY KEY (Username)
);

CREATE TABLE "NOTIFICATION" (
	NotificationID int NOT NULL,
	Username varchar(10) NOT NULL,
	Date timestamp NOT NULL,
	Title varchar(20) NOT NULL,
	"Message" varchar(200) NOT NULL,
	Receipts boolean NOT NULL, 
	FOREIGN KEY (Username) References "USER"(Username),
	PRIMARY KEY (Username, NotificationID)
);

CREATE TABLE "ADMIN" (
	Username varchar(10) NOT NULL,
	AccessLevel int NOT NULL,
	FOREIGN KEY (Username) References "USER"(Username),
	PRIMARY KEY (Username)
);

CREATE TABLE "DEPARTMENT" (
	DepCode varchar(3) NOT NULL,
	Head varchar(10),
	CreditLimit int NOT NULL,
	PRIMARY KEY (DepCode)
);

CREATE TYPE validDegreesA AS ENUM ('research', 'associate', 'professor');
CREATE TABLE "ACADEMICIAN" (
	Username varchar(10) NOT NULL,
	DepCode varchar(3) NOT NULL,
	"Degree" validDegreesA NOT NULL,
	FOREIGN KEY (Username) References "USER"(Username),
	FOREIGN KEY(DepCode) References "DEPARTMENT"(DepCode),
	PRIMARY KEY (Username)
);

CREATE TYPE validDegreesS AS ENUM ('bachelor', 'master', 'phd');
CREATE TABLE "STUDENT" (
	Username varchar(10) NOT NULL,
	DepCode varchar(3) NOT NULL,
	Advicer varchar(10) NOT NULL,
	StudentNumber int NOT NULL,
	"Degree" validDegreesS NOT NULL,
	Grade int NOT NULL,
	FOREIGN KEY (Username) References "USER"(Username),
	FOREIGN KEY(DepCode) References "DEPARTMENT"(DepCode),
	PRIMARY KEY (Username)
);

CREATE TABLE "LECTURE" (
	LectureCode int NOT NULL,
	DepCode varchar(3) NOT NULL,
	Lecturer varchar(10) NOT NULL,
	Assistant varchar(10),
	Credit int NOT NULL,
	FOREIGN KEY (DepCode) References "DEPARTMENT"(DepCode),
	FOREIGN KEY (Lecturer) References "ACADEMICIAN"(Username),
	PRIMARY KEY (DepCode, LectureCode)
);

CREATE TYPE validApproved AS ENUM ('waiting', 'approved', 'denied');
CREATE TABLE "STUDENT_LECTURES" (
	Student_Username varchar(10) NOT NULL,
	Lecture_DepCode varchar(3) NOT NULL,
	LectureCode int NOT NULL,
	Approved validApproved NOT NULL,
	FOREIGN KEY (Student_Username) References "USER"(Username),
	FOREIGN KEY (Lecture_DepCode, LectureCode) References "LECTURE"(DepCode, LectureCode),
	PRIMARY KEY (Student_Username, Lecture_DepCode, LectureCode)
);