-- MySQL Script generated by MySQL Workbench
-- mar 11 gen 2022, 15:53:23
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema divetimp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema divetimp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `divetimp` ;
USE `divetimp` ;

-- -----------------------------------------------------
-- Table `divetimp`.`Tasks`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `divetimp`.`Tasks` ;

CREATE TABLE IF NOT EXISTS `divetimp`.`Tasks` (
  `t_id` INT NOT NULL,
  `t_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`t_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;