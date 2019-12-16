-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: mentor_on_demand
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mentor`
--

DROP TABLE IF EXISTS `mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mentor` (
  `mn_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `linkedin_url` varchar(255) NOT NULL,
  `mn_timeslot` varchar(11) NOT NULL,
  `years_of_experience` float NOT NULL,
  `mn_us_id` bigint(20) NOT NULL,
  PRIMARY KEY (`mn_id`),
  KEY `FKp1vtxo79wdfwa2up6941a94np` (`mn_us_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES (3,'aero@linked.in','14:00-16:00',5,7),(4,'asdsddsdsf@linked.in','14:00-16:00',5,12);
/*!40000 ALTER TABLE `mentor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor_skill`
--

DROP TABLE IF EXISTS `mentor_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mentor_skill` (
  `mns_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `mns_self_rating` float NOT NULL,
  `mns_years_of_experience` float NOT NULL,
  `mns_mn_id` bigint(20) NOT NULL,
  `ms_skill_id` bigint(20) NOT NULL,
  PRIMARY KEY (`mns_id`),
  KEY `FKsw1r751x4qfr1e9yp4h92v1d0` (`mns_mn_id`),
  KEY `FKqcj1pqkrdlvbu4nkiqvc8q3io` (`ms_skill_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_skill`
--

LOCK TABLES `mentor_skill` WRITE;
/*!40000 ALTER TABLE `mentor_skill` DISABLE KEYS */;
INSERT INTO `mentor_skill` VALUES (1,9,6,3,2),(2,9,10,4,1),(3,9,6,3,1);
/*!40000 ALTER TABLE `mentor_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill`
--

DROP TABLE IF EXISTS `skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skill` (
  `skill_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(255) NOT NULL,
  `skill_toc` varchar(255) DEFAULT NULL,
  `skill_prerequisite` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`skill_id`),
  KEY `FKlwmdyofh8pruxjahcf88weuuv` (`skill_prerequisite`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
INSERT INTO `skill` VALUES (1,'HTML',NULL,NULL),(2,'JAVA',NULL,NULL),(3,'CSS',NULL,NULL);
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `training`
--

DROP TABLE IF EXISTS `training`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `training` (
  `training_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `training_end_date` date NOT NULL,
  `training_progress` int(11) NOT NULL,
  `training_rating` float DEFAULT NULL,
  `training_start_date` date NOT NULL,
  `training_status` varchar(20) NOT NULL,
  `training_mentor_id` bigint(20) NOT NULL,
  `training_skill_id` bigint(20) NOT NULL,
  `training_user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`training_id`),
  KEY `FKb9n4i7r331uhflndhjj64kgr9` (`training_mentor_id`),
  KEY `FK8dfju72gnd7gmvmjhcjyjv1p` (`training_skill_id`),
  KEY `FKbesfm9lgjyrcjrn45gkjv5lci` (`training_user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training`
--

LOCK TABLES `training` WRITE;
/*!40000 ALTER TABLE `training` DISABLE KEYS */;
INSERT INTO `training` VALUES (1,'2019-12-17',0,0,'2019-12-11','Accepted',3,2,1),(2,'2019-12-19',0,0,'2019-12-18','Denied',3,2,1),(3,'2019-12-18',0,0,'2019-12-12','Request Pending',3,1,1);
/*!40000 ALTER TABLE `training` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `contact_number` bigint(20) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reset_password` tinyint(1) DEFAULT '0',
  `reset_password_date` date DEFAULT NULL,
  `role` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,1234567890,'pavan','swaroop','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK',0,NULL,'USER','user'),(2,9790650572,'pavan','L','$2a$10$8GJ8j0iDwu0qP1d6Az9LEu5h5JImIHc1J8aNUOub.N26.wna7DNGm',0,NULL,'USER','pavan'),(5,9898989898,'hari','vasudev','$2a$10$PAIpzLxU520R3i3ZscUGgebc.StvuAAak04530Bm.UpWplbA/SEci',0,NULL,'User','hari'),(7,8525555555,'harsha ','bob','$2a$10$56BLp6WpvAzbtLbtGT49XOaWiB0mpZZ2QzZuoPtcwOk8rzZHzXLIi',0,NULL,'Mentor','harsha'),(12,3546546554,'ment','ment','$2a$10$IaqFV13.uVern/bayox0TOD/.cJjUYhXQxmvm3cgE09lg.E4u15D2',0,NULL,'Mentor','ment'),(13,9100560867,'asdasd','asd','$2a$10$yxJ6TFqphyX1FEOA6.OgVeHIAeEgNsHoI2tv49lsfuMx39mkoQfa6',0,NULL,'user','testUser');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-11 15:22:22
