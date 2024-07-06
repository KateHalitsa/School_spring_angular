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
  `group_schedule_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_attendance_student1_idx` (`student_id`),
  KEY `fk_attendance_groupe_schedule1_idx` (`group_schedule_id`),
  CONSTRAINT `fk_attendance_groupe_schedule1` FOREIGN KEY (`group_schedule_id`) REFERENCES `group_schedule` (`id`),
  CONSTRAINT `fk_attendance_student1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `attendance` */

insert  into `attendance`(`id`,`student_id`,`group_schedule_id`) values 
(1,2,2);

/*Table structure for table `group` */

DROP TABLE IF EXISTS `group`;

CREATE TABLE `group` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `age` int NOT NULL,
  `school_year` int NOT NULL,
  `subject_id` int unsigned NOT NULL,
  `teacher_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_groupe_subject1_idx` (`subject_id`),
  KEY `fk_groupe_teacher1_idx` (`teacher_id`),
  CONSTRAINT `fk_groupe_subject1` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`),
  CONSTRAINT `fk_groupe_teacher1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `group` */

insert  into `group`(`id`,`name`,`age`,`school_year`,`subject_id`,`teacher_id`) values 
(1,'Букварята',4,2024,25,1),
(2,'Матемашки',5,2023,26,2),
(3,'Пиксики',3,2025,27,1),
(7,'Новая группа',1,2023,25,1),
(10,'Умняшки',4,2024,25,1),
(11,'Задачки 1234',4,2024,25,2),
(12,'Крутяшки',4,2024,25,1),
(13,'eeee ghhjgewrjrewu',3,2024,25,1),
(15,'000',3,2024,27,2);

/*Table structure for table `group_schedule` */

DROP TABLE IF EXISTS `group_schedule`;

CREATE TABLE `group_schedule` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `start_time` datetime NOT NULL,
  `group_id` int unsigned NOT NULL,
  `room_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_groupe_schedule_room1_idx` (`room_id`),
  KEY `fk_groupe_schedule_groupe1_idx` (`group_id`),
  CONSTRAINT `fk_groupe_schedule_groupe1` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`),
  CONSTRAINT `fk_groupe_schedule_room1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `group_schedule` */

insert  into `group_schedule`(`id`,`start_time`,`group_id`,`room_id`) values 
(2,'2024-04-27 19:00:00',1,1),
(3,'2024-05-11 22:00:00',1,1),
(5,'2024-05-16 16:00:00',13,1);

/*Table structure for table `room` */

DROP TABLE IF EXISTS `room`;

CREATE TABLE `room` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(128) DEFAULT NULL,
  `floor` int DEFAULT NULL,
  `number` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `room` */

insert  into `room`(`id`,`address`,`floor`,`number`) values 
(1,'ул Кузнецова 25',3,78),
(2,'ул Кузнецова 20',1,12),
(3,'ул Иванова 75',5,55);

/*Table structure for table `student` */

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `user_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_student_user1_idx` (`user_id`),
  CONSTRAINT `fk_student_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `student` */

insert  into `student`(`id`,`name`,`user_id`) values 
(2,'Никита Жилов',3),
(5,'Галица Екатерина',7);

/*Table structure for table `student_group` */

DROP TABLE IF EXISTS `student_group`;

CREATE TABLE `student_group` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `student_id` int unsigned NOT NULL,
  `group_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_student_groupe_student1_idx` (`student_id`),
  KEY `fk_student_groupe_groupe1_idx` (`group_id`),
  CONSTRAINT `fk_student_groupe_groupe1` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`),
  CONSTRAINT `fk_student_groupe_student1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `student_group` */

insert  into `student_group`(`id`,`student_id`,`group_id`) values 
(1,2,1);

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
  `user_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_teacher_user1_idx` (`user_id`),
  CONSTRAINT `fk_teacher_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `teacher` */

insert  into `teacher`(`id`,`name`,`education`,`description`,`user_id`) values 
(1,'Галица Тереза Эдвардовна','Высшее. БГУ. Географический Факультет','Большой опыт работы. Прекрасное знание Географии.',1),
(2,'Ttt','edu for ttt','dec for ttt',4);

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `user` */

insert  into `user`(`id`,`login`,`password`,`phone`,`email`) values 
(1,'tereza','tereza','802911223344','tereza@mail.ru'),
(2,'admin','admin','123','Vasya@mail.ru'),
(3,'nikita','nikita','345122dsgs','Nikita.Jiloz@mail.ru'),
(4,'ttt','ttt','123ttt','ttt@gmail.com'),
(7,'kate','kate','kate123','kate@gmail.com');

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
