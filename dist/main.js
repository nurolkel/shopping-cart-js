/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* import fonts */\r\n\r\n/* VARIABLES */\r\n:root {\r\n  --bg-color: #fff;\r\n  --link-color: #000;\r\n  --link-size: 1.1rem;\r\n  --right-side-bg-color: 81, 187, 254;\r\n}\r\n\r\n/* General CSS */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: Rubik;\r\n}\r\n\r\nhtml {\r\n  font-size: 16px;\r\n  overflow-x: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n/* APP CONTAINER */\r\n.app-container {\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n/* APP BG */\r\n.app-bg {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  z-index: -1;\r\n}\r\n.app-bg .left-side {\r\n  background-color: rgb(255, 255, 255);\r\n  width: 75%;\r\n  height: 100%;\r\n}\r\n.app-bg .right-side {\r\n  background-color: rgb(var(--right-side-bg-color));\r\n  width: 25%;\r\n  height: 100%;\r\n}\r\n\r\n/* HEADER */\r\nheader {\r\n  width: 100%;\r\n  height: 100px;\r\n\r\n  padding: 30px 10%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  z-index: 99;\r\n}\r\nheader nav ul {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\nheader nav ul li {\r\n  list-style: none;\r\n  margin: 0 10px;\r\n  padding: 5px 5px;\r\n  border-radius: 15px;\r\n}\r\nheader nav ul li.active {\r\n  border: 1px solid #000;\r\n}\r\nheader nav ul li a {\r\n  font-size: var(--link-size);\r\n  display: flex;\r\n  align-items: center;\r\n  height: 32px;\r\n}\r\nheader nav ul li.btn {\r\n  background-color: rgba(var(--right-side-bg-color), 0.4);\r\n  border: 1px solid rgb(var(--right-side-bg-color));\r\n}\r\nheader nav ul li.btn img {\r\n  width: 32;\r\n  height: 32px;\r\n}\r\nheader nav ul li.home a {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\nheader nav ul li.home a img {\r\n  margin-right: 5px;\r\n}\r\n/* HEADER -> SHOOPING BAG */\r\n.shopping-bag {\r\n  padding: 10px 5px;\r\n}\r\n.shopping-bag a {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.shopping-bag a img {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.shopping-bag .total-items-in-cart {\r\n  margin-left: 10px;\r\n  padding: 5px;\r\n  background-color: rgb(242, 255, 58);\r\n  border-radius: 5px;\r\n}\r\n/* MAIN */\r\nmain {\r\n  width: 100%;\r\n  background-color: royalblue;\r\n  position: relative;\r\n  top: 100px;\r\n}\r\nmain .products-preview {\r\n  width: 60%;\r\n  height: calc(100vh - 100px);\r\n  position: absolute;\r\n  left: 0;\r\n}\r\nmain .model {\r\n  width: 40%;\r\n  height: calc(100vh - 100px);\r\n  position: absolute;\r\n  right: 0;\r\n  z-index: -1;\r\n}\r\n/* PRODUCTS */\r\n.products-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n.product {\r\n  width: 300px;\r\n  border: 1px solid rgba(var(--right-side-bg-color), 0.4);\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n}\r\n.product img {\r\n  width: 100%;\r\n}\r\n/* MORE DETAILS */\r\n.more-details {\r\n  position: absolute;\r\n  bottom: 80px;\r\n  left: 50px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.more-details .see-more-btn {\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  transform: rotate(-90deg);\r\n\r\n  font-size: 1.2rem;\r\n}\r\n.see-more-btn img {\r\n  width: 80px;\r\n  margin-right: 20px;\r\n}\r\n.more-details .description {\r\n}\r\n.more-details .description small {\r\n  color: rgb(149, 149, 149);\r\n}\r\n.more-details .description h1 {\r\n  margin: 10px 0;\r\n}\r\n.more-details .description h1 small {\r\n  color: #000;\r\n}\r\n/* MODEL */\r\n.model {\r\n  display: flex;\r\n  justify-content: right;\r\n  align-items: center;\r\n}\r\n.model .model-img {\r\n  height: 100vh;\r\n  position: absolute;\r\n  left: 35%;\r\n  transform: translate(-50%);\r\n  top: -100px;\r\n}\r\n.model .product {\r\n  width: 300px;\r\n  border: 1px solid rgba(255, 255, 255, 0.4);\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n}\r\n.model .product img {\r\n  width: 100%;\r\n}\r\n/* products list */\r\n.products-list {\r\n  width: 100vw;\r\n  height: 100vh;\r\n\r\n  padding-top: 100px;\r\n\r\n  display: flex;\r\n}\r\n\r\n/* PRODUCTS */\r\n.products {\r\n  height: 100%;\r\n  width: 75%;\r\n\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-template-columns: repeat(3, 3fr);\r\n}\r\n.products img {\r\n  width: 200px;\r\n  /* filter: drop-shadow(30px 10px 4px #ddd); */\r\n}\r\n.products .item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.products .item .item-container {\r\n  width: 250px;\r\n  height: 90%;\r\n  background-color: #000;\r\n\r\n  border-radius: 25px;\r\n\r\n  position: relative;\r\n}\r\n.products .item .item-container .item-img {\r\n  width: 100%;\r\n  height: 60%;\r\n\r\n  background-color: white;\r\n\r\n  border: 1px solid #000;\r\n  border-radius: 25px 25px 0 0;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.products .item .item-container .desc {\r\n  width: 100%;\r\n  color: #fff;\r\n\r\n  padding: 10px;\r\n}\r\n.products .item .item-container .add-to-cart {\r\n  background-color: rgba(var(--right-side-bg-color), 0.7);\r\n  /* background-color: rgb(242, 255, 58); */\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n\r\n  padding: 5px;\r\n\r\n  border-radius: 50%;\r\n\r\n  cursor: pointer;\r\n}\r\n.products .item .item-container .add-to-wishlist {\r\n  background-color: rgba(255, 21, 21, 0.7);\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 60px;\r\n\r\n  padding: 5px;\r\n\r\n  border-radius: 50%;\r\n\r\n  cursor: pointer;\r\n}\r\n.products .item .item-container .add-to-cart img {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.products .item .item-container .add-to-wishlist img {\r\n  width: 32px;\r\n  height: 32px;\r\n\r\n  padding: 5px;\r\n}\r\n/* CART */\r\n.cart {\r\n  height: 100%;\r\n  width: 25%;\r\n\r\n  position: relative;\r\n}\r\n/* cart header */\r\n.cart-header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 10px 0;\r\n}\r\n/* cart items */\r\n.cart-items {\r\n  max-height: calc(100vh - 247px);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n/* cart item */\r\n.cart-item {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 10px 0;\r\n}\r\n.cart-item div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n/* item info */\r\n.cart-item .item-info {\r\n  flex: 1;\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n\r\n  border-radius: 0 10px 10px 0;\r\n\r\n  padding: 10px;\r\n}\r\n.cart-item .item-info:hover {\r\n  background-color: rgba(255, 0, 0, 0.6);\r\n  cursor: pointer;\r\n}\r\n.cart-item .item-info img {\r\n  width: 75px;\r\n}\r\n/* unit price */\r\n.cart-item .unit-price {\r\n  flex: 1;\r\n  font-size: 1.2rem;\r\n}\r\n/* units */\r\n.cart-item .units {\r\n  flex: 1;\r\n}\r\n.cart-item .units .number {\r\n  margin: 0 10px;\r\n\r\n  font-size: 1.2rem;\r\n}\r\n.cart-item .units .btn {\r\n  width: 20px;\r\n  height: 20px;\r\n\r\n  background-color: rgb(242, 255, 58);\r\n\r\n  border-radius: 50%;\r\n\r\n  font-weight: bold;\r\n\r\n  cursor: pointer;\r\n\r\n  -webkit-user-select: none; /* Chrome all / Safari all */\r\n  -moz-user-select: none; /* Firefox all */\r\n  -ms-user-select: none; /* IE 10+ */\r\n}\r\n\r\n/* cart footer */\r\n.cart-footer {\r\n  width: 100%;\r\n  background-color: rgb(255, 21, 21);\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n\r\n  border-left: 1px solid rgb(var(--right-side-bg-color));\r\n}\r\n.cart-footer div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  padding: 15px 0;\r\n\r\n  font-size: 1.3rem;\r\n}\r\n.cart-footer .subtotal {\r\n  background-color: white;\r\n}\r\n.cart-footer .checkout {\r\n  background-color: rgb(242, 255, 58);\r\n\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./shoppingCart/style.css"],"names":[],"mappings":"AAAA,iBAAiB;;AAGjB,cAAc;AACd;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA,gBAAgB;AAChB;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA,kBAAkB;AAClB;EACE,YAAY;EACZ,aAAa;AACf;;AAEA,WAAW;AACX;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,aAAa;EACb,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,UAAU;EACV,YAAY;AACd;AACA;EACE,iDAAiD;EACjD,UAAU;EACV,YAAY;AACd;;AAEA,WAAW;AACX;EACE,WAAW;EACX,aAAa;;EAEb,iBAAiB;EACjB,aAAa;EACb,8BAA8B;;EAE9B,eAAe;EACf,MAAM;EACN,OAAO;;EAEP,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,cAAc;EACd,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,uDAAuD;EACvD,iDAAiD;AACnD;AACA;EACE,SAAS;EACT,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA,2BAA2B;AAC3B;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,mCAAmC;EACnC,kBAAkB;AACpB;AACA,SAAS;AACT;EACE,WAAW;EACX,2BAA2B;EAC3B,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,UAAU;EACV,2BAA2B;EAC3B,kBAAkB;EAClB,OAAO;AACT;AACA;EACE,UAAU;EACV,2BAA2B;EAC3B,kBAAkB;EAClB,QAAQ;EACR,WAAW;A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","sourcesContent":["/* import fonts */\r\n@import url(\"https://fonts.googleapis.com/css2?family=Rubik&display=swap\");\r\n\r\n/* VARIABLES */\r\n:root {\r\n  --bg-color: #fff;\r\n  --link-color: #000;\r\n  --link-size: 1.1rem;\r\n  --right-side-bg-color: 81, 187, 254;\r\n}\r\n\r\n/* General CSS */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: Rubik;\r\n}\r\n\r\nhtml {\r\n  font-size: 16px;\r\n  overflow-x: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n/* APP CONTAINER */\r\n.app-container {\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n/* APP BG */\r\n.app-bg {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  z-index: -1;\r\n}\r\n.app-bg .left-side {\r\n  background-color: rgb(255, 255, 255);\r\n  width: 75%;\r\n  height: 100%;\r\n}\r\n.app-bg .right-side {\r\n  background-color: rgb(var(--right-side-bg-color));\r\n  width: 25%;\r\n  height: 100%;\r\n}\r\n\r\n/* HEADER */\r\nheader {\r\n  width: 100%;\r\n  height: 100px;\r\n\r\n  padding: 30px 10%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  z-index: 99;\r\n}\r\nheader nav ul {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\nheader nav ul li {\r\n  list-style: none;\r\n  margin: 0 10px;\r\n  padding: 5px 5px;\r\n  border-radius: 15px;\r\n}\r\nheader nav ul li.active {\r\n  border: 1px solid #000;\r\n}\r\nheader nav ul li a {\r\n  font-size: var(--link-size);\r\n  display: flex;\r\n  align-items: center;\r\n  height: 32px;\r\n}\r\nheader nav ul li.btn {\r\n  background-color: rgba(var(--right-side-bg-color), 0.4);\r\n  border: 1px solid rgb(var(--right-side-bg-color));\r\n}\r\nheader nav ul li.btn img {\r\n  width: 32;\r\n  height: 32px;\r\n}\r\nheader nav ul li.home a {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\nheader nav ul li.home a img {\r\n  margin-right: 5px;\r\n}\r\n/* HEADER -> SHOOPING BAG */\r\n.shopping-bag {\r\n  padding: 10px 5px;\r\n}\r\n.shopping-bag a {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.shopping-bag a img {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.shopping-bag .total-items-in-cart {\r\n  margin-left: 10px;\r\n  padding: 5px;\r\n  background-color: rgb(242, 255, 58);\r\n  border-radius: 5px;\r\n}\r\n/* MAIN */\r\nmain {\r\n  width: 100%;\r\n  background-color: royalblue;\r\n  position: relative;\r\n  top: 100px;\r\n}\r\nmain .products-preview {\r\n  width: 60%;\r\n  height: calc(100vh - 100px);\r\n  position: absolute;\r\n  left: 0;\r\n}\r\nmain .model {\r\n  width: 40%;\r\n  height: calc(100vh - 100px);\r\n  position: absolute;\r\n  right: 0;\r\n  z-index: -1;\r\n}\r\n/* PRODUCTS */\r\n.products-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n.product {\r\n  width: 300px;\r\n  border: 1px solid rgba(var(--right-side-bg-color), 0.4);\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n}\r\n.product img {\r\n  width: 100%;\r\n}\r\n/* MORE DETAILS */\r\n.more-details {\r\n  position: absolute;\r\n  bottom: 80px;\r\n  left: 50px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.more-details .see-more-btn {\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  transform: rotate(-90deg);\r\n\r\n  font-size: 1.2rem;\r\n}\r\n.see-more-btn img {\r\n  width: 80px;\r\n  margin-right: 20px;\r\n}\r\n.more-details .description {\r\n}\r\n.more-details .description small {\r\n  color: rgb(149, 149, 149);\r\n}\r\n.more-details .description h1 {\r\n  margin: 10px 0;\r\n}\r\n.more-details .description h1 small {\r\n  color: #000;\r\n}\r\n/* MODEL */\r\n.model {\r\n  display: flex;\r\n  justify-content: right;\r\n  align-items: center;\r\n}\r\n.model .model-img {\r\n  height: 100vh;\r\n  position: absolute;\r\n  left: 35%;\r\n  transform: translate(-50%);\r\n  top: -100px;\r\n}\r\n.model .product {\r\n  width: 300px;\r\n  border: 1px solid rgba(255, 255, 255, 0.4);\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n}\r\n.model .product img {\r\n  width: 100%;\r\n}\r\n/* products list */\r\n.products-list {\r\n  width: 100vw;\r\n  height: 100vh;\r\n\r\n  padding-top: 100px;\r\n\r\n  display: flex;\r\n}\r\n\r\n/* PRODUCTS */\r\n.products {\r\n  height: 100%;\r\n  width: 75%;\r\n\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-template-columns: repeat(3, 3fr);\r\n}\r\n.products img {\r\n  width: 200px;\r\n  /* filter: drop-shadow(30px 10px 4px #ddd); */\r\n}\r\n.products .item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.products .item .item-container {\r\n  width: 250px;\r\n  height: 90%;\r\n  background-color: #000;\r\n\r\n  border-radius: 25px;\r\n\r\n  position: relative;\r\n}\r\n.products .item .item-container .item-img {\r\n  width: 100%;\r\n  height: 60%;\r\n\r\n  background-color: white;\r\n\r\n  border: 1px solid #000;\r\n  border-radius: 25px 25px 0 0;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.products .item .item-container .desc {\r\n  width: 100%;\r\n  color: #fff;\r\n\r\n  padding: 10px;\r\n}\r\n.products .item .item-container .add-to-cart {\r\n  background-color: rgba(var(--right-side-bg-color), 0.7);\r\n  /* background-color: rgb(242, 255, 58); */\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n\r\n  padding: 5px;\r\n\r\n  border-radius: 50%;\r\n\r\n  cursor: pointer;\r\n}\r\n.products .item .item-container .add-to-wishlist {\r\n  background-color: rgba(255, 21, 21, 0.7);\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 60px;\r\n\r\n  padding: 5px;\r\n\r\n  border-radius: 50%;\r\n\r\n  cursor: pointer;\r\n}\r\n.products .item .item-container .add-to-cart img {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.products .item .item-container .add-to-wishlist img {\r\n  width: 32px;\r\n  height: 32px;\r\n\r\n  padding: 5px;\r\n}\r\n/* CART */\r\n.cart {\r\n  height: 100%;\r\n  width: 25%;\r\n\r\n  position: relative;\r\n}\r\n/* cart header */\r\n.cart-header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 10px 0;\r\n}\r\n/* cart items */\r\n.cart-items {\r\n  max-height: calc(100vh - 247px);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n/* cart item */\r\n.cart-item {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 10px 0;\r\n}\r\n.cart-item div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n/* item info */\r\n.cart-item .item-info {\r\n  flex: 1;\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n\r\n  border-radius: 0 10px 10px 0;\r\n\r\n  padding: 10px;\r\n}\r\n.cart-item .item-info:hover {\r\n  background-color: rgba(255, 0, 0, 0.6);\r\n  cursor: pointer;\r\n}\r\n.cart-item .item-info img {\r\n  width: 75px;\r\n}\r\n/* unit price */\r\n.cart-item .unit-price {\r\n  flex: 1;\r\n  font-size: 1.2rem;\r\n}\r\n/* units */\r\n.cart-item .units {\r\n  flex: 1;\r\n}\r\n.cart-item .units .number {\r\n  margin: 0 10px;\r\n\r\n  font-size: 1.2rem;\r\n}\r\n.cart-item .units .btn {\r\n  width: 20px;\r\n  height: 20px;\r\n\r\n  background-color: rgb(242, 255, 58);\r\n\r\n  border-radius: 50%;\r\n\r\n  font-weight: bold;\r\n\r\n  cursor: pointer;\r\n\r\n  -webkit-user-select: none; /* Chrome all / Safari all */\r\n  -moz-user-select: none; /* Firefox all */\r\n  -ms-user-select: none; /* IE 10+ */\r\n}\r\n\r\n/* cart footer */\r\n.cart-footer {\r\n  width: 100%;\r\n  background-color: rgb(255, 21, 21);\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n\r\n  border-left: 1px solid rgb(var(--right-side-bg-color));\r\n}\r\n.cart-footer div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  padding: 15px 0;\r\n\r\n  font-size: 1.3rem;\r\n}\r\n.cart-footer .subtotal {\r\n  background-color: white;\r\n}\r\n.cart-footer .checkout {\r\n  background-color: rgb(242, 255, 58);\r\n\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 537:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./shoppingCart/products.js
var products_products = [{
  id: 0,
  name: "T-shirt 1",
  price: 29.99,
  instock: 100,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
  imgSrc: "t1.png"
}, {
  id: 1,
  name: "T-shirt 2",
  price: 24.99,
  instock: 43,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
  imgSrc: "t2.png"
}, {
  id: 2,
  name: "T-shirt 3",
  price: 19.99,
  instock: 10,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
  imgSrc: "t3.png"
}, {
  id: 3,
  name: "T-shirt 4",
  price: 25.99,
  instock: 5,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
  imgSrc: "t4.png"
}, {
  id: 4,
  name: "T-shirt 5",
  price: 29.99,
  instock: 4,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
  imgSrc: "t5.png"
}, {
  id: 5,
  name: "T-shirt 6",
  price: 39.99,
  instock: 40,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
  imgSrc: "t6.png"
}];
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./shoppingCart/style.css
var style = __webpack_require__(540);
;// CONCATENATED MODULE: ./shoppingCart/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const shoppingCart_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./shoppingCart/icons/bag-plus.png
const bag_plus_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAACV0lEQVR42u2ZsWrbUBSGPxsbIjrUIRArYzq1UyFxM5ika0tSKH2BPkDnbK2hDxBInqFDx3QKtGuhgw1ylyzuFhqCDIViaJHrIepyuIQI6epax8JO8h3w9XB07q/7n3sWVZiOVZ7QYpMW0CegT5eQkqjRYUJ8LSZ0qFECj+gRp8R3HjNjXhMRZ8SEN7N9e7M9A97zgjV8dnnHD4yE2Z1CzRz+JYd4XMXjiEtjRI2Z0DHb7wJJ9oyEDuizajr/kDSOjA0+6uwZ7z3S8EwvvCQnVfLSkvUjEWlEfJB/G/oCNmUNyKJvstW5kMNdIwtfsi7ISYW8xOYJhTyLBTrcCSgqYIeAGBMgxMmw5gXs4MwpsWKcut6CBr/RpcHIxYIm2vgwjYBvVCQQKpmRzAtMxakEDClKOJ0AX03AsIAFOgKKWRDqWbBgJ5DsgZ782pA8Sw9YOZMJ9gCEbbp02cZCIu+hVDrDibE8do+iLEulMQ405KE/aPBPqt239IB2C9q6oHwBTXcBYbkC3AfxZ3E3m3CBLbghAkLce+BmXcNwrq9h1iD+m3LxbJFknD6MqzYDdLtAQYC2CTVHAQFX2WIZgC9aAuyX8O21jngGwHOyCefYgrkWEKJF6CbAv1XX0CJA2wKXQRyhSZQ2jKsu76/fBeULaC6AAE/WXyhiqnl2AT9lXUGTFVPdyrr06zkeWnicS9V1rNQZSfIBWhxIxRF1sLNPLHFMmyWKsESbY1Nvn1zUGRCjHwPq5KTNUH37IW0caHKiuv0JTfdPNq94yhYbhbpgTJ8eX/mUlvAfDbHfpjpIYSMAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./shoppingCart/icons/bag.png
const bag_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAACQ0lEQVR42u2Zz2oTURTGfwkJdFBspNCZLutKV0IbXYTWB2gF8QV8ANddGvABCu0zuHBZV30BwUUCiZtu4q5YygQECSiJWXTcHM7Ccf7cmTMNafs7kJvFued+uee7Z5MaxVjnGW22aQNDBgzpEXJNNOgyJ/on5nRpQPU8oU+UEF95SsW8YUqUEnPeVvvr9XhGvOclGwTs8Y5vqITqbqGhl3/FER6A4nHMlTaiQSV09fg9/se+SuiCPevq/COSONY2BJizr733SMJTL7wiJ3Xy0pb1I1OSmPJBvm3ZC9iWdUAaQ80251Iud4M0Asm6JCc18hLpDos8pU5l3AkoK2CXAREaIETxyMwbsIszZ0SGceb6Clr8xJYWE5cW+FgTQBEBX6hJINRSI5430IqFBIwpS1hMQGAmYFywBXYCyrUgtGvBkt1A3AN9+cxA8+IecOJcJtgjEHbo0WOHdOJ5j6XSOU7MZNs9yvJQKs1woCWbfmHBH6m2muoBewvGXbBoAb67gHBRAgLTGwiXuAU3REBYwAM36xnqDbgP4vsYoHN15rrhN1bMkodxPasBti5YtAB/SQQE5gLCuxYUExBiRejogVv1DNPm1gOsWNVh7DCIp1gyTRrG9fQG2Ltg0QL8JRDgyfoDQ7Saly3gu6xrWLKm1TPZFL9e4GGFx4VU3SSTJhNJPsSKQ6k4oUkODogkTuiwQhlW6HCi9Q7IRZMREfYxoklOOozNjx/TwQGfU9PjT/Hd/7J5zQues1XKBTOG9PnMp6SEvzf/0sLuOwucAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./shoppingCart/icons/filter.png
const filter_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAB5UlEQVR42u2YL4yDMBhHn6tETiJPIieRk8iTyEnkJA6JnEQikcjKk5MnT04iZzlD1jRQmobjSy7h/dxC87XrHx7l4ODgwElETo1GU5NzQpiUJyMmAzmC3BgX0iFEyujIFQEins4OvIjZncKa+Tu11aEKu7NXyoCcwU+DKR9PZR7v33qr/A9jYAq8mGI1TOSmU/Z/FZwBL2ZUJUxkmFVgKBmD88JL9374gZpNyxeGhFdwB9qwM6AnJZ3Km2kxXNBBqYnw8rE6rgvIn4MmDUJ8LZb/IUIIRbUw+ghRzjQ8pt3QcOEfcKFFo+n4RCFMNvOHAiHch/IdIT4ZHSkRQK36wwnCiblROlNwCvCHPtwHMu8rZiDB0Dr8YYsPeNP4/GGjD3jT+fxhiw9UjN7kPn/Y4gNwQ68mtzu86g9Pnw9sJ15dtGcEqFfWiggKvVj+QYwQivusfC/vD3eGaau1ZOxExJUejabhjDj1bJYTxIjoF4/WDCE6RkcSBEgZndF42e4D39b3QUVjnX+pu/3f+0CHAuCMea6Ytd/RB5KFVdHO2u/oA7FxIbcf7OkDt4XLrMrXfrsPDNZFVUpmfcBm7vbbfcB/H/REsTtqZXFliJAwOAxZjJhvx74WQ5HTv2e+4oODg4ODzfwCzI+VnYlqUR4AAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./shoppingCart/icons/heart.png
const heart_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAA8ElEQVR42s3Mv0pCcRjG8QeFGuJ0FbVFQ+01l4sQXUB0H1FtNdRNFEHg7iIcRKfjIC5OIq46in9w8OsRwRc5nMH3t/h5x5fvo0PCLd/EdEn4oUxRMhQp80tCl5gvbrLxJQ12DbjbfksM2FXnQoYSY7KWvCjFG0uyxtxrg2sm5HnimTwTriRRoEO+eXr52hTEIyEexD8h/kSfED0xI8RUjAgxFC1CJOKdEK/inAVeC84k8YnXh9Y4oopHjWNtENFkX00iGU6I98xPZWzCmduEO7cJd24T7twm3LlNuHObcOc24c5twp3bhOUuRFTSi3TQVvTn1AfHPmpFAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./shoppingCart/icons/home.png
const home_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAADI0lEQVR42u2YS0hUURzGf2Oa45TmKygkcpGWGC2KKCMiaCWJ2kYrFKGioDa9xEdBRpBN7cxtuRDtNeqYrtoUaA/aBRG0iNGwxp4LaVBHx9tQw+Ecuckd594TlL//6v7n3vN99/XNOZdFkUIp1xlmlBA/GGUIL6Uko4VVXGQMw6TGuEAGKlmciFYmtlHJByFobqICBNmM/OoGyMIGPHRgWKgOPPzmqOgdIWEKeIVhsd5QDECL6LSQIFVMKBLTdFFNPml4yOcg3Uwrv09QZZ+B5bRhKNVDHvPJowd1rzau2mFgPS+UYUPU8SfqCKnXKXED+/ikDPmWLSzEJl7L+ydmYBktRJRh+iy80Su5Y4+B1TxShpihAascZzpRA3tQA+c9JcTDNt4t3oCLRmaUwwfJJl6yGZRGOB/PgQOK+CzNuFgMLppiJxJiAxbZTkCRD7KXRNhJN53swCKnmFLkn7AWe9lKPftxmefdbUV8jlaSsZfK2C3xkQYqKQwq8t8ow36ei/Ef40bhliL/knyc4JmkcReJGkW+nVScoUJJ1mPEyOSLdOdP4ySHpIT5Ti4AXJFcncRpaiW1VgA3n0VjAB3cE3pfcUOZ9O+9Dh2sYVJolkG72PCjC5/QvAlPxUY1uqgSmsNIM55idLFZaI4jpX8GusgQmlNgiLLOimjNxxMt6wjV+A3k0MdstHrJkaZvA0Si1U+u8wZ6pdUBMfxSz2EDHilKZ2M3Ik2agobxOGlAFZvCbdZz1gDSAuyBWU/HQ9jLTLR8ZJv1HDUgSCXVQs8uA9b5jwx4oqU/Cc1TT38S+v9aEpql3lISLiXhUhL+EwbEK0Q6An2zYnldUIguNgrNoPzV4jC6qJVXRjfExn0E2taGXtgt5XgBOigkLDRLYBnjYrMP53HxUHoCkgDqMUQ14DTNktoZAHAzKloRGh09+yYiQiuACO8DzEm+/BQ4dO/7lQ+h5UhcxpAqjI8aimyKpnSKqMVHWNG4hIKLLgyN1YkLVFw0ENEiPsc1kjClkhHH5QOUswBuzhF0TPwjZ61MW5LYhZdhxpm0RXaSIEN4KTG78D8B+6lUIT1k5iEAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./shoppingCart/icons/right-arrow.png
const right_arrow_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAABPUlEQVR42u3cW07CUBSF4XWcnHFC+qZ4peKt3iKCjrWkJyR9YsNby17/tyfQf2k0IYAAAAAAAAAAAAAAADhA0amMFS3V6VKman69Kxkq+unjXScoeuvDfScY8odrZKPm+05Q83fcmdJ7DfJbFSUX5b+Tn5x5/kuQ/0F+cosg/yt/vvlP/znI/yQ/OfKd85+8//KT75y/CPK/yU+OfOf8R/J33do7P/OZ53eqmkk8yijnnt+553fSbBKPMd7JfQK5T7B1PYmHGePkPoEOm2CtExmIJvj3mOAmmOCPCZiACWwmuOU/AhMwgXQXTLBiAibQKv9rxUxQ3TOB+dvk9v0W/DKByQQPTBBNsGQCJnCZYO79oalogplszL3ze413fq/VkH8hQ0Wtc/4wwbmMmX+FBgAAAAAAAAAAAADgGGwAnIKiT+NIhFoAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./shoppingCart/img/model.png
const model_namespaceObject = __webpack_require__.p + "assets/model.png";
;// CONCATENATED MODULE: ./shoppingCart/img/t1.png
const t1_namespaceObject = __webpack_require__.p + "assets/t1.png";
;// CONCATENATED MODULE: ./shoppingCart/img/t2.png
const t2_namespaceObject = __webpack_require__.p + "assets/t2.png";
;// CONCATENATED MODULE: ./shoppingCart/img/t3.png
const t3_namespaceObject = __webpack_require__.p + "assets/t3.png";
;// CONCATENATED MODULE: ./shoppingCart/img/t4.png
const t4_namespaceObject = __webpack_require__.p + "assets/t4.png";
;// CONCATENATED MODULE: ./shoppingCart/img/t5.png
const t5_namespaceObject = __webpack_require__.p + "assets/t5.png";
;// CONCATENATED MODULE: ./shoppingCart/img/t6.png
const t6_namespaceObject = __webpack_require__.p + "assets/t6.png";
;// CONCATENATED MODULE: ./shoppingCart/img/bg.jpg
const bg_namespaceObject = __webpack_require__.p + "assets/bg.jpg";
;// CONCATENATED MODULE: ./shoppingCart/app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















 // SELECT ELEMENTS

var productsEl = document.querySelector(".products");
var cartItemsEl = document.querySelector(".cart-items");
var subtotalEl = document.querySelector(".subtotal");
var totalItemsInCartEl = document.querySelector(".total-items-in-cart");
var porductsListEl = document.querySelector(".products-list");
var seeMoreBtn = document.querySelector(".see-more-btn");
seeMoreBtn.addEventListener('click', function () {
  porductsListEl.scrollIntoView({
    behavior: "smooth"
  });
});
var homeImg = document.querySelector('.homeImg');
homeImg.src = home_namespaceObject;
var filterImg = document.querySelector('.filterImg');
filterImg.src = filter_namespaceObject;
var bagImg = document.querySelector('.bagImg');
bagImg.src = bag_namespaceObject;
var tshirtImg = document.querySelector('.tshirtImg');
tshirtImg.src = t1_namespaceObject;
var tshirtImg2 = document.querySelector('.tshirtImg2');
tshirtImg2.src = t2_namespaceObject;
var tshirtImg3 = document.querySelector('.tshirtImg3');
tshirtImg3.src = t3_namespaceObject;
var tshirtImg4 = document.querySelector('.tshirtImg4');
tshirtImg4.src = t4_namespaceObject;
var modelImg = document.querySelector('.model-img');
modelImg.src = model_namespaceObject;
var arrowImg = document.querySelector('.arrowImg');
arrowImg.src = right_arrow_namespaceObject; // RENDER PRODUCTS

function renderProdcuts() {
  products_products.forEach(function (product) {
    productsEl.innerHTML += "\n            <div class=\"item\">\n                <div class=\"item-container\">\n                    <div class=\"item-img\">\n                        <img src=".concat(product.imgSrc, " alt=\"").concat(product.name, "\">\n                    </div>\n                    <div class=\"desc\">\n                        <h2>").concat(product.name, "</h2>\n                        <h2><small>$</small>").concat(product.price, "</h2>\n                        <p>\n                          ").concat(product.description, "\n                        </p>\n                    </div>\n                    <div class=\"add-to-wishlist\">\n                        <img src=").concat(heart_namespaceObject, " alt=\"add to wish list\">\n                    </div>\n                    <div class=\"add-to-cart\" onclick=\"addToCart(").concat(product.id, ")\">\n                        <img src=").concat(bag_plus_namespaceObject, " alt=\"add to cart\">\n                    </div>\n                </div>\n            </div>\n        ");
  });
}

renderProdcuts(); // cart array

var cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart(); // ADD TO CART

function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some(function (item) {
    return item.id === id;
  })) {
    changeNumberOfUnits("plus", id);
  } else {
    var item = products.find(function (product) {
      return product.id === id;
    });
    cart.push(_objectSpread(_objectSpread({}, item), {}, {
      numberOfUnits: 1
    }));
  }

  updateCart();
} // update cart


