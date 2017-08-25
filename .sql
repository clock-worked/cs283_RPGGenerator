-- MySQL dump 10.13  Distrib 5.7.19, for Linux (x86_64)
--
-- Host: localhost    Database: cs275project
-- ------------------------------------------------------
-- Server version	5.7.19-0ubuntu0.16.04.1

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
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `class` (
  `classid` int(11) NOT NULL,
  `classname` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`classid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,'knight'),(2,'orc'),(3,'ranger'),(4,'assassin'),(5,'mage');
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender`
--

DROP TABLE IF EXISTS `gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gender` (
  `genderid` int(11) NOT NULL,
  `gendername` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`genderid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender`
--

LOCK TABLES `gender` WRITE;
/*!40000 ALTER TABLE `gender` DISABLE KEYS */;
INSERT INTO `gender` VALUES (1,'male'),(2,'female'),(3,'other');
/*!40000 ALTER TABLE `gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `name`
--

DROP TABLE IF EXISTS `name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `name` (
  `nameid` int(11) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`nameid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `name`
--

LOCK TABLES `name` WRITE;
/*!40000 ALTER TABLE `name` DISABLE KEYS */;
INSERT INTO `name` VALUES (1,'Aurelian','Flintripper'),(2,'Amara','Heavysky'),(3,'Briseis','Wyvernsnarl'),(4,'Breena','Fusethorn'),(5,'Cyprian','Humblevalor'),(6,'Carys','Willowbreaker'),(7,'Destin','Axeward'),(8,'Drystan','Bladedust'),(9,'Evadne','Windbleeder'),(10,'Eoin','Warspark'),(11,'Finian','Wyvernforce'),(12,'Finna','Bronzemantle'),(13,'Gaerwn','Nightpunch'),(14,'Ginerva','Whitecleaver'),(15,'Hannelore','Cloudgrip'),(16,'Hesperos','Leafsprite'),(17,'Ianthe','Steelscream'),(18,'Iseult','Fullshield'),(19,'Jesolyn','Fisthunter'),(20,'Jasperus','Burningblower'),(21,'Karense','Marshsorrow'),(22,'Katriel','Dusthelm'),(23,'Liron','Ashvigor'),(24,'Lioren','Foredown'),(25,'Malea','Orbseeker'),(26,'Miriel','Seabane'),(27,'Nerys','Richcleaver'),(28,'Neirin','Thundersorrow'),(29,'Oisin','Hazeswallow'),(30,'Ozara','Laughingarm'),(31,'Phelan','Crestglade'),(32,'Pryderi','Dreamridge'),(33,'Quintes','Mosskeeper'),(34,'Quinevere','Amberslayer'),(35,'Rhyan','Mountainarrow'),(36,'Renfrew','Sagebrook'),(37,'Saoirse','Bronzechewer'),(38,'Seraphim','Marshbough'),(39,'Tavish','Richcut'),(40,'Tearlach','Monsteroak'),(41,'Urien','Icerun'),(42,'Utherus','Fallenblower'),(43,'Vasilis','Bloodflare'),(44,'Vesperus','Fistrock'),(45,'Xanthus','Wildblaze'),(46,'Xylia','Darkrock'),(47,'Yseult','Deepblood'),(48,'Yeira','Iceeye'),(49,'Zorion','Hardweaver'),(50,'Zareke','Claworb');
/*!40000 ALTER TABLE `name` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `picture`
--

DROP TABLE IF EXISTS `picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `picture` (
  `pictureid` int(11) NOT NULL,
  `path` text,
  `gender` int(11) DEFAULT NULL,
  `classname` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`pictureid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `picture`
--

LOCK TABLES `picture` WRITE;
/*!40000 ALTER TABLE `picture` DISABLE KEYS */;
/*!40000 ALTER TABLE `picture` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-25 14:44:07
