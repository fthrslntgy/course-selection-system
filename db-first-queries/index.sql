--Öğrenci numarasına göre öğrencilerin oluşturduğu index state
CREATE INDEX idx_studentnumber
ON "STUDENT" (studentnumber);

--Departman kodu ve ders koduna göre derslerin oluşturduğu index state
CREATE INDEX idx_lecture
ON "LECTURE" (l_depcode, lecturecode);

--Kullanıcı adı ve unvana göre akademisyenlerin oluşturduğu index state
CREATE INDEX idx_username_degree
ON "ACADEMICIAN" (a_username, "A_Degree");