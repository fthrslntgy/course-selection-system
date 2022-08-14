--Advicer'ı Osman Abul olan öğrenciler
CREATE VIEW ABULSTUDENT AS
SELECT *
FROM "STUDENT"
WHERE Advicer = 'oabul';

SELECT s_username, studentnumber FROM ABULSTUDENT;


--BİL departmanı altında bulunan dersler
CREATE VIEW BILLECTURE AS
SELECT *
FROM "LECTURE"
WHERE l_depcode = 'BİL'

SELECT l_depcode, lecturecode FROM BILLECTURE;


--Tüm profesörler
CREATE VIEW PROFACADEMIC AS
SELECT *
FROM "ACADEMICIAN"
WHERE "A_Degree" = 'professor'

SELECT a_username, a_depcode FROM PROFACADEMIC;


--Profesörlere sahip bölümler
CREATE VIEW DEPTWITHPROF AS
SELECT *
FROM "ACADEMICIAN"
WHERE  "A_Degree" = 'professor'

SELECT DISTINCT a_depcode FROM DEPTWITHPROF;