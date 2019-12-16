-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mentor_on_demand
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mentor_on_demand
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mentor_on_demand` DEFAULT CHARACTER SET utf8 ;
USE `mentor_on_demand` ;

-- -----------------------------------------------------
-- Table `mentor_on_demand`.`mentor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentor_on_demand`.`mentor` (
  `mn_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `linkedin_url` VARCHAR(255) NOT NULL,
  `mn_timeslot` VARCHAR(11) NOT NULL,
  `years_of_experience` FLOAT NOT NULL,
  `mn_us_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`mn_id`),
  INDEX `FKp1vtxo79wdfwa2up6941a94np` (`mn_us_id` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mentor_on_demand`.`mentor_skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentor_on_demand`.`mentor_skill` (
  `mns_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `mns_self_rating` FLOAT NOT NULL,
  `mns_years_of_experience` FLOAT NOT NULL,
  `mns_mn_id` BIGINT(20) NOT NULL,
  `ms_skill_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`mns_id`),
  INDEX `FKsw1r751x4qfr1e9yp4h92v1d0` (`mns_mn_id` ASC),
  INDEX `FKqcj1pqkrdlvbu4nkiqvc8q3io` (`ms_skill_id` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mentor_on_demand`.`skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentor_on_demand`.`skill` (
  `skill_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `skill_name` VARCHAR(255) NOT NULL,
  `skill_toc` VARCHAR(255) NULL DEFAULT NULL,
  `skill_prerequisite` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`skill_id`),
  INDEX `FKlwmdyofh8pruxjahcf88weuuv` (`skill_prerequisite` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mentor_on_demand`.`training`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentor_on_demand`.`training` (
  `training_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `training_end_date` DATE NOT NULL,
  `training_progress` INT(11) NOT NULL,
  `training_rating` FLOAT NULL DEFAULT NULL,
  `training_start_date` DATE NOT NULL,
  `training_status` VARCHAR(20) NOT NULL,
  `training_mentor_id` BIGINT(20) NOT NULL,
  `training_skill_id` BIGINT(20) NOT NULL,
  `training_user_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`training_id`),
  INDEX `FKb9n4i7r331uhflndhjj64kgr9` (`training_mentor_id` ASC),
  INDEX `FK8dfju72gnd7gmvmjhcjyjv1p` (`training_skill_id` ASC),
  INDEX `FKbesfm9lgjyrcjrn45gkjv5lci` (`training_user_id` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mentor_on_demand`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentor_on_demand`.`user` (
  `user_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `contact_number` BIGINT(20) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `reset_password` TINYINT(1) NULL DEFAULT '0',
  `reset_password_date` DATE NULL DEFAULT NULL,
  `role` VARCHAR(255) NOT NULL,
  `user_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = MyISAM
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
