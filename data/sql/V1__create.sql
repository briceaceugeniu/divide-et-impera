-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 13, 2022 at 08:54 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database (schema): `divetimp`
--
CREATE SCHEMA IF NOT EXISTS `divetimp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `divetimp`;

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`title` tinytext NOT NULL,
`description` text,
`progress` tinyint(4) NOT NULL DEFAULT '0' COMMENT 'measurable in percentages',
`reward` varchar(512) NOT NULL,
`ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
`owner` int(11) NOT NULL,
`parent` int(11) NOT NULL,
PRIMARY KEY (`id`),
KEY `owner` (`owner`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `task`
--
START TRANSACTION;

INSERT INTO `task` (`id`, `title`, `description`, `progress`, `reward`, `ts`, `owner`, `parent`) VALUES
 (1, 'Marathon', 'Run the Marathon in less then 6 Hours', 0, 'Coffe', '2022-01-13 18:37:28', 1, 0),
 (2, 'Buy shoues', 'just buy some cool running shoes', 0, 'schulter klopfen', '2022-01-13 19:32:00', 1, 1),
 (3, 'Run 1 km', 'Go out and run!', 0, 'big fat burger', '2022-01-13 19:33:46', 1, 1),
 (4, 'Get some money', 'Ask mom for some cash', 0, 'nothing', '2022-01-13 19:35:52', 1, 2),
 (5, 'Go to store', NULL, 0, 'shoes duhh', '2022-01-13 19:35:52', 1, 2),
 (6, 'Get freecodecamp certification', 'Complete all lessons and chalanges and the final project', 0, 'tea', '2022-01-13 18:37:28', 1, 0),
 (7, 'Sign up to freecodecamp', NULL, 0, 'nothing', '2022-01-13 19:39:52', 1, 6),
 (8, 'Complete first section HTML + CSS', NULL, 0, 'coffe', '2022-01-13 19:43:20', 1, 6),
 (9, 'complete html section', 'All exercises', 0, 'nothing', '2022-01-13 19:43:20', 1, 8),
 (10, 'complete css section', NULL, 0, 'coffe', '2022-01-13 19:43:20', 1, 8);

COMMIT;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(255) NOT NULL,
`email` varchar(255) NOT NULL,
`password` varchar(255) NOT NULL,
`creation_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
`last_login` datetime NOT NULL,
`ip` varchar(255) DEFAULT NULL,
`setting_pref` json DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--
START TRANSACTION;

INSERT INTO `user` (`id`, `name`, `email`, `password`, `creation_ts`, `last_login`, `ip`, `setting_pref`) VALUES
(1, 'Boris', 'boris@foo.com', SHA1(CONCAT('boris@foo.com', 'SuperSecretPass')), '2022-01-13 20:04:17', '2022-01-13 01:06:05', NULL, NULL),
(2, 'Donald', 'donald@disney.eu', SHA1(CONCAT('donald@disney.eu', 'qwerty')), '2022-01-13 20:16:24', '2022-01-13 04:00:00', NULL, NULL);

COMMIT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `task`
--
ALTER TABLE `task`
    ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `user` (`id`) ON DELETE RESTRICT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
