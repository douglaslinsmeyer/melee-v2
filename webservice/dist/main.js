/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database */ \"./src/database.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./security */ \"./src/security.js\");\n\n\n\n\n\n\n\n\n\nif (true) {\n  dotenv__WEBPACK_IMPORTED_MODULE_3___default.a.config({\n    path: '../'\n  });\n}\n\nconsole.log(\"Running in >>\".concat(\"development\", \"<< mode.\"));\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar port = 8000;\npassport__WEBPACK_IMPORTED_MODULE_6___default.a.use(_security__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.set('port', process.env.port || port);\napp.set('db', _database__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.urlencoded({\n  extended: false\n}));\napp.use('/', _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.listen(port, function () {\n  console.log(\"Server running on port: \".concat(port));\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/BotController.js":
/*!******************************************!*\
  !*** ./src/controllers/BotController.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_bot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/bot */ \"./src/models/bot.js\");\n/* harmony import */ var _services_security_permitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/security/permitter */ \"./src/services/security/permitter.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar controller = {};\nvar botPermitter = _services_security_permitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPermitter('bot');\n\ncontroller.index = function (req, res) {\n  res.send(\"Hello, \".concat(req.user.name, \".\"));\n};\n\ncontroller.update =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var bot;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _models_bot__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.bot.id, req.body.bot, {\n              \"new\": true\n            });\n\n          case 3:\n            bot = _context.sent;\n\n            if (!bot) {\n              res.status(400).send({\n                error: \"Update failed.\"\n              });\n            }\n\n            if (!botPermitter.canUpdate(bot, req.user)) {\n              res.status(401).send('Unauthorized.');\n            }\n\n            res.send(bot);\n            _context.next = 13;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            res.status(400).send({\n              error: \"Server error, update failed.\"\n            });\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 9]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\ncontroller.create = function (req, res) {\n  var bot = new _models_bot__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    name: req.body.name,\n    url: req.body.url,\n    owner: req.user.id\n  });\n  bot.save(function (err) {\n    if (err) {\n      res.status(400).send({\n        error: err.message\n      });\n    }\n\n    res.send(bot);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);\n\n//# sourceURL=webpack:///./src/controllers/BotController.js?");

/***/ }),

/***/ "./src/controllers/SecurityController.js":
/*!***********************************************!*\
  !*** ./src/controllers/SecurityController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user */ \"./src/models/user.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar controller = {};\n\ncontroller.authenticate =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var sendUnauthorizedResponse, user, passwordMatches, token;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            sendUnauthorizedResponse = function sendUnauthorizedResponse() {\n              res.status(401).send('Authentication failed.');\n            };\n\n            if (!req.body.hasOwnProperty('email') || !req.body.hasOwnProperty('password')) {\n              sendUnauthorizedResponse();\n            }\n\n            _context.next = 4;\n            return _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n              email: req.body.email\n            }, 'password');\n\n          case 4:\n            user = _context.sent;\n\n            if (!user) {\n              sendUnauthorizedResponse();\n            }\n\n            _context.next = 8;\n            return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(req.body.password, user.password);\n\n          case 8:\n            passwordMatches = _context.sent;\n\n            if (false === passwordMatches) {\n              sendUnauthorizedResponse();\n            }\n\n            token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n              data: {\n                email: req.body.email\n              }\n            }, process.env.APP_SECRET, {\n              expiresIn: \"24h\"\n            });\n            res.status(200).send({\n              token: token\n            });\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\ncontroller.register =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var hashedPassword, user;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hash(req.body.password, 10);\n\n          case 2:\n            hashedPassword = _context2.sent;\n            user = new _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n              name: req.body.name,\n              email: req.body.email,\n              password: hashedPassword,\n              roles: [_models_user__WEBPACK_IMPORTED_MODULE_0__[\"userRoles\"].USER]\n            });\n            _context2.prev = 4;\n            _context2.next = 7;\n            return user.save();\n\n          case 7:\n            user = _context2.sent;\n            res.status(201).send(user);\n            _context2.next = 15;\n            break;\n\n          case 11:\n            _context2.prev = 11;\n            _context2.t0 = _context2[\"catch\"](4);\n\n            if (_context2.t0.name === 'MongoError' && _context2.t0.code === 11000) {\n              res.status(409).send({\n                error: \"That email address is already registered.\"\n              });\n            }\n\n            res.status(500).send(_context2.t0);\n\n          case 15:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[4, 11]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);\n\n//# sourceURL=webpack:///./src/controllers/SecurityController.js?");

