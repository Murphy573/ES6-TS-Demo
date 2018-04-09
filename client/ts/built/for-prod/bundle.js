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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grammar_class__ = __webpack_require__(1);

{
    let s = '123';
    s = '456';
    let n = 123;
    n = 2;
    let b = false;
    b = true;
    let name = 'ad';
    let age = 2;
    let tec = 'teacher';
    let ss = `hello, my name is ${name}, my age is ${age + 1}
                    , my job is ${tec}`;
    console.log(ss);
    let arr = [123];
    let arrT = ['456'];
    let tuple = ['123', 123];
    tuple[2] = 456;
    tuple[3] = '456';
    //tuple[4] = true;//报错
    let Color;
    (function (Color) {
        Color[Color["red"] = 2] = "red";
        Color[Color["green"] = 99] = "green";
        Color[Color["black"] = 100] = "black";
        Color[Color["fff"] = 101] = "fff";
    })(Color || (Color = {}));
    let c = Color.green;
    let cc = Color[99];
    console.log(`${c}===${cc}`);
    //any
    let notsure = 4;
    console.log(notsure.toFixed(4));
    notsure = '456';
    console.log(notsure.substring(1));
    notsure = false;
    notsure = {};
    let list = [1, true, "free"];
    list[1] = 100;
    let any1 = 'any';
    let any1_length = any1.length;
    let any2_length = any1.indexOf('n');
}
Object(__WEBPACK_IMPORTED_MODULE_0__grammar_class__["a" /* default */])();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = myClass;
{
    /**
     * public(默认):任何地方都能访问
     * private: 只能在声明类的内部访问，他的实例化对象也无法访问
     * protected: 只能在声明类的内部或者他的子类内部访问
     * */
    class Animals {
        constructor(animal) {
            this.name = animal.name;
            this.type = animal.type;
            this.age = animal.age;
        }
        ;
        move(dis = 5) {
            console.log(`${this.age} age ${this.name} has run ==> ${dis}`);
        }
    }
    let animal = new Animals({
        name: 'a',
        type: 'aa',
        age: 12
    });
    //animal.name或者annimal.age报错
    class Dog extends Animals {
        constructor(dog, weight, height) {
            super(dog);
            this.weight = weight;
            this.height = height;
        }
        ;
        //@override
        move(dis = 10) {
            //console.log(`${this.age} age, ${this.weight} kg, ${this.name} name has run ==> ${dis}`);
            console.log(`${this.age} age, ${this.weight} kg, ${this.type} type has run ==> ${dis}`);
        }
    }
    let dog = new Dog({
        name: 'dog1',
        type: 'dog',
        age: 10
    }, 15, 20);
    //dog.name或者dog.age报错
    dog.move();
}
function myClass() {
    console.log(123);
}


/***/ })
/******/ ]);