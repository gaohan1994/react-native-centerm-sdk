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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./src/common */ \"./src/common/index.ts\");\nexports.request = common_1.request;\nvar component_1 = __webpack_require__(/*! ./src/component */ \"./src/component/index.ts\");\nexports.Button = component_1.Button;\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar request_1 = __webpack_require__(/*! ./request */ \"./src/common/request.ts\");\nexports.request = request_1.request;\n\n\n//# sourceURL=webpack:///./src/common/index.ts?");

/***/ }),

/***/ "./src/common/request.ts":
/*!*******************************!*\
  !*** ./src/common/request.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * @param message string 打印信息\n */\nconst ConsoleUtil = (message, title) => {\n    if (title) {\n        console.log(`---------------------- ${title} ----------------------`);\n    }\n    console.log(message);\n    if (title) {\n        console.log(`---------------------- ${title}结束 ----------------------`);\n    }\n};\n/**\n * 默认错误处理函数\n * @param error RequsetError\n */\nconst defaultErrorCallback = (error) => __awaiter(this, void 0, void 0, function* () {\n    ConsoleUtil(error, '[ERROR]');\n});\nexports.request = (url, ...args) => __awaiter(this, void 0, void 0, function* () {\n    const argByType = {};\n    const functions = [];\n    let callback;\n    let errorCallback = defaultErrorCallback;\n    args.forEach(arg => {\n        if (typeof arg === 'function') {\n            functions.push(arg);\n        }\n        else {\n            argByType[typeof arg] = arg;\n        }\n    });\n    /**\n     *  判断长度 第一个是 callback 第二个是 errorcallback\n     */\n    if (functions && functions.length > 0) {\n        if (functions.length === 1) {\n            callback = functions[0];\n        }\n        else if (functions.length === 2) {\n            callback = functions[0];\n            errorCallback = functions[1];\n        }\n    }\n    const httpMethod = (argByType.string || 'GET').toUpperCase();\n    const params = argByType.object || {};\n    let options = {\n        /* 默认method */\n        method: httpMethod,\n        /* 默认headers */\n        headers: {\n            'Content-Type': 'application/json',\n        }\n    };\n    ConsoleUtil(params, '请求报文');\n    if (options.method) {\n        if (options.method.toUpperCase() !== 'GET') {\n            options.body = params\n                ? JSON.stringify(params)\n                : '';\n        }\n    }\n    try {\n        return fetch(url, options)\n            .then((response) => response.json())\n            .then((responseJson) => {\n            ConsoleUtil(responseJson, '响应报文');\n            if (callback) {\n                callback(responseJson);\n            }\n            return responseJson;\n        })\n            .catch((e) => {\n            errorCallback(e);\n            return false;\n        });\n    }\n    catch (error) {\n        errorCallback(error);\n    }\n});\n\n\n//# sourceURL=webpack:///./src/common/request.ts?");

/***/ }),