/***/ }),

/***/ "./src/controllers/UserController.js":
/*!*******************************************!*\
  !*** ./src/controllers/UserController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user */ \"./src/models/user.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar controller = {};\n\ncontroller.update =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.user.id, req.body.user, {\n              \"new\": true\n            });\n\n          case 3:\n            user = _context.sent;\n\n            if (!user) {\n              res.status(400).send({\n                error: \"Update failed.\"\n              });\n            }\n\n            res.send(user);\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            res.status(400).send({\n              error: \"Server error, update failed.\"\n            });\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);\n\n//# sourceURL=webpack:///./src/controllers/UserController.js?");

/***/ }),

/***/ "./src/database.js":
/*!*************************!*\
  !*** ./src/database.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar connectionString = \"mongodb://\".concat(process.env.APP_DB_USERNAME, \":\").concat(process.env.APP_DB_PASSWORD, \"@\").concat(process.env.APP_DB_HOST, \":\").concat(process.env.APP_DB_PORT, \"/\").concat(process.env.APP_DB_NAME);\nvar db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(connectionString, {\n  useNewUrlParser: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);\n\n//# sourceURL=webpack:///./src/database.js?");

/***/ }),

/***/ "./src/models/bot.js":
/*!***************************!*\
  !*** ./src/models/bot.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Bot', new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true,\n    max: 100\n  },\n  url: {\n    type: String,\n    lowercase: true,\n    required: true\n  },\n  owner: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    ref: 'User'\n  }\n}, {\n  timestamps: true\n})));\n\n//# sourceURL=webpack:///./src/models/bot.js?");

/***/ }),

/***/ "./src/models/user.js":
/*!****************************!*\
  !*** ./src/models/user.js ***!
  \****************************/
/*! exports provided: userRoles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userRoles\", function() { return userRoles; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar userRoles = {\n  USER: 'user',\n  ADMINISTRTOR: 'admin'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true,\n    max: 100\n  },\n  email: {\n    type: String,\n    lowercase: true,\n    required: true,\n    unique: true,\n    index: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  enabled: {\n    type: Boolean,\n    \"default\": true\n  },\n  roles: [{\n    type: String,\n    \"enum\": [userRoles.USER, userRoles.ADMINISTRTOR]\n  }]\n}, {\n  timestamps: true\n})));\n\n//# sourceURL=webpack:///./src/models/user.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_BotController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/BotController */ \"./src/controllers/BotController.js\");\n/* harmony import */ var _controllers_SecurityController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/SecurityController */ \"./src/controllers/SecurityController.js\");\n/* harmony import */ var _controllers_UserController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/UserController */ \"./src/controllers/UserController.js\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.post('/bot', passport__WEBPACK_IMPORTED_MODULE_4___default.a.authenticate('jwt', {\n  session: false\n}), _controllers_BotController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.patch('/bot', passport__WEBPACK_IMPORTED_MODULE_4___default.a.authenticate('jwt', {\n  session: false\n}), _controllers_BotController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update);\nrouter.patch('/user', passport__WEBPACK_IMPORTED_MODULE_4___default.a.authenticate('jwt', {\n  session: false\n}), _controllers_UserController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].update);\nrouter.get('/protected', passport__WEBPACK_IMPORTED_MODULE_4___default.a.authenticate('jwt', {\n  session: false\n}), _controllers_BotController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].index);\nrouter.post('/authenticate', _controllers_SecurityController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].authenticate);\nrouter.post('/register', _controllers_SecurityController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/security.js":
/*!*************************!*\
  !*** ./src/security.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/user */ \"./src/models/user.js\");\n\n\nvar opts = {\n  jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_0__[\"ExtractJwt\"].fromAuthHeaderAsBearerToken(),\n  secretOrKey: process.env.APP_SECRET\n};\nvar securityStrategy = new passport_jwt__WEBPACK_IMPORTED_MODULE_0__[\"Strategy\"](opts, function (payload, done) {\n  _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n    email: payload.data.email\n  }, function (err, user) {\n    if (err) {\n      return done(null, false);\n    }\n\n    if (user) {\n      return done(null, user);\n    }\n\n    return done(null, false);\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (securityStrategy);\n\n//# sourceURL=webpack:///./src/security.js?");