function updateCart() {
  renderCartItems();
  renderSubtotal(); // save cart to local storage

  localStorage.setItem("CART", JSON.stringify(cart));
} // calculate and render subtotal


function renderSubtotal() {
  var totalPrice = 0,
      totalItems = 0;
  cart.forEach(function (item) {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  subtotalEl.innerHTML = "Subtotal (".concat(totalItems, " items): $").concat(totalPrice.toFixed(2));
  totalItemsInCartEl.innerHTML = totalItems;
} // render cart items


function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element

  cart.forEach(function (item) {
    cartItemsEl.innerHTML += "\n        <div class=\"cart-item\">\n            <div class=\"item-info\" onclick=\"removeItemFromCart(".concat(item.id, ")\">\n                <img src=\"").concat(item.imgSrc, "\" alt=\"").concat(item.name, "\">\n                <h4>").concat(item.name, "</h4>\n            </div>\n            <div class=\"unit-price\">\n                <small>$</small>").concat(item.price, "\n            </div>\n            <div class=\"units\">\n                <div class=\"btn minus\" onclick=\"changeNumberOfUnits('minus', ").concat(item.id, ")\">-</div>\n                <div class=\"number\">").concat(item.numberOfUnits, "</div>\n                <div class=\"btn plus\" onclick=\"changeNumberOfUnits('plus', ").concat(item.id, ")\">+</div>           \n            </div>\n        </div>\n      ");
  });
} // remove item from cart


function removeItemFromCart(id) {
  cart = cart.filter(function (item) {
    return item.id !== id;
  });
  updateCart();
} // change number of units for an item


function changeNumberOfUnits(action, id) {
  cart = cart.map(function (item) {
    var numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return _objectSpread(_objectSpread({}, item), {}, {
      numberOfUnits: numberOfUnits
    });
  });
  updateCart();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxXQUFXLFlBQVksV0FBVyxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssWUFBWSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsY0FBYyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxZQUFZLE1BQU0sVUFBVSxXQUFXLGFBQWEsV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVB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QUVEOzs7QUFDQSxTQUFTSSxtQkFBVCxDQUE2QlksTUFBN0IsRUFBcUNsRSxFQUFyQyxFQUF5QztFQUN2QzZDLElBQUksR0FBR0EsSUFBSSxDQUFDc0IsR0FBTCxDQUFTLFVBQUNkLElBQUQsRUFBVTtJQUN4QixJQUFJSSxhQUFhLEdBQUdKLElBQUksQ0FBQ0ksYUFBekI7O0lBRUEsSUFBSUosSUFBSSxDQUFDckQsRUFBTCxLQUFZQSxFQUFoQixFQUFvQjtNQUNsQixJQUFJa0UsTUFBTSxLQUFLLE9BQVgsSUFBc0JULGFBQWEsR0FBRyxDQUExQyxFQUE2QztRQUMzQ0EsYUFBYTtNQUNkLENBRkQsTUFFTyxJQUFJUyxNQUFNLEtBQUssTUFBWCxJQUFxQlQsYUFBYSxHQUFHSixJQUFJLENBQUNsRCxPQUE5QyxFQUF1RDtRQUM1RHNELGFBQWE7TUFDZDtJQUNGOztJQUVELHVDQUNLSixJQURMO01BRUVJLGFBQWEsRUFBYkE7SUFGRjtFQUlELENBZk0sQ0FBUDtFQWlCQVAsVUFBVTtBQUNYLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0LWphdmFzY3JpcHQtbWFpbi8uL3Nob3BwaW5nQ2FydC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC1qYXZhc2NyaXB0LW1haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQtamF2YXNjcmlwdC1tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC1qYXZhc2NyaXB0LW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC1qYXZhc2NyaXB0LW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQtamF2YXNjcmlwdC1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQtamF2YXNjcmlwdC1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQtamF2YXNjcmlwdC1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC1qYXZhc2NyaXB0LW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0LWphdmFzY3JpcHQtbWFpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0LWphdmFzY3JpcHQtbWFpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0LWphdmFzY3JpcHQtbWFpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC1qYXZhc2NyaXB0LW1haW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0LWphdmFzY3JpcHQtbWFpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQtamF2YXNjcmlwdC1tYWluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQtamF2YXNjcmlwdC1tYWluLy4vc2hvcHBpbmdDYXJ0L3Byb2R1Y3RzLmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQtamF2YXNjcmlwdC1tYWluLy4vc2hvcHBpbmdDYXJ0L3N0eWxlLmNzcz85NTE2Iiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQtamF2YXNjcmlwdC1tYWluLy4vc2hvcHBpbmdDYXJ0L2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGltcG9ydCBmb250cyAqL1xcclxcblxcclxcbi8qIFZBUklBQkxFUyAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tYmctY29sb3I6ICNmZmY7XFxyXFxuICAtLWxpbmstY29sb3I6ICMwMDA7XFxyXFxuICAtLWxpbmstc2l6ZTogMS4xcmVtO1xcclxcbiAgLS1yaWdodC1zaWRlLWJnLWNvbG9yOiA4MSwgMTg3LCAyNTQ7XFxyXFxufVxcclxcblxcclxcbi8qIEdlbmVyYWwgQ1NTICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSdWJpaztcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIEFQUCBDT05UQUlORVIgKi9cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBUFAgQkcgKi9cXHJcXG4uYXBwLWJnIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG4uYXBwLWJnIC5sZWZ0LXNpZGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmFwcC1iZyAucmlnaHQtc2lkZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcmlnaHQtc2lkZS1iZy1jb2xvcikpO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDMwcHggMTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuXFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG59XFxyXFxuaGVhZGVyIG5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuaGVhZGVyIG5hdiB1bCBsaS5hY3RpdmUge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGluay1zaXplKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5oZWFkZXIgbmF2IHVsIGxpLmJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXJpZ2h0LXNpZGUtYmctY29sb3IpLCAwLjQpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKHZhcigtLXJpZ2h0LXNpZGUtYmctY29sb3IpKTtcXHJcXG59XFxyXFxuaGVhZGVyIG5hdiB1bCBsaS5idG4gaW1nIHtcXHJcXG4gIHdpZHRoOiAzMjtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuaGVhZGVyIG5hdiB1bCBsaS5ob21lIGEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciBuYXYgdWwgbGkuaG9tZSBhIGltZyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLyogSEVBREVSIC0+IFNIT09QSU5HIEJBRyAqL1xcclxcbi5zaG9wcGluZy1iYWcge1xcclxcbiAgcGFkZGluZzogMTBweCA1cHg7XFxyXFxufVxcclxcbi5zaG9wcGluZy1iYWcgYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNob3BwaW5nLWJhZyBhIGltZyB7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuLnNob3BwaW5nLWJhZyAudG90YWwtaXRlbXMtaW4tY2FydCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI1NSwgNTgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4vKiBNQUlOICovXFxyXFxubWFpbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMTAwcHg7XFxyXFxufVxcclxcbm1haW4gLnByb2R1Y3RzLXByZXZpZXcge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcbm1haW4gLm1vZGVsIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG4vKiBQUk9EVUNUUyAqL1xcclxcbi5wcm9kdWN0cy1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ucHJvZHVjdCB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLXJpZ2h0LXNpZGUtYmctY29sb3IpLCAwLjQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuLnByb2R1Y3QgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKiBNT1JFIERFVEFJTFMgKi9cXHJcXG4ubW9yZS1kZXRhaWxzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogODBweDtcXHJcXG4gIGxlZnQ6IDUwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1vcmUtZGV0YWlscyAuc2VlLW1vcmUtYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG4uc2VlLW1vcmUtYnRuIGltZyB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuLm1vcmUtZGV0YWlscyAuZGVzY3JpcHRpb24ge1xcclxcbn1cXHJcXG4ubW9yZS1kZXRhaWxzIC5kZXNjcmlwdGlvbiBzbWFsbCB7XFxyXFxuICBjb2xvcjogcmdiKDE0OSwgMTQ5LCAxNDkpO1xcclxcbn1cXHJcXG4ubW9yZS1kZXRhaWxzIC5kZXNjcmlwdGlvbiBoMSB7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuLm1vcmUtZGV0YWlscyAuZGVzY3JpcHRpb24gaDEgc21hbGwge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcbi8qIE1PREVMICovXFxyXFxuLm1vZGVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1vZGVsIC5tb2RlbC1pbWcge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDM1JTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcclxcbiAgdG9wOiAtMTAwcHg7XFxyXFxufVxcclxcbi5tb2RlbCAucHJvZHVjdCB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4ubW9kZWwgLnByb2R1Y3QgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKiBwcm9kdWN0cyBsaXN0ICovXFxyXFxuLnByb2R1Y3RzLWxpc3Qge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qIFBST0RVQ1RTICovXFxyXFxuLnByb2R1Y3RzIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgM2ZyKTtcXHJcXG59XFxyXFxuLnByb2R1Y3RzIGltZyB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICAvKiBmaWx0ZXI6IGRyb3Atc2hhZG93KDMwcHggMTBweCA0cHggI2RkZCk7ICovXFxyXFxufVxcclxcbi5wcm9kdWN0cyAuaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4ucHJvZHVjdHMgLml0ZW0gLml0ZW0tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5wcm9kdWN0cyAuaXRlbSAuaXRlbS1jb250YWluZXIgLml0ZW0taW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MCU7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnByb2R1Y3RzIC5pdGVtIC5pdGVtLWNvbnRhaW5lciAuZGVzYyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLnByb2R1Y3RzIC5pdGVtIC5pdGVtLWNvbnRhaW5lciAuYWRkLXRvLWNhcnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1yaWdodC1zaWRlLWJnLWNvbG9yKSwgMC43KTtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI1NSwgNTgpOyAqL1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcblxcclxcbiAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvZHVjdHMgLml0ZW0gLml0ZW0tY29udGFpbmVyIC5hZGQtdG8td2lzaGxpc3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIxLCAyMSwgMC43KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICByaWdodDogNjBweDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2R1Y3RzIC5pdGVtIC5pdGVtLWNvbnRhaW5lciAuYWRkLXRvLWNhcnQgaW1nIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG4ucHJvZHVjdHMgLml0ZW0gLml0ZW0tY29udGFpbmVyIC5hZGQtdG8td2lzaGxpc3QgaW1nIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcblxcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4vKiBDQVJUICovXFxyXFxuLmNhcnQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLyogY2FydCBoZWFkZXIgKi9cXHJcXG4uY2FydC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbn1cXHJcXG4vKiBjYXJ0IGl0ZW1zICovXFxyXFxuLmNhcnQtaXRlbXMge1xcclxcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI0N3B4KTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcbi8qIGNhcnQgaXRlbSAqL1xcclxcbi5jYXJ0LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbn1cXHJcXG4uY2FydC1pdGVtIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4vKiBpdGVtIGluZm8gKi9cXHJcXG4uY2FydC1pdGVtIC5pdGVtLWluZm8ge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4uY2FydC1pdGVtIC5pdGVtLWluZm86aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jYXJ0LWl0ZW0gLml0ZW0taW5mbyBpbWcge1xcclxcbiAgd2lkdGg6IDc1cHg7XFxyXFxufVxcclxcbi8qIHVuaXQgcHJpY2UgKi9cXHJcXG4uY2FydC1pdGVtIC51bml0LXByaWNlIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuLyogdW5pdHMgKi9cXHJcXG4uY2FydC1pdGVtIC51bml0cyB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG4uY2FydC1pdGVtIC51bml0cyAubnVtYmVyIHtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcbi5jYXJ0LWl0ZW0gLnVuaXRzIC5idG4ge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNTUsIDU4KTtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggYWxsICovXFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwKyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjYXJ0IGZvb3RlciAqL1xcclxcbi5jYXJ0LWZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxLCAyMSk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcblxcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IodmFyKC0tcmlnaHQtc2lkZS1iZy1jb2xvcikpO1xcclxcbn1cXHJcXG4uY2FydC1mb290ZXIgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuLmNhcnQtZm9vdGVyIC5zdWJ0b3RhbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmNhcnQtZm9vdGVyIC5jaGVja291dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNTUsIDU4KTtcXHJcXG5cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc2hvcHBpbmdDYXJ0L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQkFBaUI7O0FBR2pCLGNBQWM7QUFDZDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7QUFF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aEIsa0JBQWtCO0FBQ3BCO0FBQ0EsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBLGNBQWM7QUFDZDtFQUNFLE9BQU87RUFDUCwwQ0FBMEM7O0VBRTFDLDRCQUE0Qjs7RUFFNUIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0EsZUFBZTtBQUNmO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtBQUNuQjtBQUNBLFVBQVU7QUFDVjtFQUNFLE9BQU87QUFDVDtBQUNBO0VBQ0UsY0FBYzs7RUFFZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztFQUVaLG1DQUFtQzs7RUFFbkMsa0JBQWtCOztFQUVsQixpQkFBaUI7O0VBRWpCLGVBQWU7O0VBRWYseUJBQXlCLEVBQUUsNEJBQTRCO0VBQ3ZELHNCQUFzQixFQUFFLGdCQUFnQjtFQUN4QyxxQkFBcUIsRUFBRSxXQUFXO0FBQ3BDOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPOztFQUVQLHNEQUFzRDtBQUN4RDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLGVBQWU7O0VBRWYsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLG1DQUFtQzs7RUFFbkMsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBpbXBvcnQgZm9udHMgKi9cXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4vKiBWQVJJQUJMRVMgKi9cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJnLWNvbG9yOiAjZmZmO1xcclxcbiAgLS1saW5rLWNvbG9yOiAjMDAwO1xcclxcbiAgLS1saW5rLXNpemU6IDEuMXJlbTtcXHJcXG4gIC0tcmlnaHQtc2lkZS1iZy1jb2xvcjogODEsIDE4NywgMjU0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZW5lcmFsIENTUyAqL1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogUnViaWs7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBUFAgQ09OVEFJTkVSICovXFxyXFxuLmFwcC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQVBQIEJHICovXFxyXFxuLmFwcC1iZyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuLmFwcC1iZyAubGVmdC1zaWRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5hcHAtYmcgLnJpZ2h0LXNpZGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJpZ2h0LXNpZGUtYmctY29sb3IpKTtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIEhFQURFUiAqL1xcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAzMHB4IDEwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcblxcclxcbiAgei1pbmRleDogOTk7XFxyXFxufVxcclxcbmhlYWRlciBuYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciBuYXYgdWwgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcbmhlYWRlciBuYXYgdWwgbGkuYWN0aXZlIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWxpbmstc2l6ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuaGVhZGVyIG5hdiB1bCBsaS5idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1yaWdodC1zaWRlLWJnLWNvbG9yKSwgMC40KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYih2YXIoLS1yaWdodC1zaWRlLWJnLWNvbG9yKSk7XFxyXFxufVxcclxcbmhlYWRlciBuYXYgdWwgbGkuYnRuIGltZyB7XFxyXFxuICB3aWR0aDogMzI7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcbmhlYWRlciBuYXYgdWwgbGkuaG9tZSBhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5oZWFkZXIgbmF2IHVsIGxpLmhvbWUgYSBpbWcge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi8qIEhFQURFUiAtPiBTSE9PUElORyBCQUcgKi9cXHJcXG4uc2hvcHBpbmctYmFnIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcclxcbn1cXHJcXG4uc2hvcHBpbmctYmFnIGEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zaG9wcGluZy1iYWcgYSBpbWcge1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcbi5zaG9wcGluZy1iYWcgLnRvdGFsLWl0ZW1zLWluLWNhcnQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNTUsIDU4KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLyogTUFJTiAqL1xcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDEwMHB4O1xcclxcbn1cXHJcXG5tYWluIC5wcm9kdWN0cy1wcmV2aWV3IHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5tYWluIC5tb2RlbCB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuLyogUFJPRFVDVFMgKi9cXHJcXG4ucHJvZHVjdHMtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnByb2R1Y3Qge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1yaWdodC1zaWRlLWJnLWNvbG9yKSwgMC40KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi5wcm9kdWN0IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLyogTU9SRSBERVRBSUxTICovXFxyXFxuLm1vcmUtZGV0YWlscyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDgwcHg7XFxyXFxuICBsZWZ0OiA1MHB4O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tb3JlLWRldGFpbHMgLnNlZS1tb3JlLWJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuLnNlZS1tb3JlLWJ0biBpbWcge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5tb3JlLWRldGFpbHMgLmRlc2NyaXB0aW9uIHtcXHJcXG59XFxyXFxuLm1vcmUtZGV0YWlscyAuZGVzY3JpcHRpb24gc21hbGwge1xcclxcbiAgY29sb3I6IHJnYigxNDksIDE0OSwgMTQ5KTtcXHJcXG59XFxyXFxuLm1vcmUtZGV0YWlscyAuZGVzY3JpcHRpb24gaDEge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcbi5tb3JlLWRldGFpbHMgLmRlc2NyaXB0aW9uIGgxIHNtYWxsIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4vKiBNT0RFTCAqL1xcclxcbi5tb2RlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tb2RlbCAubW9kZWwtaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAzNSU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXHJcXG4gIHRvcDogLTEwMHB4O1xcclxcbn1cXHJcXG4ubW9kZWwgLnByb2R1Y3Qge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuLm1vZGVsIC5wcm9kdWN0IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLyogcHJvZHVjdHMgbGlzdCAqL1xcclxcbi5wcm9kdWN0cy1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9EVUNUUyAqL1xcclxcbi5wcm9kdWN0cyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcblxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDNmcik7XFxyXFxufVxcclxcbi5wcm9kdWN0cyBpbWcge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgLyogZmlsdGVyOiBkcm9wLXNoYWRvdygzMHB4IDEwcHggNHB4ICNkZGQpOyAqL1xcclxcbn1cXHJcXG4ucHJvZHVjdHMgLml0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLnByb2R1Y3RzIC5pdGVtIC5pdGVtLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcblxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucHJvZHVjdHMgLml0ZW0gLml0ZW0tY29udGFpbmVyIC5pdGVtLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wcm9kdWN0cyAuaXRlbSAuaXRlbS1jb250YWluZXIgLmRlc2Mge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbi5wcm9kdWN0cyAuaXRlbSAuaXRlbS1jb250YWluZXIgLmFkZC10by1jYXJ0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcmlnaHQtc2lkZS1iZy1jb2xvciksIDAuNyk7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNTUsIDU4KTsgKi9cXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2R1Y3RzIC5pdGVtIC5pdGVtLWNvbnRhaW5lciAuYWRkLXRvLXdpc2hsaXN0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMSwgMjEsIDAuNyk7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcmlnaHQ6IDYwcHg7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9kdWN0cyAuaXRlbSAuaXRlbS1jb250YWluZXIgLmFkZC10by1jYXJ0IGltZyB7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuLnByb2R1Y3RzIC5pdGVtIC5pdGVtLWNvbnRhaW5lciAuYWRkLXRvLXdpc2hsaXN0IGltZyB7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuLyogQ0FSVCAqL1xcclxcbi5jYXJ0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi8qIGNhcnQgaGVhZGVyICovXFxyXFxuLmNhcnQtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuLyogY2FydCBpdGVtcyAqL1xcclxcbi5jYXJ0LWl0ZW1zIHtcXHJcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDdweCk7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG4vKiBjYXJ0IGl0ZW0gKi9cXHJcXG4uY2FydC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuLmNhcnQtaXRlbSBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLyogaXRlbSBpbmZvICovXFxyXFxuLmNhcnQtaXRlbSAuaXRlbS1pbmZvIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcclxcblxcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLmNhcnQtaXRlbSAuaXRlbS1pbmZvOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY2FydC1pdGVtIC5pdGVtLWluZm8gaW1nIHtcXHJcXG4gIHdpZHRoOiA3NXB4O1xcclxcbn1cXHJcXG4vKiB1bml0IHByaWNlICovXFxyXFxuLmNhcnQtaXRlbSAudW5pdC1wcmljZSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcbi8qIHVuaXRzICovXFxyXFxuLmNhcnQtaXRlbSAudW5pdHMge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuLmNhcnQtaXRlbSAudW5pdHMgLm51bWJlciB7XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG4uY2FydC1pdGVtIC51bml0cyAuYnRuIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjU1LCA1OCk7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIENocm9tZSBhbGwgLyBTYWZhcmkgYWxsICovXFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94IGFsbCAqL1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogY2FydCBmb290ZXIgKi9cXHJcXG4uY2FydC1mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMSwgMjEpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG5cXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKHZhcigtLXJpZ2h0LXNpZGUtYmctY29sb3IpKTtcXHJcXG59XFxyXFxuLmNhcnQtZm9vdGVyIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcbi5jYXJ0LWZvb3RlciAuc3VidG90YWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5jYXJ0LWZvb3RlciAuY2hlY2tvdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjU1LCA1OCk7XFxyXFxuXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJleHBvcnQgY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiBcIlQtc2hpcnQgMVwiLFxyXG4gICAgcHJpY2U6IDI5Ljk5LFxyXG4gICAgaW5zdG9jazogMTAwLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFzcGVyaW9yZXMsIGVycm9yLlwiLFxyXG4gICAgaW1nU3JjOiBcInQxLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiBcIlQtc2hpcnQgMlwiLFxyXG4gICAgcHJpY2U6IDI0Ljk5LFxyXG4gICAgaW5zdG9jazogNDMsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXNwZXJpb3JlcywgZXJyb3IuXCIsXHJcbiAgICBpbWdTcmM6IFwidDIucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6IFwiVC1zaGlydCAzXCIsXHJcbiAgICBwcmljZTogMTkuOTksXHJcbiAgICBpbnN0b2NrOiAxMCxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3BlcmlvcmVzLCBlcnJvci5cIixcclxuICAgIGltZ1NyYzogXCJ0My5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogXCJULXNoaXJ0IDRcIixcclxuICAgIHByaWNlOiAyNS45OSxcclxuICAgIGluc3RvY2s6IDUsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXNwZXJpb3JlcywgZXJyb3IuXCIsXHJcbiAgICBpbWdTcmM6IFwidDQucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6IFwiVC1zaGlydCA1XCIsXHJcbiAgICBwcmljZTogMjkuOTksXHJcbiAgICBpbnN0b2NrOiA0LFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFzcGVyaW9yZXMsIGVycm9yLlwiLFxyXG4gICAgaW1nU3JjOiBcInQ1LnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBuYW1lOiBcIlQtc2hpcnQgNlwiLFxyXG4gICAgcHJpY2U6IDM5Ljk5LFxyXG4gICAgaW5zdG9jazogNDAsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXNwZXJpb3JlcywgZXJyb3IuXCIsXHJcbiAgICBpbWdTcmM6IFwidDYucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tIFwiLi9wcm9kdWN0c1wiO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcblxyXG5pbXBvcnQgYmFnUGx1cyBmcm9tICcuL2ljb25zL2JhZy1wbHVzLnBuZyc7XHJcbmltcG9ydCBiYWcgZnJvbSAnLi9pY29ucy9iYWcucG5nJztcclxuaW1wb3J0IGZpbHRlciBmcm9tICcuL2ljb25zL2ZpbHRlci5wbmcnO1xyXG5pbXBvcnQgaGVhcnQgZnJvbSAnLi9pY29ucy9oZWFydC5wbmcnO1xyXG5pbXBvcnQgaG9tZSBmcm9tICcuL2ljb25zL2hvbWUucG5nJztcclxuaW1wb3J0IHJpZ2h0QXJyb3cgZnJvbSAnLi9pY29ucy9yaWdodC1hcnJvdy5wbmcnO1xyXG5cclxuaW1wb3J0IG1vZGVsIGZyb20gJy4vaW1nL21vZGVsLnBuZyc7XHJcbmltcG9ydCB0MSBmcm9tICcuL2ltZy90MS5wbmcnO1xyXG5pbXBvcnQgdDIgZnJvbSAnLi9pbWcvdDIucG5nJztcclxuaW1wb3J0IHQzIGZyb20gJy4vaW1nL3QzLnBuZyc7XHJcbmltcG9ydCB0NCBmcm9tICcuL2ltZy90NC5wbmcnO1xyXG5pbXBvcnQgdDUgZnJvbSAnLi9pbWcvdDUucG5nJztcclxuaW1wb3J0IHQ2IGZyb20gJy4vaW1nL3Q2LnBuZyc7XHJcbmltcG9ydCBiZyBmcm9tICcuL2ltZy9iZy5qcGcnO1xyXG5cclxuLy8gU0VMRUNUIEVMRU1FTlRTXHJcbmNvbnN0IHByb2R1Y3RzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RzXCIpO1xyXG5jb25zdCBjYXJ0SXRlbXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC1pdGVtc1wiKTtcclxuY29uc3Qgc3VidG90YWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VidG90YWxcIik7XHJcbmNvbnN0IHRvdGFsSXRlbXNJbkNhcnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG90YWwtaXRlbXMtaW4tY2FydFwiKTtcclxuXHJcblxyXG5jb25zdCBwb3JkdWN0c0xpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdHMtbGlzdFwiKTtcclxuY29uc3Qgc2VlTW9yZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VlLW1vcmUtYnRuXCIpO1xyXG5cclxuc2VlTW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHBvcmR1Y3RzTGlzdEVsLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pXHJcbn0pXHJcblxyXG5jb25zdCBob21lSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVJbWcnKTtcclxuaG9tZUltZy5zcmMgPSBob21lO1xyXG5cclxuY29uc3QgZmlsdGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlckltZycpO1xyXG5maWx0ZXJJbWcuc3JjID0gZmlsdGVyO1xyXG5cclxuY29uc3QgYmFnSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhZ0ltZycpO1xyXG5iYWdJbWcuc3JjID0gYmFnXHJcblxyXG5jb25zdCB0c2hpcnRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHNoaXJ0SW1nJyk7XHJcbnRzaGlydEltZy5zcmMgPSB0MTtcclxuXHJcbmNvbnN0IHRzaGlydEltZzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHNoaXJ0SW1nMicpO1xyXG50c2hpcnRJbWcyLnNyYyA9IHQyO1xyXG5cclxuY29uc3QgdHNoaXJ0SW1nMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50c2hpcnRJbWczJyk7XHJcbnRzaGlydEltZzMuc3JjID0gdDM7XHJcblxyXG5jb25zdCB0c2hpcnRJbWc0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRzaGlydEltZzQnKTtcclxudHNoaXJ0SW1nNC5zcmMgPSB0NDtcclxuXHJcbmNvbnN0IG1vZGVsSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGVsLWltZycpO1xyXG5tb2RlbEltZy5zcmMgPSBtb2RlbDtcclxuXHJcbmNvbnN0IGFycm93SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93SW1nJyk7XHJcbmFycm93SW1nLnNyYyA9IHJpZ2h0QXJyb3c7XHJcblxyXG5cclxuLy8gUkVOREVSIFBST0RVQ1RTXHJcbmZ1bmN0aW9uIHJlbmRlclByb2RjdXRzKCkge1xyXG4gIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuICAgIHByb2R1Y3RzRWwuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke3Byb2R1Y3QuaW1nU3JjfSBhbHQ9XCIke3Byb2R1Y3QubmFtZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+JHtwcm9kdWN0Lm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjxzbWFsbD4kPC9zbWFsbD4ke3Byb2R1Y3QucHJpY2V9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10by13aXNobGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke2hlYXJ0fSBhbHQ9XCJhZGQgdG8gd2lzaCBsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10by1jYXJ0XCIgb25jbGljaz1cImFkZFRvQ2FydCgke3Byb2R1Y3QuaWR9KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke2JhZ1BsdXN9IGFsdD1cImFkZCB0byBjYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICB9KTtcclxufVxyXG5yZW5kZXJQcm9kY3V0cygpO1xyXG5cclxuLy8gY2FydCBhcnJheVxyXG5sZXQgY2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDQVJUXCIpKSB8fCBbXTtcclxudXBkYXRlQ2FydCgpO1xyXG5cclxuLy8gQUREIFRPIENBUlRcclxuZnVuY3Rpb24gYWRkVG9DYXJ0KGlkKSB7XHJcbiAgLy8gY2hlY2sgaWYgcHJvZGN1dCBhbHJlYWR5IGV4aXN0IGluIGNhcnRcclxuICBpZiAoY2FydC5zb21lKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCkpIHtcclxuICAgIGNoYW5nZU51bWJlck9mVW5pdHMoXCJwbHVzXCIsIGlkKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaXRlbSA9IHByb2R1Y3RzLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGlkKTtcclxuXHJcbiAgICBjYXJ0LnB1c2goe1xyXG4gICAgICAuLi5pdGVtLFxyXG4gICAgICBudW1iZXJPZlVuaXRzOiAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDYXJ0KCk7XHJcbn1cclxuXHJcbi8vIHVwZGF0ZSBjYXJ0XHJcbmZ1bmN0aW9uIHVwZGF0ZUNhcnQoKSB7XHJcbiAgcmVuZGVyQ2FydEl0ZW1zKCk7XHJcbiAgcmVuZGVyU3VidG90YWwoKTtcclxuXHJcbiAgLy8gc2F2ZSBjYXJ0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNBUlRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG59XHJcblxyXG4vLyBjYWxjdWxhdGUgYW5kIHJlbmRlciBzdWJ0b3RhbFxyXG5mdW5jdGlvbiByZW5kZXJTdWJ0b3RhbCgpIHtcclxuICBsZXQgdG90YWxQcmljZSA9IDAsXHJcbiAgICB0b3RhbEl0ZW1zID0gMDtcclxuXHJcbiAgY2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICB0b3RhbFByaWNlICs9IGl0ZW0ucHJpY2UgKiBpdGVtLm51bWJlck9mVW5pdHM7XHJcbiAgICB0b3RhbEl0ZW1zICs9IGl0ZW0ubnVtYmVyT2ZVbml0cztcclxuICB9KTtcclxuXHJcbiAgc3VidG90YWxFbC5pbm5lckhUTUwgPSBgU3VidG90YWwgKCR7dG90YWxJdGVtc30gaXRlbXMpOiAkJHt0b3RhbFByaWNlLnRvRml4ZWQoMil9YDtcclxuICB0b3RhbEl0ZW1zSW5DYXJ0RWwuaW5uZXJIVE1MID0gdG90YWxJdGVtcztcclxufVxyXG5cclxuLy8gcmVuZGVyIGNhcnQgaXRlbXNcclxuZnVuY3Rpb24gcmVuZGVyQ2FydEl0ZW1zKCkge1xyXG4gIGNhcnRJdGVtc0VsLmlubmVySFRNTCA9IFwiXCI7IC8vIGNsZWFyIGNhcnQgZWxlbWVudFxyXG4gIGNhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY2FydEl0ZW1zRWwuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWluZm9cIiBvbmNsaWNrPVwicmVtb3ZlSXRlbUZyb21DYXJ0KCR7aXRlbS5pZH0pXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5pbWdTcmN9XCIgYWx0PVwiJHtpdGVtLm5hbWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+JHtpdGVtLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bml0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+JDwvc21hbGw+JHtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVuaXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuIG1pbnVzXCIgb25jbGljaz1cImNoYW5nZU51bWJlck9mVW5pdHMoJ21pbnVzJywgJHtpdGVtLmlkfSlcIj4tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibnVtYmVyXCI+JHtpdGVtLm51bWJlck9mVW5pdHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuIHBsdXNcIiBvbmNsaWNrPVwiY2hhbmdlTnVtYmVyT2ZVbml0cygncGx1cycsICR7aXRlbS5pZH0pXCI+KzwvZGl2PiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyByZW1vdmUgaXRlbSBmcm9tIGNhcnRcclxuZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21DYXJ0KGlkKSB7XHJcbiAgY2FydCA9IGNhcnQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCk7XHJcblxyXG4gIHVwZGF0ZUNhcnQoKTtcclxufVxyXG5cclxuLy8gY2hhbmdlIG51bWJlciBvZiB1bml0cyBmb3IgYW4gaXRlbVxyXG5mdW5jdGlvbiBjaGFuZ2VOdW1iZXJPZlVuaXRzKGFjdGlvbiwgaWQpIHtcclxuICBjYXJ0ID0gY2FydC5tYXAoKGl0ZW0pID0+IHtcclxuICAgIGxldCBudW1iZXJPZlVuaXRzID0gaXRlbS5udW1iZXJPZlVuaXRzO1xyXG5cclxuICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xyXG4gICAgICBpZiAoYWN0aW9uID09PSBcIm1pbnVzXCIgJiYgbnVtYmVyT2ZVbml0cyA+IDEpIHtcclxuICAgICAgICBudW1iZXJPZlVuaXRzLS07XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInBsdXNcIiAmJiBudW1iZXJPZlVuaXRzIDwgaXRlbS5pbnN0b2NrKSB7XHJcbiAgICAgICAgbnVtYmVyT2ZVbml0cysrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uaXRlbSxcclxuICAgICAgbnVtYmVyT2ZVbml0cyxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHVwZGF0ZUNhcnQoKTtcclxufVxyXG4iXSwibmFtZXMiOlsicHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJwcmljZSIsImluc3RvY2siLCJkZXNjcmlwdGlvbiIsImltZ1NyYyIsImJhZ1BsdXMiLCJiYWciLCJmaWx0ZXIiLCJoZWFydCIsImhvbWUiLCJyaWdodEFycm93IiwibW9kZWwiLCJ0MSIsInQyIiwidDMiLCJ0NCIsInQ1IiwidDYiLCJiZyIsInByb2R1Y3RzRWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJ0SXRlbXNFbCIsInN1YnRvdGFsRWwiLCJ0b3RhbEl0ZW1zSW5DYXJ0RWwiLCJwb3JkdWN0c0xpc3RFbCIsInNlZU1vcmVCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhvbWVJbWciLCJzcmMiLCJmaWx0ZXJJbWciLCJiYWdJbWciLCJ0c2hpcnRJbWciLCJ0c2hpcnRJbWcyIiwidHNoaXJ0SW1nMyIsInRzaGlydEltZzQiLCJtb2RlbEltZyIsImFycm93SW1nIiwicmVuZGVyUHJvZGN1dHMiLCJmb3JFYWNoIiwicHJvZHVjdCIsImlubmVySFRNTCIsImNhcnQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXBkYXRlQ2FydCIsImFkZFRvQ2FydCIsInNvbWUiLCJpdGVtIiwiY2hhbmdlTnVtYmVyT2ZVbml0cyIsImZpbmQiLCJwdXNoIiwibnVtYmVyT2ZVbml0cyIsInJlbmRlckNhcnRJdGVtcyIsInJlbmRlclN1YnRvdGFsIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRvdGFsUHJpY2UiLCJ0b3RhbEl0ZW1zIiwidG9GaXhlZCIsInJlbW92ZUl0ZW1Gcm9tQ2FydCIsImFjdGlvbiIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=