/***/ "./src/component/Button/Button.tsx":
/*!*****************************************!*\
  !*** ./src/component/Button/Button.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst react_native_1 = __webpack_require__(/*! react-native */ \"react-native\");\nconst Theme_1 = __webpack_require__(/*! ../Theme */ \"./src/component/Theme/index.ts\");\nconst { width } = react_native_1.Dimensions.get('window');\nconst ButtonConfig = {\n    big: {\n        height: Theme_1.ScreenUtil.autoWidth(45),\n        width: width * 0.8,\n    },\n    normal: {\n        height: Theme_1.ScreenUtil.autoWidth(45),\n        width: width * 0.4,\n    },\n    small: {\n        paddingHorizontal: Theme_1.ScreenUtil.autoWidth(10),\n        paddingVertical: Theme_1.ScreenUtil.autoWidth(8),\n    }\n};\nconst styles = {\n    button: (type, theme) => ({\n        flexDirection: 'row',\n        justifyContent: 'center',\n        alignItems: 'center',\n        borderColor: theme.primary,\n        backgroundColor: type === 'primary' ? theme.primary : 'transparent',\n        marginTop: Theme_1.ScreenUtil.autoWidth(5),\n    }),\n    size: (size) => {\n        switch (size) {\n            case 'big':\n                return Object.assign({}, ButtonConfig.big);\n            case 'normal':\n                return Object.assign({}, ButtonConfig.normal);\n            case 'small':\n                return Object.assign({}, ButtonConfig.small);\n            default:\n                return Object.assign({}, ButtonConfig.big);\n        }\n    },\n    radius: (radius) => {\n        if (radius === true) {\n            return { borderRadius: Theme_1.ScreenUtil.autoWidth(22) };\n        }\n        else {\n            return {};\n        }\n    },\n    shadow: {\n        shadowOffset: { width: 2, height: 2 },\n        shadowOpacity: 0.6,\n        shadowRadius: 6,\n        elevation: 10\n    },\n    title: (type, size, theme) => ({\n        color: type === 'primary' ? 'white' : theme.primary,\n        fontSize: Theme_1.ScreenUtil.setSpText(size !== 'small' ? 15 : 12),\n        textAlign: 'center',\n    }),\n    loadding: {\n        marginVertical: 2,\n    }\n};\nconst ButtonDefaultProps = {\n    title: '',\n    type: 'primary',\n    size: 'big',\n    radius: true,\n    loading: false,\n};\nconst defaultLoadingProps = (type, theme) => ({\n    color: type === 'primary' ? 'white' : theme && theme.primary || '',\n    size: 'small',\n});\nclass Button extends react_1.default.Component {\n    constructor() {\n        super(...arguments);\n        this.buildStyle = () => {\n            const { type, size, radius, theme, style = {} } = this.props;\n            const buttonStyle = Object.assign({}, styles.button(type, theme), styles.size(size), styles.radius(radius), styles.shadow, { style });\n            return buttonStyle;\n        };\n        this.buildTextStyle = () => {\n            const { type, size, theme, titleStyle = {} } = this.props;\n            const textStyle = Object.assign({}, styles.title(type, size, theme), { titleStyle });\n            return textStyle;\n        };\n    }\n    render() {\n        const _a = this.props, { type, theme, loading, loadingStyle, title, style } = _a, rest = __rest(_a, [\"type\", \"theme\", \"loading\", \"loadingStyle\", \"title\", \"style\"]);\n        const loadingProps = Object.assign({}, defaultLoadingProps(type, theme));\n        return (react_1.default.createElement(react_native_1.TouchableOpacity, Object.assign({ style: this.buildStyle() }, rest),\n            loading && (react_1.default.createElement(react_native_1.ActivityIndicator, Object.assign({ style: [styles.loading, loadingStyle] }, loadingProps))),\n            !loading && !!title && (react_1.default.createElement(react_native_1.Text, { style: this.buildTextStyle() }, title))));\n    }\n}\nButton.defaultProps = ButtonDefaultProps;\nexports.default = Theme_1.ThemeHoc(Button, 'Button');\n\n\n//# sourceURL=webpack:///./src/component/Button/Button.tsx?");

/***/ }),

/***/ "./src/component/Button/index.ts":
/*!***************************************!*\
  !*** ./src/component/Button/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Button_1 = __webpack_require__(/*! ./Button */ \"./src/component/Button/Button.tsx\");\nexports.Button = Button_1.default;\n\n\n//# sourceURL=webpack:///./src/component/Button/index.ts?");

/***/ }),

/***/ "./src/component/Theme/Colors.ts":
/*!***************************************!*\
  !*** ./src/component/Theme/Colors.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Colors = {\n    primary: '#1273e4'\n};\n\n\n//# sourceURL=webpack:///./src/component/Theme/Colors.ts?");

/***/ }),

