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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTM0NGI5NGMyYWQ0MWYzYzhiZDYiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3RzL3NyYy9oZWxsby50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdHMvc3JjL2dyYW1tYXIvY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNURzQztBQUV0QyxDQUFDO0lBQ0csSUFBSSxDQUFDLEdBQVUsS0FBSyxDQUFDO0lBQ3JCLENBQUMsR0FBRyxLQUFLLENBQUM7SUFFVixJQUFJLENBQUMsR0FBVSxHQUFHLENBQUM7SUFDbkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVOLElBQUksQ0FBQyxHQUFXLEtBQUssQ0FBQztJQUN0QixDQUFDLEdBQUcsSUFBSSxDQUFDO0lBR1QsSUFBSSxJQUFJLEdBQVUsSUFBSSxDQUFDO0lBQ3ZCLElBQUksR0FBRyxHQUFVLENBQUMsQ0FBQztJQUNuQixJQUFJLEdBQUcsR0FBVSxTQUFTLENBQUM7SUFDM0IsSUFBSSxFQUFFLEdBQVUscUJBQXFCLElBQUksZUFBZSxHQUFHLEdBQUcsQ0FBQztrQ0FDakMsR0FBRyxFQUFFLENBQUM7SUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJ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Q0FBQyxDQUFDO1FBQzVGLENBQUM7S0FDSjtJQUdELElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ2QsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsS0FBSztRQUNYLEdBQUcsRUFBRSxFQUFFO0tBQ1YsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxxQkFBcUI7SUFDckIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2YsQ0FBQztBQUVhO0lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEzNDRiOTRjMmFkNDFmM2M4YmQ2IiwiXHJcbmltcG9ydCBteUNsYXNzIGZyb20gJy4vZ3JhbW1hci9jbGFzcyc7XHJcblxyXG57XHJcbiAgICBsZXQgczpzdHJpbmcgPSAnMTIzJztcclxuICAgIHMgPSAnNDU2JztcclxuXHJcbiAgICBsZXQgbjpudW1iZXIgPSAxMjM7XHJcbiAgICBuID0gMjtcclxuXHJcbiAgICBsZXQgYjpib29sZWFuID0gZmFsc2U7XHJcbiAgICBiID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgbGV0IG5hbWU6c3RyaW5nID0gJ2FkJztcclxuICAgIGxldCBhZ2U6bnVtYmVyID0gMjtcclxuICAgIGxldCB0ZWM6c3RyaW5nID0gJ3RlYWNoZXInO1xyXG4gICAgbGV0IHNzOnN0cmluZyA9IGBoZWxsbywgbXkgbmFtZSBpcyAke25hbWV9LCBteSBhZ2UgaXMgJHthZ2UgKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICwgbXkgam9iIGlzICR7dGVjfWA7XHJcbiAgICBjb25zb2xlLmxvZyhzcyk7XHJcblxyXG5cclxuICAgIGxldCBhcnI6bnVtYmVyW10gPSBbMTIzXTtcclxuICAgIGxldCBhcnJUOiBBcnJheTxzdHJpbmc+ID0gWyc0NTYnXTtcclxuXHJcbiAgICBsZXQgdHVwbGU6W3N0cmluZywgbnVtYmVyXSA9IFsnMTIzJywgMTIzXTtcclxuICAgIHR1cGxlWzJdID0gNDU2O1xyXG4gICAgdHVwbGVbM10gPSAnNDU2JztcclxuICAgIC8vdHVwbGVbNF0gPSB0cnVlOy8v5oql6ZSZXHJcblxyXG5cclxuICAgIGVudW0gQ29sb3J7XHJcbiAgICAgICAgJ3JlZCcgPSAyLFxyXG4gICAgICAgICdncmVlbicgPSA5OSxcclxuICAgICAgICAnYmxhY2snID0gMTAwLFxyXG4gICAgICAgICdmZmYnID0gMTAxXHJcbiAgICB9XHJcbiAgICBsZXQgYzpDb2xvciA9IENvbG9yLmdyZWVuO1xyXG4gICAgbGV0IGNjOiBzdHJpbmcgPSBDb2xvcls5OV07XHJcbiAgICBjb25zb2xlLmxvZyhgJHtjfT09PSR7Y2N9YCk7XHJcblxyXG5cclxuICAgIC8vYW55XHJcbiAgICBsZXQgbm90c3VyZTogYW55ID0gNDtcclxuICAgIGNvbnNvbGUubG9nKG5vdHN1cmUudG9GaXhlZCg0KSk7XHJcbiAgICBub3RzdXJlID0gJzQ1Nic7XHJcbiAgICBjb25zb2xlLmxvZyhub3RzdXJlLnN1YnN0cmluZygxKSk7XHJcbiAgICBub3RzdXJlID0gZmFsc2U7XHJcbiAgICBub3RzdXJlID0ge307XHJcblxyXG5cclxuICAgIGxldCBsaXN0OiBhbnlbXSA9IFsxLCB0cnVlLCBcImZyZWVcIl07XHJcblxyXG4gICAgbGlzdFsxXSA9IDEwMDtcclxuXHJcbiAgICBsZXQgYW55MTogYW55ID0gJ2FueSc7XHJcbiAgICBsZXQgYW55MV9sZW5ndGg6IG51bWJlciA9ICg8c3RyaW5nPmFueTEpLmxlbmd0aDtcclxuICAgIGxldCBhbnkyX2xlbmd0aDogbnVtYmVyID0gKGFueTEgYXMgc3RyaW5nKS5pbmRleE9mKCduJyk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbm15Q2xhc3MoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvdHMvc3JjL2hlbGxvLnRzIiwie1xyXG4gICAgaW50ZXJmYWNlIE5vcm1hbCB7XHJcbiAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHR5cGU6IHN0cmluZztcclxuICAgICAgICBhZ2U/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwdWJsaWMo6buY6K6kKTrku7vkvZXlnLDmlrnpg73og73orr/pl65cclxuICAgICAqIHByaXZhdGU6IOWPquiDveWcqOWjsOaYjuexu+eahOWGhemDqOiuv+mXru+8jOS7lueahOWunuS+i+WMluWvueixoeS5n+aXoOazleiuv+mXrlxyXG4gICAgICogcHJvdGVjdGVkOiDlj6rog73lnKjlo7DmmI7nsbvnmoTlhoXpg6jmiJbogIXku5bnmoTlrZDnsbvlhoXpg6jorr/pl65cclxuICAgICAqICovXHJcbiAgICBjbGFzcyBBbmltYWxze1xyXG4gICAgICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHR5cGU6IHN0cmluZztcclxuICAgICAgICBwcm90ZWN0ZWQgYWdlPzogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGFuaW1hbDogTm9ybWFsKXtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gYW5pbWFsLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IGFuaW1hbC50eXBlO1xyXG4gICAgICAgICAgICB0aGlzLmFnZSA9IGFuaW1hbC5hZ2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBtb3ZlKGRpczogbnVtYmVyID0gNSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuYWdlfSBhZ2UgJHt0aGlzLm5hbWV9IGhhcyBydW4gPT0+ICR7ZGlzfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgYW5pbWFsID0gbmV3IEFuaW1hbHMoe1xyXG4gICAgICAgIG5hbWU6ICdhJyxcclxuICAgICAgICB0eXBlOiAnYWEnLFxyXG4gICAgICAgIGFnZTogMTJcclxuICAgIH0pO1xyXG4gICAgLy9hbmltYWwubmFtZeaIluiAhWFubmltYWwuYWdl5oql6ZSZXHJcbiAgICBjbGFzcyBEb2cgZXh0ZW5kcyBBbmltYWxze1xyXG4gICAgICAgIHdlaWdodDogbnVtYmVyO1xyXG4gICAgICAgIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyOy8v5LiA5qyh6LWL5YC877yM5LiN5Y+v5L+u5pS5XHJcbiAgICAgICAgY29uc3RydWN0b3IoZG9nOiBOb3JtYWwsIHdlaWdodDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICBzdXBlcihkb2cpO1xyXG4gICAgICAgICAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL0BvdmVycmlkZVxyXG4gICAgICAgIG1vdmUoZGlzOm51bWJlciA9IDEwKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJHt0aGlzLmFnZX0gYWdlLCAke3RoaXMud2VpZ2h0fSBrZywgJHt0aGlzLm5hbWV9IG5hbWUgaGFzIHJ1biA9PT4gJHtkaXN9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuYWdlfSBhZ2UsICR7dGhpcy53ZWlnaHR9IGtnLCAke3RoaXMudHlwZX0gdHlwZSBoYXMgcnVuID09PiAke2Rpc31gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxldCBkb2cgPSBuZXcgRG9nKHtcclxuICAgICAgICBuYW1lOiAnZG9nMScsXHJcbiAgICAgICAgdHlwZTogJ2RvZycsXHJcbiAgICAgICAgYWdlOiAxMFxyXG4gICAgfSwgMTUsIDIwKTtcclxuICAgIC8vZG9nLm5hbWXmiJbogIVkb2cuYWdl5oql6ZSZXHJcbiAgICBkb2cubW92ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBteUNsYXNzKCl7XHJcbiAgICBjb25zb2xlLmxvZygxMjMpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3RzL3NyYy9ncmFtbWFyL2NsYXNzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==