/***/ }),

/***/ "./src/services/security/permitter.js":
/*!********************************************!*\
  !*** ./src/services/security/permitter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var accesscontrol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accesscontrol */ \"accesscontrol\");\n/* harmony import */ var accesscontrol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accesscontrol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _permitters_basePermitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permitters/basePermitter */ \"./src/services/security/permitters/basePermitter.js\");\n/* harmony import */ var _permitters_botPermitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permitters/botPermitter */ \"./src/services/security/permitters/botPermitter.js\");\n/* harmony import */ var _permitters_userPermitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permitters/userPermitter */ \"./src/services/security/permitters/userPermitter.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar permissions = {\n  admin: {\n    bot: {\n      'create:any': ['*'],\n      'read:any': ['*'],\n      'update:any': ['*'],\n      'delete:any': ['*']\n    },\n    user: {\n      'create:any': ['*'],\n      'read:any': ['*'],\n      'update:any': ['*'],\n      'delete:any': ['*']\n    }\n  },\n  user: {\n    bot: {\n      'create:own': ['*'],\n      'read:own': ['*'],\n      'update:own': ['*', '!id'],\n      'delete:own': ['*'],\n      'create:any': [],\n      'read:any': ['*'],\n      'update:any': [],\n      'delete:any': []\n    },\n    user: {\n      'create:own': ['*'],\n      'read:own': ['*'],\n      'update:own': ['*', '!id'],\n      'delete:own': [],\n      'create:any': [],\n      'read:any': ['*'],\n      'update:any': [],\n      'delete:any': []\n    }\n  }\n};\n\nvar Permitter =\n/*#__PURE__*/\nfunction () {\n  function Permitter() {\n    _classCallCheck(this, Permitter);\n\n    this.permitters = [];\n  }\n\n  _createClass(Permitter, [{\n    key: \"register\",\n    value: function register(permitter) {\n      if (false === permitter instanceof _permitters_basePermitter__WEBPACK_IMPORTED_MODULE_1__[\"BasePermitter\"]) {\n        return;\n      }\n\n      this.permitters.push(permitter);\n    }\n  }, {\n    key: \"getPermitter\",\n    value: function getPermitter(modelName) {\n      for (var i = 0; i < this.permitters.length; i++) {\n        if (this.permitters[i].key === modelName) {\n          return this.permitters[i];\n        }\n      }\n\n      console.log(\"There is no permitter for \\\"\".concat(modelName, \"\\\".\"));\n    }\n  }]);\n\n  return Permitter;\n}();\n\nvar ac = new accesscontrol__WEBPACK_IMPORTED_MODULE_0___default.a(permissions);\nvar permitter = new Permitter();\npermitter.register(new _permitters_botPermitter__WEBPACK_IMPORTED_MODULE_2__[\"BotPermitter\"](ac));\npermitter.register(new _permitters_userPermitter__WEBPACK_IMPORTED_MODULE_3__[\"UserPermitter\"](ac));\n/* harmony default export */ __webpack_exports__[\"default\"] = (permitter);\n\n//# sourceURL=webpack:///./src/services/security/permitter.js?");

/***/ }),

/***/ "./src/services/security/permitters/basePermitter.js":
/*!***********************************************************!*\
  !*** ./src/services/security/permitters/basePermitter.js ***!
  \***********************************************************/