/***/ "./src/component/Theme/ScreenUtil.ts":
/*!*******************************************!*\
  !*** ./src/component/Theme/ScreenUtil.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_native_1 = __webpack_require__(/*! react-native */ \"react-native\");\nconst { width, height } = react_native_1.Dimensions.get('window');\n/**\n * @todo 全局 Screen Helper\n *\n * @class ScreenUtil\n */\nclass ScreenUtil {\n    constructor() {\n        /**\n         * @param {uiWidth} 设计图的宽度\n         * @param {uiHeight} 设计图的高度\n         */\n        this.uiWidth = 375;\n        this.uiHeight = 667;\n        /**\n         * @param {X_WIDTH} iphoneX width\n         * @param {X_HEIGHT} iphoneX height\n         */\n        this.X_WIDTH = 375;\n        this.X_HEIGHT = 812;\n        /**\n         * @param {screenWidth} 设备屏幕宽度\n         * @param {screenHeith} 设备屏幕高度\n         */\n        this.screenWidth = react_native_1.Dimensions.get('window').width;\n        this.screenHeith = react_native_1.Dimensions.get('window').height;\n        /**\n         * @param {widthRadio} 宽度适配\n         * @param {heightRadio} 高度适配\n         */\n        this.scale = Math.min(react_native_1.Dimensions.get('window').height / this.uiHeight, react_native_1.Dimensions.get('window').width / this.uiWidth);\n        this.widthRadio = react_native_1.Dimensions.get('window').width / this.uiWidth;\n        this.heightRadio = react_native_1.Dimensions.get('window').height / this.uiHeight;\n        /**\n         * @param {widthRadio} iphoneX宽度适配\n         * @param {heightRadio} iphoneX高度适配\n         */\n        this.scaleIPX = Math.min(react_native_1.Dimensions.get('window').height / this.X_HEIGHT, react_native_1.Dimensions.get('window').width / this.X_WIDTH);\n        this.widthRadioIPX = react_native_1.Dimensions.get('window').width / this.X_WIDTH;\n        this.heightRadioIPX = react_native_1.Dimensions.get('window').height / this.X_HEIGHT;\n        this.pixel = 1 / react_native_1.PixelRatio.get();\n        this.pixelRatio = react_native_1.PixelRatio.get();\n        this.fontScale = react_native_1.PixelRatio.getFontScale();\n        /**\n         * @todo 宽度适配，例如我的设计稿某个样式宽度是50pt，那么使用就是：ScreenUtil.autowidth(50)\n         */\n        this.autoWidth = (value) => {\n            return (this.isIphoneX() ? this.widthRadioIPX : this.widthRadio) * value;\n        };\n        /**\n         * @todo 高度适配，例如我的设计稿某个样式高度是50pt，那么使用就是：ScreenUtil.autoheight(50)\n         */\n        this.autoHeight = (value) => {\n            return (this.isIphoneX() ? this.heightRadioIPX : this.heightRadio) * value;\n        };\n        /*字体大小适配，例如我的设计稿字体大小是17pt，那么使用就是：ScreenUtil.setSpText(17)*/\n        this.setSpText = (number) => {\n            number = Math.round((number * (this.isIphoneX() ? this.scaleIPX : this.scale) + 0.5) * this.pixelRatio / this.fontScale);\n            return number / react_native_1.PixelRatio.get();\n        };\n        // 目前iPhone X序列手机的适配算法：高宽比先转换为字符串，截取前三位，转换为number类型 再乘以100\n        this.isIphoneX = () => {\n            return (react_native_1.Platform.OS === 'ios' && (Number(((height / width) + \"\").substr(0, 4)) * 100) === 216);\n        };\n        this.safeAreaView = () => {\n            if (this.isIphoneX() === true) {\n                return { paddingTop: this.autoHeight(44), paddingBottom: this.autoHeight(34) };\n            }\n            else {\n                return {};\n            }\n        };\n    }\n}\nexports.default = new ScreenUtil();\n\n\n//# sourceURL=webpack:///./src/component/Theme/ScreenUtil.ts?");

