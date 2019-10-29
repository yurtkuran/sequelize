-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 29, 2019 at 09:10 AM
-- Server version: 5.7.22-0ubuntu0.17.10.1
-- PHP Version: 7.1.17-0ubuntu0.17.10.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tutorial_codegig`
--
CREATE DATABASE IF NOT EXISTS `tutorial_codegig` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `tutorial_codegig`;

-- --------------------------------------------------------

--
-- Table structure for table `gigs`
--

DROP TABLE IF EXISTS `gigs`;
CREATE TABLE IF NOT EXISTS `gigs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `technologies` varchar(200) NOT NULL,
  `budget` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `contact_email` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gigs`
--

INSERT INTO `gigs` (`id`, `title`, `technologies`, `budget`, `description`, `contact_email`, `createdAt`, `updatedAt`) VALUES
(1, 'looking to a react developer', 'react, javascript, html, css', '$3000', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis laboriosam tenetur cum distinctio eos fuga ratione quia ea, adipisci repellat!', 'user1@gmail.com', '2019-02-21 00:59:23', '2019-02-21 00:59:23'),
(2, 'simple wordpress website', 'wordpress, php, html, css', '$1000', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis laboriosam tenetur cum distinctio eos fuga ratione quia ea, adipisci repellat!', 'user2@gmail.com', '2019-02-21 01:02:22', '2019-02-21 01:02:22'),
(3, 'Flutter', 'flutter,', '$4500', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?', 'user3@gmail.com', '2019-02-21 20:05:36', '2019-02-21 20:05:36');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
