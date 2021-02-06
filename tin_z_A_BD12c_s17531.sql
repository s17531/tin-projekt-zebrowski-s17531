CREATE DATABASE `tin_z_a_bd12c_s17531` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
CREATE TABLE `class` (
  `idClass` int NOT NULL AUTO_INCREMENT,
  `classNr` varchar(45) NOT NULL,
  `idLevel` int NOT NULL,
  `hours` int NOT NULL,
  `idTeacher` int NOT NULL,
  `idYear` int NOT NULL,
  `idLanguage` int NOT NULL,
  PRIMARY KEY (`idClass`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `employee` (
  `idEmployee` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(85) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idEmployee`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `enrollment` (
  `idEnrollment` int NOT NULL AUTO_INCREMENT,
  `idStudent` int NOT NULL,
  `idClass` int NOT NULL,
  `enrollmentDate` date NOT NULL,
  `comment` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idEnrollment`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `language` (
  `idLanguage` int NOT NULL AUTO_INCREMENT,
  `language` varchar(45) NOT NULL,
  PRIMARY KEY (`idLanguage`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `level` (
  `idLevel` int NOT NULL AUTO_INCREMENT,
  `level` varchar(45) NOT NULL,
  PRIMARY KEY (`idLevel`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `student` (
  `idStudent` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(85) NOT NULL,
  `birthdate` date NOT NULL,
  `password` varchar(256) NOT NULL,
  PRIMARY KEY (`idStudent`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `teacher` (
  `idTeacher` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(85) NOT NULL,
  `education` varchar(120) DEFAULT NULL,
  `idLanguage` int NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idTeacher`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `year` (
  `idYear` int NOT NULL AUTO_INCREMENT,
  `year` varchar(9) NOT NULL,
  PRIMARY KEY (`idYear`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `tin_z_a_bd12c_s17531`.`language` (`idLanguage`,`language`) VALUES (1,'angielski');
INSERT INTO `tin_z_a_bd12c_s17531`.`language` (`idLanguage`,`language`) VALUES (2,'niemiecki');
INSERT INTO `tin_z_a_bd12c_s17531`.`language` (`idLanguage`,`language`) VALUES (3,'hiszpański');

INSERT INTO `tin_z_a_bd12c_s17531`.`level` (`idLevel`,`level`) VALUES (1 , 'A1');
INSERT INTO `tin_z_a_bd12c_s17531`.`level` (`idLevel`,`level`) VALUES (2 , 'A2');
INSERT INTO `tin_z_a_bd12c_s17531`.`level` (`idLevel`,`level`) VALUES (3 , 'B1');
INSERT INTO `tin_z_a_bd12c_s17531`.`level` (`idLevel`,`level`) VALUES (2 , 'B2');
