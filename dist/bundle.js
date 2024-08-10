/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function createHomePage() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Welcome to Our Restaurant\";\r\n\r\n  const image = document.createElement(\"img\");\r\n  image.src = \"your-image-path.jpg\";\r\n  image.alt = \"Restaurant Image\";\r\n\r\n  const description = document.createElement(\"p\");\r\n  description.textContent = \"Enjoy our delicious meals in a cozy environment.\";\r\n\r\n  content.appendChild(headline);\r\n  content.appendChild(image);\r\n  content.appendChild(description);\r\n}\r\n\r\ncreateHomePage();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;