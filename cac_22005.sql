-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.33 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla cac_22005.categorias
DROP TABLE IF EXISTS `categorias`;
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cac_22005.categorias: ~5 rows (aproximadamente)
DELETE FROM `categorias`;
INSERT INTO `categorias` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
	(1, 'Categoria 1', '2022-06-30 11:24:48', '2022-06-30 11:24:49'),
	(2, 'Categoría 2', '2022-06-30 14:30:04', '2022-06-30 14:44:52'),
	(4, 'Producto CaC', '2022-06-30 14:32:36', '2022-06-30 14:32:36'),
	(5, 'wqe', '2022-06-30 15:00:55', '2022-06-30 15:00:55'),
	(6, 'qqq', '2022-06-30 15:01:25', '2022-06-30 15:01:25'),
	(10, 'Juan', '2022-07-05 14:28:48', '2022-07-05 14:28:48');

-- Volcando estructura para tabla cac_22005.productos
DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `categoria_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_productos_categorias` (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cac_22005.productos: ~9 rows (aproximadamente)
DELETE FROM `productos`;
INSERT INTO `productos` (`id`, `nombre`, `categoria_id`) VALUES
	(8, 'Producto 2', 2),
	(10, 'Producto 3', 1),
	(12, 'Producto CaC', 1),
	(13, 'Producto Imagen', 1),
	(14, 'Producto Imagen 2', 2),
	(15, 'Producto CaC', 1),
	(16, 'Producto Sharp', 1),
	(17, 'Producto CaC', 1),
	(18, 'Producto Sharp 2', 1),
	(19, 'Producto PNG', 2);

-- Volcando estructura para tabla cac_22005.roles
DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cac_22005.roles: ~3 rows (aproximadamente)
DELETE FROM `roles`;
INSERT INTO `roles` (`id`, `nombre`) VALUES
	(1, 'usuario'),
	(2, 'admin'),
	(3, 'editor');

-- Volcando estructura para tabla cac_22005.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL DEFAULT '',
  `password` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cac_22005.usuarios: ~2 rows (aproximadamente)
DELETE FROM `usuarios`;
INSERT INTO `usuarios` (`id`, `email`, `password`) VALUES
	(6, 'x@x.com', '$2a$08$LCN5hC3LbAQTPgc.lPVd6.L0TXtGW4TmbtVQh04eMEyVDeSBGJYaO'),
	(7, 'x2@x.com', '$2a$08$BVmPiIXLAvXWERvodZZjvOtiBZXjKMxTAAM9JyMXHQvyswNQqGF6G');

-- Volcando estructura para tabla cac_22005.usuario_role
DROP TABLE IF EXISTS `usuario_role`;
CREATE TABLE IF NOT EXISTS `usuario_role` (
  `usuario_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  KEY `FK__usuarios` (`usuario_id`),
  KEY `FK__roles` (`role_id`),
  CONSTRAINT `FK__roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FK__usuarios` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cac_22005.usuario_role: ~0 rows (aproximadamente)
DELETE FROM `usuario_role`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
