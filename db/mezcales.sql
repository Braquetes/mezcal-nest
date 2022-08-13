-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-08-2022 a las 10:34:31
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mezcal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mezcales`
--

CREATE TABLE `mezcales` (
  `id_mezcal` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `tipomezcalesIdTipoMezcal` int(11) DEFAULT NULL,
  `medidaIdMedida` int(11) DEFAULT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mezcales`
--

INSERT INTO `mezcales` (`id_mezcal`, `nombre`, `stock`, `precio`, `descripcion`, `tipomezcalesIdTipoMezcal`, `medidaIdMedida`, `img`) VALUES
(1, 'Cordón - Espadín', 10, 600, 'En nuestros tiempos, como siglos atrás, los maestros mezcaleros en Oaxaca se valen de la jícara de “bule” y del carrizo para reconocer el grado de alcohol idóneo para el disfrute del mezcal.', 3, 1, 'https://s.cornershopapp.com/product-images/416844.jpg?versionId=839CS6aOBuLy9zT01b6N56jaXGSGIlPJ'),
(2, 'Alerón - Agave Cenizo', 10, 500, 'Hecho de agave Cenizo (12 -14 años), Mezcal Alerón utiliza técnicas tradicionales que mantienen los verdaderos aromas y sabores de nuestro agave.', 2, 1, 'https://cdn.shopify.com/s/files/1/0419/3124/3684/products/Aleron-botella.png?v=1618944027'),
(3, 'Chagoya - Donají', 10, 1500, 'MEZCALES TRADICIÓN CHAGOYA son parte de una empresa familiar dedicada a la producción y exportación de mezcales artesanales y ancestrales, con orígenes en el distrito de Tlacolula, Oaxaca, México. Este linaje mezcalero, fundado en 1897, se ha consolidado ', 2, 2, 'https://images-na.ssl-images-amazon.com/images/S/stores-image-uploads-na-prod/7/AmazonStores/A1AM78C64UM0Y8/4c0a746e114d2cb1abe1d8850ab812a3.w1500.h1500._CR0%2C0%2C1500%2C1500_.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mezcales`
--
ALTER TABLE `mezcales`
  ADD PRIMARY KEY (`id_mezcal`),
  ADD KEY `FK_11742dfa1c0363d92f6e252bc76` (`tipomezcalesIdTipoMezcal`),
  ADD KEY `FK_2beac2901f00159cde8fccc7d3f` (`medidaIdMedida`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mezcales`
--
ALTER TABLE `mezcales`
  MODIFY `id_mezcal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `mezcales`
--
ALTER TABLE `mezcales`
  ADD CONSTRAINT `FK_11742dfa1c0363d92f6e252bc76` FOREIGN KEY (`tipomezcalesIdTipoMezcal`) REFERENCES `tipomezcales` (`id_tipo_mezcal`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_2beac2901f00159cde8fccc7d3f` FOREIGN KEY (`medidaIdMedida`) REFERENCES `medida` (`id_medida`) ON DELETE SET NULL ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
