INSERT INTO "USER" VALUES ('adminimben', 'Passw0rd', 'Admin', 'Can', 'Adminoğlu', '1970-01-01', 'Şırnak', '05555545533', 'admin', TRUE);
INSERT INTO "ADMIN" VALUES ('adminimben', 1);

INSERT INTO "DEPARTMENT" VALUES ('BİL', '', 23);
INSERT INTO "DEPARTMENT" VALUES ('ELE', '', 22);
INSERT INTO "DEPARTMENT" VALUES ('MAK', '', 24);
INSERT INTO "DEPARTMENT" VALUES ('TAR', '', 24);

INSERT INTO "USER" VALUES ('oabul', 'Passw0rd', 'Osman', 'Kral', 'Abul', '1990-01-01', 'İstanbul', '05521110011', 'academician', TRUE);
INSERT INTO "ACADEMICIAN" VALUES ('oabul', 'BİL', 'Profesör');
INSERT INTO "USER" VALUES ('mtan', 'Passw0rd', 'Mehmet', 'Reis', 'Tan', '1980-01-01', 'Kahramanmaraş', '05521110012', 'academician', TRUE);
INSERT INTO "ACADEMICIAN" VALUES ('mtan', 'BİL', 'Profesör');
INSERT INTO "USER" VALUES ('tgirici', 'Passw0rd', 'Tolga', 'Adam', 'Girici', '1970-01-01', 'Isparta', '05521110013', 'academician', TRUE);
INSERT INTO "ACADEMICIAN" VALUES ('tgirici', 'ELE', 'Profesör');
INSERT INTO "USER" VALUES ('ysarinay', 'Passw0rd', 'Yusuf', 'Rektör', 'Sarınay', '1970-01-01', 'Kastamonu', '05521110014', 'academician', TRUE);
INSERT INTO "ACADEMICIAN" VALUES ('ysarinay', 'TAR', 'Profesör');

UPDATE "DEPARTMENT" SET Head='oabul' WHERE DepCode='BİL';
UPDATE "DEPARTMENT" SET Head='tgirici' WHERE DepCode='ELE';

INSERT INTO "USER" VALUES ('ftugay', 'Passw0rd', 'Fatih', 'Arslan', 'Tugay', '2000-04-11', 'Erzurum', '05368974546', 'student', TRUE);
INSERT INTO "STUDENT" VALUES ('ftugay', 'BİL', 'oabul', '181101008', 'Lisans', 4);
INSERT INTO "USER" VALUES ('mgonen', 'Passw0rd', 'Mert', 'Can', 'Gönen', '1999-12-24', 'Ankara', '05434537752', 'student', TRUE);
INSERT INTO "STUDENT" VALUES ('mgonen', 'BİL', 'oabul', '181101039', 'Lisans', 4);
INSERT INTO "USER" VALUES ('enebioglu', 'Passw0rd', 'Elif', '-', 'Nebioğlu', '2000-01-01', 'Antalya', '05053434344', 'student', TRUE);
INSERT INTO "STUDENT" VALUES ('enebioglu', 'BİL', 'mtan', '191101024', 'Yüksek Lisans', 4);
INSERT INTO "USER" VALUES ('bdemirok', 'Passw0rd', 'Gökçe', 'Başak', 'Demirok', '2000-01-01', 'İzmir', '05053535355', 'student', TRUE);
INSERT INTO "STUDENT" VALUES ('bdemirok', 'BİL', 'mtan', '191401005', 'Yüksek Lisans', 4);
INSERT INTO "USER" VALUES ('sgumusbuga', 'Passw0rd', 'Salih', 'Slaih', 'Gümüşbuğa', '2000-01-01', 'Çankırı', '05053535351', 'student', TRUE);
INSERT INTO "STUDENT" VALUES ('sgumusbuga', 'ELE', 'tgirici', '181201009', 'Doktora', 4);
INSERT INTO "USER" VALUES ('ssomuncu', 'Passw0rd', 'Muhammed', 'Selman', 'Somuncu', '2000-01-01', 'Kayseri', '05053535855', 'student', TRUE);
INSERT INTO "STUDENT" VALUES ('ssomuncu', 'ELE', 'tgirici', '181201029', 'Doktora', 4);

INSERT INTO "LECTURE" VALUES (113, 'BİL', 'mtan', 'enebioglu', 4, 50);
INSERT INTO "LECTURE" VALUES (212, 'BİL', 'mtan', 'bdemirok', 4, 50);
INSERT INTO "LECTURE" VALUES (372, 'BİL', 'oabul', 'enebioglu', 4, 50);
INSERT INTO "LECTURE" VALUES (461, 'BİL', 'oabul', 'bdemirok', 4, 50);
INSERT INTO "LECTURE" VALUES (101, 'ELE', 'tgirici', 'sgumusbuga', 2, 50);
INSERT INTO "LECTURE" VALUES (211, 'ELE', 'tgirici', 'ssomuncu', 3, 50);

INSERT INTO "STUDENT_LECTURES" VALUES ('ftugay', 'BİL', 212, 'waiting');
INSERT INTO "STUDENT_LECTURES" VALUES ('mgonen', 'BİL', 372, 'denied');
INSERT INTO "STUDENT_LECTURES" VALUES ('enebioglu', 'BİL', 461, 'approved');
INSERT INTO "STUDENT_LECTURES" VALUES ('bdemirok', 'BİL', 113, 'waiting');
INSERT INTO "STUDENT_LECTURES" VALUES ('sgumusbuga', 'ELE', 211, 'approved');
INSERT INTO "STUDENT_LECTURES" VALUES ('ssomuncu', 'ELE', 101, 'waiting');

INSERT INTO "NOTIFICATION" (N_Username, "Date", Title, "Message", Receipts) VALUES ('ftugay', '2022-10-10', 'Baslik', 'Sana mesaj var', FALSE)