/***/ }),

/***/ "./src/component/Theme/ThemeHoc.tsx":
/*!******************************************!*\
  !*** ./src/component/Theme/ThemeHoc.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/component/Theme/index.ts\");\nconst isClassComponent = (Component) => Boolean(Component.prototype && Component.prototype.isReactComponent);\nconst ThemeHoc = (WrappedComponent, ThemeKey) => {\n    class ThemeComponent extends react_1.default.Component {\n        render() {\n            const _a = this.props, { forwardedRef, children } = _a, rest = __rest(_a, [\"forwardedRef\", \"children\"]);\n            return (react_1.default.createElement(index_1.ThemeConsumer, null, (context) => {\n                console.log('context: ', context);\n                const props = Object.assign({}, rest, { children, theme: context && context.theme || index_1.Colors });\n                if (isClassComponent(WrappedComponent)) {\n                    return react_1.default.createElement(WrappedComponent, Object.assign({ ref: forwardedRef }, props));\n                }\n                return react_1.default.createElement(WrappedComponent, Object.assign({}, props));\n            }));\n        }\n    }\n    // const name = ThemeKey \n    //   ? `Theme.${ThemeKey}`\n    //   : `Theme.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;\n    // ThemeComponent['displayName'] = name;\n    return ThemeComponent;\n};\nexports.default = ThemeHoc;\n\n\n//# sourceURL=webpack:///./src/component/Theme/ThemeHoc.tsx?");

/***/ }),

/***/ "./src/component/Theme/ThemeProvider.tsx":
/*!***********************************************!*\
  !*** ./src/component/Theme/ThemeProvider.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/component/Theme/index.ts\");\nconst ThemeContext = react_1.default.createContext({});\nexports.ThemeContext = ThemeContext;\nclass ThemeProvider extends react_1.default.Component {\n    render() {\n        return (react_1.default.createElement(ThemeContext.Provider, { value: { theme: index_1.Colors } }, this.props.children));\n    }\n}\nexports.default = ThemeProvider;\nconst ThemeConsumer = ThemeContext.Consumer;\nexports.ThemeConsumer = ThemeConsumer;\n\n\n//# sourceURL=webpack:///./src/component/Theme/ThemeProvider.tsx?");

/***/ }),

/***/ "./src/component/Theme/index.ts":
/*!**************************************!*\
  !*** ./src/component/Theme/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Colors_1 = __webpack_require__(/*! ./Colors */ \"./src/component/Theme/Colors.ts\");\nexports.Colors = Colors_1.Colors;\nconst ThemeProvider_1 = __webpack_require__(/*! ./ThemeProvider */ \"./src/component/Theme/ThemeProvider.tsx\");\nexports.ThemeProvider = ThemeProvider_1.default;\nexports.ThemeConsumer = ThemeProvider_1.ThemeConsumer;\nexports.ThemeContext = ThemeProvider_1.ThemeContext;\nconst ThemeHoc_1 = __webpack_require__(/*! ./ThemeHoc */ \"./src/component/Theme/ThemeHoc.tsx\");\nexports.ThemeHoc = ThemeHoc_1.default;\nconst ScreenUtil_1 = __webpack_require__(/*! ./ScreenUtil */ \"./src/component/Theme/ScreenUtil.ts\");\nexports.ScreenUtil = ScreenUtil_1.default;\n\n\n//# sourceURL=webpack:///./src/component/Theme/index.ts?");

/***/ }),

/***/ "./src/component/index.ts":
/*!********************************!*\
  !*** ./src/component/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Button_1 = __webpack_require__(/*! ./Button */ \"./src/component/Button/index.ts\");\nexports.Button = Button_1.Button;\n\n\n//# sourceURL=webpack:///./src/component/index.ts?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = react;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = react-native;\n\n//# sourceURL=webpack:///external_%22react-native%22?");

/***/ })

/******/ });