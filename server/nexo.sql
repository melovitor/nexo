-- Nome do arquivo: nexo.sql

-- Criação da tabela "transaction"
CREATE TABLE IF NOT EXISTS `nexo`.`transaction` (
  `idtransaction` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `amount` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `user` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `in_status` INT NOT NULL,
  PRIMARY KEY (`idtransaction`)
) ENGINE = InnoDB
AUTO_INCREMENT = 66
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- Criação da tabela "users"
CREATE TABLE IF NOT EXISTS `nexo`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`, `name`)
) ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
