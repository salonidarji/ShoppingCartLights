-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2019 at 02:22 PM
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
(1, 'saloni admin', 'saloni', 'salonidarji3335@gmail.com', '1234567898', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `cart_tbl`
--

CREATE TABLE `cart_tbl` (
  `pk_cart_id` int(11) NOT NULL,
  `fk_user_email_id` varchar(50) NOT NULL,
  `fk_product_id` int(11) NOT NULL,
  `product_qty` int(11) NOT NULL,
  `is_active` int(11) NOT NULL,
  `is_delete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart_tbl`
--

INSERT INTO `cart_tbl` (`pk_cart_id`, `fk_user_email_id`, `fk_product_id`, `product_qty`, `is_active`, `is_delete`) VALUES
(38, 'salonidarji3335@gmail.com', 10, 2, 0, 1),
(39, 'salonidarji3335@gmail.com', 9, 1, 0, 1),
(40, 'salonidarji3335@gmail.com', 13, 1, 0, 1),
(41, 'salonidarji3335@gmail.com', 10, 1, 0, 1),
(42, 'salonidarji3335@gmail.com', 13, 1, 0, 1),
(43, 'salonidarji3335@gmail.com', 13, 1, 0, 1),
(44, 'salonidarji3335@gmail.com', 15, 2, 0, 1),
(45, 'salonidarji3335@gmail.com', 11, 1, 0, 1),
(46, 'salonidarji3335@gmail.com', 12, 1, 0, 1),
(47, 'salonidarji3335@gmail.com', 13, 2, 0, 1),
(48, 'salonidarji3335@gmail.com', 12, 1, 0, 1),
(49, 'salonidarji3335@gmail.com', 9, 1, 0, 1),
(50, 'salonidarji3335@gmail.com', 10, 1, 0, 1),
(51, 'salonidarji3335@gmail.com', 12, 2, 0, 1),
(52, 'salonidarji3335@gmail.com', 12, 1, 0, 1),
(53, 'salonidarji3335@gmail.com', 13, 1, 0, 1);

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
(4, 'Stripe Lights', 2, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `faq_tbl`
--

CREATE TABLE `faq_tbl` (
  `pk_faq_id` int(11) NOT NULL,
  `faq_question` varchar(500) NOT NULL,
  `faq_answer` varchar(500) DEFAULT NULL,
  `fk_user_id` varchar(50) NOT NULL,
  `is_active` int(11) NOT NULL,
  `is_delete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faq_tbl`
--

INSERT INTO `faq_tbl` (`pk_faq_id`, `faq_question`, `faq_answer`, `fk_user_id`, `is_active`, `is_delete`) VALUES
(1, 'shipping time?', 'maximum 7 working days', 'salonidarji3335@gmail.com', 1, 0),
(2, 'jhagdjhdg?', '', 'sal@gmail.com', 1, 0),
(3, 'what is the shipping charge?', '', 'salonidarji3335@gmail.com', 1, 0);

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
(2, 'warranty', 1, 0);

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
  `order_status` varchar(20) NOT NULL DEFAULT 'In Process',
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_detail_tbl`
--

INSERT INTO `order_detail_tbl` (`pk_detail_id`, `fk_order_id`, `fk_product_id`, `detail_qty`, `detail_price`, `order_status`, `is_active`, `is_delete`) VALUES
(39, 26, 15, 2, '700', 'In Process', 0, 1),
(40, 27, 11, 1, '500', 'In Process', 0, 1),
(41, 28, 12, 1, '100', 'In Process', 1, 0),
(42, 28, 13, 2, '500', 'In Process', 1, 0),
(43, 29, 12, 2, '100', 'In Process', 1, 0),
(44, 30, 12, 1, '100', 'In Process', 1, 0),
(45, 30, 13, 1, '500', 'In Process', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_tbl`
--

CREATE TABLE `order_tbl` (
  `pk_order_id` int(11) NOT NULL,
  `order_date` varchar(10) NOT NULL,
  `fk_user_id` varchar(50) NOT NULL,
  `address_name` varchar(30) NOT NULL,
  `address_mobile` varchar(13) NOT NULL,
  `address_line_1` varchar(100) NOT NULL,
  `address_line_2` varchar(100) NOT NULL,
  `address_landmark` varchar(20) NOT NULL,
  `address_pincode` varchar(10) NOT NULL,
  `address_city` varchar(20) NOT NULL,
  `payment_id` varchar(20) DEFAULT NULL,
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_tbl`
--

INSERT INTO `order_tbl` (`pk_order_id`, `order_date`, `fk_user_id`, `address_name`, `address_mobile`, `address_line_1`, `address_line_2`, `address_landmark`, `address_pincode`, `address_city`, `payment_id`, `is_active`, `is_delete`) VALUES
(26, '6/27/2019', 'salonidarji3335@gmail.com', 'office', '0987654356', 'line 1', 'line 2', 'landmark', '380013', 'ahmedabad', 'pay_CnCKVV8okJGbTT', 0, 1),
(27, '6/28/2019', 'salonidarji3335@gmail.com', 'office', '0987654356', 'line 1', 'line 2', 'landmark', '380013', 'ahmedabad', 'pay_CnCKVV8okJGbTT', 0, 1),
(28, '6/28/2019', 'salonidarji3335@gmail.com', 'office', '0987654356', 'line 1', 'line 2', 'landmark', '380013', 'ahmedabad', 'pay_CnCKVV8okJGbTT', 1, 0),
(29, '6/28/2019', 'salonidarji3335@gmail.com', 'office', '0987654356', 'line 1', 'line 2', 'landmark', '380013', 'ahmedabad', 'pay_CnCKVV8okJGbTT', 1, 0),
(30, '6/28/2019', 'salonidarji3335@gmail.com', 'office', '0987654356', 'line 1', 'line 2', 'landmark', '380013', 'ahmedabad', 'pay_CnCKVV8okJGbTT', 1, 0);

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
(3, 1, 6, 'phillips', 1, 0),
(4, 1, 7, 'phillips', 1, 0),
(5, 2, 7, '6 months', 1, 0),
(6, 1, 8, 'philips', 1, 0),
(7, 1, 9, 'philipse', 1, 0),
(8, 1, 10, 'wipro', 1, 0),
(9, 1, 11, 'philipse', 1, 0),
(10, 1, 12, 'wipro', 1, 0),
(11, 1, 13, 'wipro', 1, 0),
(12, 1, 14, 'philipse', 0, 1),
(13, 1, 15, 'bajaj', 1, 0),
(14, 1, 16, 'bajaj', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_image_tbl`
--

CREATE TABLE `product_image_tbl` (
  `pk_image_id` int(11) NOT NULL,
  `image_url` varchar(1000) NOT NULL,
  `fk_product_id` int(11) NOT NULL,
  `is_cover` int(11) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_image_tbl`
--

INSERT INTO `product_image_tbl` (`pk_image_id`, `image_url`, `fk_product_id`, `is_cover`, `is_active`, `is_delete`) VALUES
(10, '/images/rXXO2135129.jpeg', 9, 1, 1, 0),
(11, '/images/k7aWc135813.jpeg', 10, 1, 1, 0),
(12, '/images/JVJxY135398.jpeg', 11, 1, 1, 0),
(13, '/images/tqQUt135784.jpeg', 12, 1, 1, 0),
(14, '/images/kZznU135825.jpeg', 13, 1, 1, 0),
(15, '/images/7G1mn135953.jpeg', 14, 0, 0, 1),
(16, '/images/y0jcy135953.jpeg', 14, 1, 0, 1),
(17, '/images/Pwpi9135765.jpeg', 15, 0, 1, 0),
(18, '/images/BozAv135766.jpeg', 15, 1, 1, 0),
(19, '/images/Z8DiG135211.jpeg', 16, 1, 1, 0),
(20, '/images/wlLDN135211.jpeg', 16, 0, 1, 0);

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
(9, 'product1', 'product1', '1000', '800', 4, 1, 0),
(10, 'product2', 'product2', '2500', '1500', 1, 1, 0),
(11, 'product3', 'product3', '3000', '500', 2, 1, 0),
(12, 'product4', 'product4', '500', '100', 3, 1, 0),
(13, 'product5', 'product5', '2000', '500', 4, 1, 0),
(14, 'product6', 'product6', '900', '500', 3, 0, 1),
(15, 'product6', 'product6', '800', '700', 2, 1, 0),
(16, 'product7', 'product7', '700', '500', 4, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `review_tbl`
--

CREATE TABLE `review_tbl` (
  `pk_review_id` int(11) NOT NULL,
  `fk_product_id` int(11) NOT NULL,
  `fk_user_id` varchar(50) NOT NULL,
  `review_detail` varchar(200) NOT NULL,
  `is_active` int(11) NOT NULL,
  `is_delete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `review_tbl`
--

INSERT INTO `review_tbl` (`pk_review_id`, `fk_product_id`, `fk_user_id`, `review_detail`, `is_active`, `is_delete`) VALUES
(6, 10, 'salonidarji3335@gmail.com', 'good product', 1, 0),
(11, 10, 'salonidarji3335@gmail.com', 'amazing product...', 1, 0);

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
  `fk_user_id` varchar(50) NOT NULL,
  `is_default` int(11) NOT NULL DEFAULT '1',
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_address_tbl`
--

INSERT INTO `user_address_tbl` (`pk_address_id`, `address_name`, `address_mobile`, `address_line_1`, `address_line_2`, `address_landmark`, `address_pincode`, `address_city`, `fk_user_id`, `is_default`, `is_active`, `is_delete`) VALUES
(1, 'home', '0987654356', 'line 1', 'line 2', 'landmark', '380038', 'ahmedabad', 'salonidarji3335@gmail.com', 1, 1, 0),
(2, 'office', '0987654356', 'line 1', 'line 2', 'landmark', '380013', 'ahmedabad', 'salonidarji3335@gmail.com', 0, 1, 0);

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
  `verification_code` varchar(5) NOT NULL DEFAULT '0',
  `is_active` int(11) NOT NULL DEFAULT '1',
  `is_delete` int(11) NOT NULL DEFAULT '0',
  `is_verified` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`pk_user_id`, `user_name`, `user_email`, `user_mobile`, `user_password`, `verification_code`, `is_active`, `is_delete`, `is_verified`) VALUES
(41, 'saloni', 'salonidarji3335@gmail.com', '8765434567', 'saloni', '6321', 1, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wishlist_tbl`
--

CREATE TABLE `wishlist_tbl` (
  `pk_wishlist_id` int(11) NOT NULL,
  `wishlist_value` int(11) NOT NULL DEFAULT '0',
  `fk_product_id` int(11) NOT NULL,
  `fk_user_email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wishlist_tbl`
--

INSERT INTO `wishlist_tbl` (`pk_wishlist_id`, `wishlist_value`, `fk_product_id`, `fk_user_email`) VALUES
(1, 0, 11, 'salonidarji3335@gmail.com'),
(2, 0, 12, 'salonidarji3335@gmail.com'),
(3, 0, 13, 'salonidarji3335@gmail.com'),
(4, 0, 13, 'salonidarji3335@gmail.com'),
(5, 0, 15, 'salonidarji3335@gmail.com'),
(6, 0, 13, 'salonidarji3335@gmail.com'),
(7, 0, 10, 'salonidarji3335@gmail.com'),
(8, 0, 11, 'salonidarji3335@gmail.com'),
(9, 0, 12, ''),
(10, 0, 12, ''),
(11, 0, 12, ''),
(12, 0, 12, ''),
(13, 0, 12, ''),
(14, 0, 12, ''),
(15, 1, 12, ''),
(16, 0, 10, 'salonidarji3335@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_tbl`
--
ALTER TABLE `admin_tbl`
  ADD PRIMARY KEY (`pk_admin_id`);

--
-- Indexes for table `cart_tbl`
--
ALTER TABLE `cart_tbl`
  ADD PRIMARY KEY (`pk_cart_id`);

--
-- Indexes for table `category_tbl`
--
ALTER TABLE `category_tbl`
  ADD PRIMARY KEY (`pk_category_id`);

--
-- Indexes for table `faq_tbl`
--
ALTER TABLE `faq_tbl`
  ADD PRIMARY KEY (`pk_faq_id`);

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
-- Indexes for table `review_tbl`
--
ALTER TABLE `review_tbl`
  ADD PRIMARY KEY (`pk_review_id`);

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
-- Indexes for table `wishlist_tbl`
--
ALTER TABLE `wishlist_tbl`
  ADD PRIMARY KEY (`pk_wishlist_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_tbl`
--
ALTER TABLE `admin_tbl`
  MODIFY `pk_admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart_tbl`
--
ALTER TABLE `cart_tbl`
  MODIFY `pk_cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `category_tbl`
--
ALTER TABLE `category_tbl`
  MODIFY `pk_category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `faq_tbl`
--
ALTER TABLE `faq_tbl`
  MODIFY `pk_faq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `feature_tbl`
--
ALTER TABLE `feature_tbl`
  MODIFY `pk_feature_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order_detail_tbl`
--
ALTER TABLE `order_detail_tbl`
  MODIFY `pk_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `order_tbl`
--
ALTER TABLE `order_tbl`
  MODIFY `pk_order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `product_feature_tbl`
--
ALTER TABLE `product_feature_tbl`
  MODIFY `pk_product_feature_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `product_image_tbl`
--
ALTER TABLE `product_image_tbl`
  MODIFY `pk_image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `product_tbl`
--
ALTER TABLE `product_tbl`
  MODIFY `pk_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `review_tbl`
--
ALTER TABLE `review_tbl`
  MODIFY `pk_review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user_address_tbl`
--
ALTER TABLE `user_address_tbl`
  MODIFY `pk_address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_tbl`
--
ALTER TABLE `user_tbl`
  MODIFY `pk_user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `wishlist_tbl`
--
ALTER TABLE `wishlist_tbl`
  MODIFY `pk_wishlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
