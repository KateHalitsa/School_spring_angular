/*
SQLyog Community v13.2.0 (64 bit)
MySQL - 8.0.32 : Database - preschool
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`preschool` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `preschool`;

/*Table structure for table `attendance` */

DROP TABLE IF EXISTS `attendance`;

CREATE TABLE `attendance` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `student_id` int unsigned NOT NULL,
  `groupe_schedule_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_attendance_student1_idx` (`student_id`),
  KEY `fk_attendance_groupe_schedule1_idx` (`groupe_schedule_id`),
  CONSTRAINT `fk_attendance_groupe_schedule1` FOREIGN KEY (`groupe_schedule_id`) REFERENCES `groupe_schedule` (`id`),
  CONSTRAINT `fk_attendance_student1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `attendance` */

/*Table structure for table `groupe` */

DROP TABLE IF EXISTS `groupe`;

CREATE TABLE `groupe` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `age` int DEFAULT NULL,
  `subject_id` int unsigned NOT NULL,
  `teacher_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_groupe_subject1_idx` (`subject_id`),
  KEY `fk_groupe_teacher1_idx` (`teacher_id`),
  CONSTRAINT `fk_groupe_subject1` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`),
  CONSTRAINT `fk_groupe_teacher1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `groupe` */

/*Table structure for table `groupe_schedule` */

DROP TABLE IF EXISTS `groupe_schedule`;

CREATE TABLE `groupe_schedule` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `start_time` time DEFAULT NULL,
  `groupe_id` int unsigned NOT NULL,
  `room_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_groupe_schedule_groupe1_idx` (`groupe_id`),
  KEY `fk_groupe_schedule_room1_idx` (`room_id`),
  CONSTRAINT `fk_groupe_schedule_groupe1` FOREIGN KEY (`groupe_id`) REFERENCES `groupe` (`id`),
  CONSTRAINT `fk_groupe_schedule_room1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `groupe_schedule` */

/*Table structure for table `room` */

DROP TABLE IF EXISTS `room`;

CREATE TABLE `room` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(128) DEFAULT NULL,
  `floor` int DEFAULT NULL,
  `number` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `room` */

/*Table structure for table `student` */

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `student` */

insert  into `student`(`id`,`name`) values 
(2,'Никита Жилов');

/*Table structure for table `student_groupe` */

DROP TABLE IF EXISTS `student_groupe`;

CREATE TABLE `student_groupe` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `student_id` int unsigned NOT NULL,
  `groupe_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_student_groupe_student1_idx` (`student_id`),
  KEY `fk_student_groupe_groupe1_idx` (`groupe_id`),
  CONSTRAINT `fk_student_groupe_groupe1` FOREIGN KEY (`groupe_id`) REFERENCES `groupe` (`id`),
  CONSTRAINT `fk_student_groupe_student1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `student_groupe` */

/*Table structure for table `subject` */

DROP TABLE IF EXISTS `subject`;

CREATE TABLE `subject` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `subject` */

insert  into `subject`(`id`,`name`,`description`) values 
(7,NULL,'На этом предмете ваш ребенок научиться читать'),
(8,NULL,'На этом предмете ваш ребенок научитьсяч базовым знаниям математики'),
(9,NULL,'На этом предмете ваш ребенок сможет проявить себя творчесски и развить мелкую моторику'),
(10,NULL,'На этом предмете ваш ребенок научиться читать'),
(12,NULL,'На этом предмете ваш ребенок сможет проявить себя творчесски и развить мелкую моторику'),
(13,NULL,'На этом предмете ваш ребенок научиться читать'),
(14,NULL,'На этом предмете ваш ребенок научитьсяч базовым знаниям математики'),
(15,NULL,'На этом предмете ваш ребенок сможет проявить себя творчесски и развить мелкую моторику'),
(16,NULL,'На этом предмете ваш ребенок научиться читать'),
(17,NULL,'На этом предмете ваш ребенок научитьсяч базовым знаниям математики'),
(18,NULL,'На этом предмете ваш ребенок сможет проявить себя творчесски и развить мелкую моторику'),
(19,NULL,'На этом предмете ваш ребенок научиться читать'),
(20,NULL,'На этом предмете ваш ребенок научитьсяч базовым знаниям математики'),
(21,NULL,'На этом предмете ваш ребенок сможет проявить себя творчесски и развить мелкую моторику'),
(22,NULL,'На этом предмете ваш ребенок научиться читать'),
(23,NULL,'На этом предмете ваш ребенок научитьсяч базовым знаниям математики'),
(24,NULL,'На этом предмете ваш ребенок сможет проявить себя творчесски и развить мелкую моторику'),
(25,'Чтение','На этом предмете ваш ребенок научиться читать'),
(26,'Математика','На этом предмете ваш ребенок научитьсяч базовым знаниям математики'),
(27,'ИЗО','На этом предмете ваш ребенок сможет проявить себя творчесски и развить мелкую моторику');

/*Table structure for table `teacher` */

DROP TABLE IF EXISTS `teacher`;

CREATE TABLE `teacher` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `education` varchar(600) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `teacher` */

insert  into `teacher`(`id`,`name`,`education`,`description`) values 
(1,'Галица Тереза Эдвардовна','Высшее. БГУ. Географический Факультет','Большой опыт работы. Прекрасное знание Географии.');

/*Table structure for table `teacher_subject` */

DROP TABLE IF EXISTS `teacher_subject`;

CREATE TABLE `teacher_subject` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `subject_id` int unsigned NOT NULL,
  `teacher_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_teacher_subject_subject1_idx` (`subject_id`),
  KEY `fk_teacher_subject_teacher1_idx` (`teacher_id`),
  CONSTRAINT `fk_teacher_subject_subject1` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`),
  CONSTRAINT `fk_teacher_subject_teacher1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `teacher_subject` */

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `phone` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `teacher_id` int unsigned DEFAULT NULL,
  `student_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_teacher1_idx` (`teacher_id`),
  KEY `fk_user_student1_idx` (`student_id`),
  CONSTRAINT `fk_user_student1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`),
  CONSTRAINT `fk_user_teacher1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `user` */

insert  into `user`(`id`,`login`,`password`,`phone`,`email`,`teacher_id`,`student_id`) values 
(1,'tereza','tereza','802911223344','tereza@mail.ru',1,NULL),
(2,'admin','admin','123','Vasya@mail.ru',NULL,NULL),
(3,'nikita','nikita','345122dsgs','Nikita.Jiloz@mail.ru',NULL,2);

/*Table structure for table `user_role` */

DROP TABLE IF EXISTS `user_role`;

CREATE TABLE `user_role` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_role_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_role_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `user_role` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
