-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 28-08-2025 a las 14:58:41
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cajero`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `billete`
--

CREATE TABLE `billete` (
  `id` bigint(20) NOT NULL,
  `denominacion` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `billete`
--

INSERT INTO `billete` (`id`, `denominacion`, `cantidad`) VALUES
(1, 50000, 17),
(2, 20000, 15),
(3, 10000, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `retiro`
--

CREATE TABLE `retiro` (
  `id` bigint(20) NOT NULL,
  `monto` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `retiro`
--

INSERT INTO `retiro` (`id`, `monto`, `fecha`) VALUES
(1, 50000, '2025-08-28 05:08:16'),
(2, 50000, '2025-08-28 05:08:51'),
(3, 50000, '2025-08-28 05:48:17'),
(4, 100000, '2025-08-28 05:48:29'),
(5, 100000, '2025-08-28 05:48:54'),
(6, 100000, '2025-08-28 05:49:14'),
(7, 100000, '2025-08-28 05:49:16'),
(8, 50000, '2025-08-28 05:49:57'),
(9, 50000, '2025-08-28 05:50:00'),
(10, 50000, '2025-08-28 12:05:04'),
(11, 20000, '2025-08-28 12:11:09'),
(12, 20000, '2025-08-28 12:21:36'),
(13, 20000, '2025-08-28 12:22:09'),
(14, 120000, '2025-08-28 12:28:23'),
(15, 20000, '2025-08-28 12:39:56');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `billete`
--
ALTER TABLE `billete`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `retiro`
--
ALTER TABLE `retiro`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `billete`
--
ALTER TABLE `billete`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `retiro`
--
ALTER TABLE `retiro`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
