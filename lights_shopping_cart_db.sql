-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2019 at 08:14 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lights_shopping_cart_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_tbl`
--

CREATE TABLE `admin_tbl` (
  `pk_admin_id` int(11) NOT NULL,
  `admin_name` varchar(25) NOT NULL,
  `admin_password` varchar(20) NOT NULL,
  `admin_email` varchar(30) NOT NULL,
  `admin_mobile` varchar(13) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_tbl`
--

INSERT INTO `admin_tbl` (`pk_admin_id`, `admin_name`, `admin_password`, `admin_email`, `admin_mobile`, `is_active`, `is_delete`) VALUES
(1, 'saloni admin', 'saloni', 'saloni@gmail.com', '1234567898', 1, 0),
(2, 'saloni admin', 'saloni', 'saloni@gmail..', '1234567898', 0, 1),
(3, 'jfgj', 'gvhjgf', 'hgdfjh@gdf.gfd', '78787', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `category_tbl`
--

CREATE TABLE `category_tbl` (
  `pk_category_id` int(11) NOT NULL,
  `category_name` varchar(25) NOT NULL,
  `fk_parent_id` int(11) NOT NULL DEFAULT '0',
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_tbl`
--

INSERT INTO `category_tbl` (`pk_category_id`, `category_name`, `fk_parent_id`, `is_active`, `is_delete`) VALUES
(1, 'wall light', 0, 1, 0),
(2, 'decoration lights', 0, 1, 0),
(3, 'Bulb', 1, 1, 0),
(4, 'Stripe Lights', 2, 1, 0),
(5, 'hgfhg', 1, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `feature_tbl`
--

CREATE TABLE `feature_tbl` (
  `pk_feature_id` int(11) NOT NULL,
  `feature_name` varchar(20) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feature_tbl`
--

INSERT INTO `feature_tbl` (`pk_feature_id`, `feature_name`, `is_active`, `is_delete`) VALUES
(1, 'brand', 1, 0),
(2, 'brhgfjgdjfghdgjhgf', 0, 1),
(3, 'warranty', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_detail_tbl`
--

CREATE TABLE `order_detail_tbl` (
  `pk_detail_id` int(11) NOT NULL,
  `fk_order_id` int(11) NOT NULL,
  `fk_product_id` int(11) NOT NULL,
  `detail_qty` int(11) NOT NULL,
  `detail_price` varchar(10) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_detail_tbl`
--

INSERT INTO `order_detail_tbl` (`pk_detail_id`, `fk_order_id`, `fk_product_id`, `detail_qty`, `detail_price`, `is_active`, `is_delete`) VALUES
(1, 1, 1, 2, '800', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_tbl`
--

CREATE TABLE `order_tbl` (
  `pk_order_id` int(11) NOT NULL,
  `order_date` varchar(10) NOT NULL,
  `fk_user_id` int(11) NOT NULL,
  `address_name` varchar(30) NOT NULL,
  `address_mobile` varchar(13) NOT NULL,
  `address_line_1` varchar(100) NOT NULL,
  `address_line_2` varchar(100) NOT NULL,
  `address_landmark` varchar(20) NOT NULL,
  `address_pincode` varchar(10) NOT NULL,
  `address_city` varchar(20) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_tbl`
--

INSERT INTO `order_tbl` (`pk_order_id`, `order_date`, `fk_user_id`, `address_name`, `address_mobile`, `address_line_1`, `address_line_2`, `address_landmark`, `address_pincode`, `address_city`, `is_active`, `is_delete`) VALUES
(1, '05/12/2019', 1, 'home', '0987654356', 'line 1', 'line 2', 'landmark', '380013', 'ahmedabad', 1, 0),
(2, '05/12/2010', 1, 'home', '0987654356', 'line 1', 'line 2', 'landmark', '380013', 'ahmedabad', 0, 1),
(3, '09-08-2019', 0, 'office', '657661111', 'gfdhgfd', 'cvj', 'gdfhgdf', '380001', 'surat', 1, 0),
(4, '09-08-2019', 0, 'office', '6576567', 'gfdhgfd', 'cvj', 'gdfhgdf', '380001', 'surat', 0, 1),
(5, '09-08-2019', 0, 'office', '657656', 'gfdhgfd', 'cvj', 'gdfhgdf', '380001', 'surat', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_feature_tbl`
--

CREATE TABLE `product_feature_tbl` (
  `pk_product_feature_id` int(11) NOT NULL,
  `fk_feature_id` int(11) NOT NULL,
  `fk_product_id` int(11) NOT NULL,
  `feature_value` varchar(20) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_feature_tbl`
--

INSERT INTO `product_feature_tbl` (`pk_product_feature_id`, `fk_feature_id`, `fk_product_id`, `feature_value`, `is_active`, `is_delete`) VALUES
(1, 1, 1, 'philips', 1, 0),
(2, 1, 1, 'fffgffff', 0, 1),
(3, 1, 1, 'Wipro', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_image_tbl`
--

CREATE TABLE `product_image_tbl` (
  `pk_image_id` int(11) NOT NULL,
  `image_url` varchar(500) NOT NULL,
  `fk_product_id` int(11) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_image_tbl`
--

INSERT INTO `product_image_tbl` (`pk_image_id`, `image_url`, `fk_product_id`, `is_active`, `is_delete`) VALUES
(11, '8071067806611597416.jpg', 5, 1, 0),
(12, '144aa06e3533a4d74e21603b07cee465.jpg', 5, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_tbl`
--

CREATE TABLE `product_tbl` (
  `pk_product_id` int(11) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `product_desc` varchar(500) NOT NULL,
  `product_price` varchar(10) NOT NULL,
  `product_sale_price` varchar(10) NOT NULL,
  `fk_category_id` int(11) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_tbl`
--

INSERT INTO `product_tbl` (`pk_product_id`, `product_name`, `product_desc`, `product_price`, `product_sale_price`, `fk_category_id`, `is_active`, `is_delete`) VALUES
(1, 'light', 'description of product here', '1000', '800', 1, 1, 0),
(2, 'light', 'descriptiofgjhgfhdsgfhkds', '1000', '800', 1, 0, 1),
(4, 'hfg', 'jh', '87687', '1', 0, 0, 1),
(5, 'Led Light', 'don\'t harm your eyes ', '2000', '999', 1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_address_tbl`
--

CREATE TABLE `user_address_tbl` (
  `pk_address_id` int(11) NOT NULL,
  `address_name` varchar(20) NOT NULL,
  `address_mobile` varchar(13) NOT NULL,
  `address_line_1` varchar(100) NOT NULL,
  `address_line_2` varchar(100) NOT NULL,
  `address_landmark` varchar(100) NOT NULL,
  `address_pincode` varchar(10) NOT NULL,
  `address_city` varchar(20) NOT NULL,
  `fk_user_id` int(11) NOT NULL,
  `is_default` int(11) NOT NULL DEFAULT '1',
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_address_tbl`
--

INSERT INTO `user_address_tbl` (`pk_address_id`, `address_name`, `address_mobile`, `address_line_1`, `address_line_2`, `address_landmark`, `address_pincode`, `address_city`, `fk_user_id`, `is_default`, `is_active`, `is_delete`) VALUES
(1, 'home', '0987654356', 'line 1', 'line 2', 'landmark', '380038', 'ahmedabad', 1, 1, 1, 0),
(2, 'home', '0987654356', 'line 1', 'line 2', 'landmark', '380013', 'ahmedabad', 1, 1, 0, 1),
(3, 'jdfhgd', '78686', 'gd', 'hgdfh', 'dfdgf', '8787', 'ghfdshg', 1, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE `user_tbl` (
  `pk_user_id` int(11) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_mobile` varchar(13) NOT NULL,
  `user_password` varchar(30) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`pk_user_id`, `user_name`, `user_email`, `user_mobile`, `user_password`, `is_active`, `is_delete`) VALUES
(1, 'saloni user', 'saloniuser@gmail.com', '09876543212', 'saloni', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_tbl`
--
ALTER TABLE `admin_tbl`
  ADD PRIMARY KEY (`pk_admin_id`);

--
-- Indexes for table `category_tbl`
--
ALTER TABLE `category_tbl`
  ADD PRIMARY KEY (`pk_category_id`);

--
-- Indexes for table `feature_tbl`
--
ALTER TABLE `feature_tbl`
  ADD PRIMARY KEY (`pk_feature_id`);

--
-- Indexes for table `order_detail_tbl`
--
ALTER TABLE `order_detail_tbl`
  ADD PRIMARY KEY (`pk_detail_id`);

--
-- Indexes for table `order_tbl`
--
ALTER TABLE `order_tbl`
  ADD PRIMARY KEY (`pk_order_id`);

--
-- Indexes for table `product_feature_tbl`
--
ALTER TABLE `product_feature_tbl`
  ADD PRIMARY KEY (`pk_product_feature_id`);

--
-- Indexes for table `product_image_tbl`
--
ALTER TABLE `product_image_tbl`
  ADD PRIMARY KEY (`pk_image_id`);

--
-- Indexes for table `product_tbl`
--
ALTER TABLE `product_tbl`
  ADD PRIMARY KEY (`pk_product_id`);

--
-- Indexes for table `user_address_tbl`
--
ALTER TABLE `user_address_tbl`
  ADD PRIMARY KEY (`pk_address_id`);

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
  ADD PRIMARY KEY (`pk_user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_tbl`
--
ALTER TABLE `admin_tbl`
  MODIFY `pk_admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category_tbl`
--
ALTER TABLE `category_tbl`
  MODIFY `pk_category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `feature_tbl`
--
ALTER TABLE `feature_tbl`
  MODIFY `pk_feature_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order_detail_tbl`
--
ALTER TABLE `order_detail_tbl`
  MODIFY `pk_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_tbl`
--
ALTER TABLE `order_tbl`
  MODIFY `pk_order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product_feature_tbl`
--
ALTER TABLE `product_feature_tbl`
  MODIFY `pk_product_feature_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_image_tbl`
--
ALTER TABLE `product_image_tbl`
  MODIFY `pk_image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product_tbl`
--
ALTER TABLE `product_tbl`
  MODIFY `pk_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_address_tbl`
--
ALTER TABLE `user_address_tbl`
  MODIFY `pk_address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_tbl`
--
ALTER TABLE `user_tbl`
  MODIFY `pk_user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