/*! exports provided: BasePermitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BasePermitter\", function() { return BasePermitter; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BasePermitter =\n/*#__PURE__*/\nfunction () {\n  function BasePermitter(key, ac) {\n    _classCallCheck(this, BasePermitter);\n\n    this.key = key;\n    this.ac = ac;\n  }\n\n  _createClass(BasePermitter, [{\n    key: \"isOwn\",\n    value: function isOwn(obj, user) {\n      return true;\n    }\n  }, {\n    key: \"canCreate\",\n    value: function canCreate(obj, user) {\n      for (var i = 0; i < user.roles.length; i++) {\n        var role = user.roles[i];\n        var permission = this.isOwn(obj, user) ? this.ac.can(role).createOwn(this.key) : this.ac.can(role).createAny(this.key);\n\n        if (permission.granted) {\n          return true;\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"canRead\",\n    value: function canRead(obj, user) {\n      for (var i = 0; i < user.roles.length; i++) {\n        var role = user.roles[i];\n        var permission = this.isOwn(obj, user) ? this.ac.can(role).readOwn(this.key) : this.ac.can(role).readAny(this.key);\n\n        if (permission.granted) {\n          return true;\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"canUpdate\",\n    value: function canUpdate(obj, user) {\n      for (var i = 0; i < user.roles.length; i++) {\n        var role = user.roles[i];\n        var permission = this.isOwn(obj, user) ? this.ac.can(role).updateOwn(this.key) : this.ac.can(role).updateAny(this.key);\n\n        if (permission.granted) {\n          return true;\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"canDelete\",\n    value: function canDelete(obj, user) {\n      for (var i = 0; i < user.roles.length; i++) {\n        var role = user.roles[i];\n        var permission = this.isOwn(obj, user) ? this.ac.can(role).deleteOwn(this.key) : this.ac.can(role).deleteAny(this.key);\n\n        if (permission.granted) {\n          return true;\n        }\n      }\n\n      return false;\n    }\n  }]);\n\n  return BasePermitter;\n}();\n\n//# sourceURL=webpack:///./src/services/security/permitters/basePermitter.js?");

/***/ }),

/***/ "./src/services/security/permitters/botPermitter.js":
/*!**********************************************************!*\
  !*** ./src/services/security/permitters/botPermitter.js ***!
  \**********************************************************/
/*! exports provided: BotPermitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BotPermitter\", function() { return BotPermitter; });\n/* harmony import */ var _basePermitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basePermitter */ \"./src/services/security/permitters/basePermitter.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar BotPermitter =\n/*#__PURE__*/\nfunction (_BasePermitter) {\n  _inherits(BotPermitter, _BasePermitter);\n\n  function BotPermitter(ac) {\n    _classCallCheck(this, BotPermitter);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(BotPermitter).call(this, 'bot', ac));\n  }\n\n  _createClass(BotPermitter, [{\n    key: \"isOwn\",\n    value: function isOwn(obj, user) {\n      return obj.owner.id === user.id;\n    }\n  }]);\n\n  return BotPermitter;\n}(_basePermitter__WEBPACK_IMPORTED_MODULE_0__[\"BasePermitter\"]);\n\n//# sourceURL=webpack:///./src/services/security/permitters/botPermitter.js?");

/***/ }),

/***/ "./src/services/security/permitters/userPermitter.js":
/*!***********************************************************!*\
  !*** ./src/services/security/permitters/userPermitter.js ***!
  \***********************************************************/
/*! exports provided: UserPermitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserPermitter\", function() { return UserPermitter; });\n/* harmony import */ var _basePermitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basePermitter */ \"./src/services/security/permitters/basePermitter.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar UserPermitter =\n/*#__PURE__*/\nfunction (_BasePermitter) {\n  _inherits(UserPermitter, _BasePermitter);\n\n  function UserPermitter(ac) {\n    _classCallCheck(this, UserPermitter);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(UserPermitter).call(this, 'user', ac));\n  }\n\n  _createClass(UserPermitter, [{\n    key: \"isOwn\",\n    value: function isOwn(obj, user) {\n      return obj.id === user.id;\n    }\n  }]);\n\n  return UserPermitter;\n}(_basePermitter__WEBPACK_IMPORTED_MODULE_0__[\"BasePermitter\"]);\n\n//# sourceURL=webpack:///./src/services/security/permitters/userPermitter.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "accesscontrol":
/*!********************************!*\
  !*** external "accesscontrol" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"accesscontrol\");\n\n//# sourceURL=webpack:///external_%22accesscontrol%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ })

/******/ });