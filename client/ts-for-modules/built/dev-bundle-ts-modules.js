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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return People; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animals; });
;
class People {
    constructor(name, age) {
        this.name = name;
        this._age = age;
        console.log(`新建people对象，人名：${this.name}, 年龄：${this._age}`);
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
        console.log(`'` + `${this.name}` + `'的年龄被改为--> ${value}`);
    }
    run(meters) {
        console.log(`${this.name}跑了${meters}公里！`);
    }
}
People.type = 'People';
/**
 * 抽象类：抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
 *          不同于接口，抽象类可以包含成员的实现细节，abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法
 *          抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
 */
class Animals {
    constructor(type) {
        this.type = type;
    } //参数即构造成员
    run(meters) {
        console.log(`${this.type}动物跑了${meters}米`);
    }
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grammer_interface__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grammer_base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grammer_class__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grammer_subclass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grammer_generic__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grammer_namespace__ = __webpack_require__(6);






console.log('开始学习ts!!!');
let a = {
    label: 'a'
};
let b = {
    label: 1,
    count: 3,
    cons(a, b, c) {
        console.log(a + b + 'print at' + c);
    }
};
b.cons(1, '2', new Date());
console.log(a, b, __WEBPACK_IMPORTED_MODULE_0__grammer_interface__["a"]);
Object(__WEBPACK_IMPORTED_MODULE_1__grammer_base__["a" /* default */])();
let jack = new __WEBPACK_IMPORTED_MODULE_2__grammer_class__["b" /* People */]('Jack', 12);
jack.age = 15; //setter
console.log(jack.age); //getter
jack.run(15);
let lucy = new __WEBPACK_IMPORTED_MODULE_3__grammer_subclass__["b" /* Student */]('Lucy', 15, '女', '高三');
lucy.run(10);
let mouse = new __WEBPACK_IMPORTED_MODULE_3__grammer_subclass__["a" /* Mouse */]('老鼠');
mouse.go();
//泛型使用
console.log(__WEBPACK_IMPORTED_MODULE_4__grammer_generic__["a" /* identity */]('myString'));
//namespace
console.log(`面积为：${__WEBPACK_IMPORTED_MODULE_5__grammer_namespace__["a" /* default */].calcSquare(3)}`);
let myShape = new __WEBPACK_IMPORTED_MODULE_5__grammer_namespace__["a" /* default */].MyShape(5, 1);
console.log(`矩形myShape的面积为: ${myShape.calcSquare()}`);
//console.log(identity('myString'), identity<number>(1));


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
let a = 1;

//export default a;
// export let a = 1 


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
    let a = 1;
    let b = 'b';
    let c = !'';
    let str = 'peter';
    console.log(`${str} is a boy!`);
    let num_arr = [1, 2, 3];
    let num_arr1 = [1, 2, 3];
    /**
     * 元组类型：表示一个已知元素数量和类型的数组，各元素的类型不必相同;
     *          当访问一个越界的元素，会使用联合类型替代，如下的例子只能是'数字、字符串、日期'类型中的一种
     * @type {[number , string , Date]}
     */
    let mix_arr = [1, '2', new Date()];
    mix_arr[3] = 1;
    mix_arr[4] = '2';
    mix_arr[5] = new Date().getTime();
    //mix_arr[7] = true;
    for (let mix of mix_arr) {
        console.log(`iterator: logged ${mix}`);
    }
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
        Color[Color["Black"] = 3] = "Black";
    })(Color || (Color = {}));
    let color = Color.Green;
    console.log(`头顶->${color}, 脚底${Color[3]}`);
    let notSure = 4;
    //断言
    let someValue = "this is a string";
    let strLength = someValue.length;
    let _a = { first: 1, a: 2, c: 3 }, { first } = _a, others = __rest(_a, ["first"]);
});
//export default a = 1;//一个文件只能存在一个default 


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Student; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mouse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class__ = __webpack_require__(0);
;

/**
 * public(默认):任何地方都能访问
 * private: 只能在声明类的内部访问，他的实例化对象也无法访问
 * protected: 只能在声明类的内部或者他的子类内部访问
 * */
class Student extends __WEBPACK_IMPORTED_MODULE_0__class__["b" /* People */] {
    constructor(name, age, sex, stage) {
        console.log(Student.type); //继承了People类的静态成员
        super(name, age);
        this._sex = sex;
        this.stage = stage;
    }
    //@override: 重写People的run方法
    run(meters) {
        console.log(this.move());
        console.log(`${this.stage}${this._sex}学生${this.name}跑了${meters}公里！！`);
    }
    //添加私有方法：只能在类内部访问
    move() {
        console.log(`${this.name}起跑了！！！`);
        return 'start';
    }
}
class Mouse extends __WEBPACK_IMPORTED_MODULE_0__class__["a" /* Animals */] {
    move() {
        console.log('start');
    }
    go() {
        this.move(); //子类内部可以访问到父类的protect方法
        this.run(123);
    }
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return identity; });
//泛型
let identity = function (arg) {
    return arg;
};



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var MyNameSpace;
(function (MyNameSpace) {
    MyNameSpace.PI = 3.1415926;
    const DATE_START = '1970-01-01 00:00:00';
    function calcSquare(radius) {
        return MyNameSpace.PI * radius;
    }
    MyNameSpace.calcSquare = calcSquare;
    class MyShape {
        constructor(width = 0, height = 0) {
            this.width = width;
            this.height = height;
        }
        calcSquare() {
            return this.width * this.height;
        }
    }
    MyNameSpace.MyShape = MyShape;
    //export {PI};不能这样导出
})(MyNameSpace || (MyNameSpace = {}));
/*class MyShape {//可以和在命名空间内的定义同时存在

}*/
/* harmony default export */ __webpack_exports__["a"] = (MyNameSpace); //export {MyNameSpace};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDJjZGViMGVmYzU4YTI3OTJiMTAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3RzLWZvci1tb2R1bGVzL3NyYy9ncmFtbWVyL2NsYXNzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC90cy1mb3ItbW9kdWxlcy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3RzLWZvci1tb2R1bGVzL3NyYy9ncmFtbWVyL2ludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdHMtZm9yLW1vZHVsZXMvc3JjL2dyYW1tZXIvYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdHMtZm9yLW1vZHVsZXMvc3JjL2dyYW1tZXIvc3ViY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3RzLWZvci1tb2R1bGVzL3NyYy9ncmFtbWVyL2dlbmVyaWMudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3RzLWZvci1tb2R1bGVzL3NyYy9ncmFtbWVyL25hbWVzcGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBLENBQUM7QUFHRDtJQUtJLFlBQVksSUFBWSxFQUFFLEdBQVc7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksR0FBRyxDQUFDLEtBQWE7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsY0FBYyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxHQUFHLENBQUMsTUFBYztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7QUFyQk0sV0FBSSxHQUFXLFFBQVEsQ0FBQztBQXdCbkM7Ozs7R0FJRztBQUNIO0lBQ0ksWUFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFDaEMsQ0FBQyxVQUFTO0lBRVYsR0FBRyxDQUFDLE1BQWM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FJSjtBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7O0FDN0N1QztBQUM5QjtBQUNLO0FBQ1c7QUFDSjtBQUNBO0FBRzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFekIsSUFBSSxDQUFDLEdBQVU7SUFDWCxLQUFLLEVBQUUsR0FBRztDQUNiLENBQUM7QUFDRixJQUFJLENBQUMsR0FBZ0I7SUFDakIsS0FBSyxFQUFFLENBQUM7SUFDUixLQUFLLEVBQUUsQ0FBQztJQUNSLElBQUksQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVE7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0osQ0FBQztBQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7QUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFEQUFFLENBQUMsQ0FBQztBQUV0QixzRUFBSSxFQUFFLENBQUM7QUFFUCxJQUFJLElBQUksR0FBRyxJQUFJLDhEQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVE7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUTtBQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBR2IsSUFBSSxJQUFJLEdBQUcsSUFBSSxrRUFBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFYixJQUFJLEtBQUssR0FBRyxJQUFJLGdFQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBR1gsTUFBTTtBQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0VBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUMzQyxXQUFXO0FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLG1FQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoRCxJQUFJLE9BQU8sR0FBRyxJQUFJLG1FQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELHlEQUF5RDs7Ozs7Ozs7QUN0QnpEO0FBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ0M7QUFDWCxtQkFBbUI7QUFDbkIsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCbkIseURBQWM7SUFDVixJQUFJLENBQUMsR0FBVyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDLEdBQVcsR0FBRyxDQUFDO0lBQ3BCLElBQUksQ0FBQyxHQUFZLENBQUMsRUFBRSxDQUFDO0lBRXJCLElBQUksR0FBRyxHQUFXLE9BQU8sQ0FBQztJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQztJQUVoQyxJQUFJLE9BQU8sR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSSxRQUFRLEdBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV4Qzs7OztPQUlHO0lBQ0gsSUFBSSxPQUFPLEdBQTJCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDakIsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEMsb0JBQW9CO0lBQ3BCLEdBQUcsRUFBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFLLEtBS0o7SUFMRCxXQUFLLEtBQUs7UUFDTiwrQkFBRztRQUNILG1DQUFLO1FBQ0wsaUNBQUk7UUFDSixtQ0FBSztJQUNULENBQUMsRUFMSSxLQUFLLEtBQUwsS0FBSyxRQUtUO0lBRUQsSUFBSSxLQUFLLEdBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHM0MsSUFBSSxPQUFPLEdBQVEsQ0FBQyxDQUFDO0lBRXJCLElBQUk7SUFDSixJQUFJLFNBQVMsR0FBUSxrQkFBa0IsQ0FBQztJQUN4QyxJQUFJLFNBQVMsR0FBWSxTQUFvQixDQUFDLE1BQU0sQ0FBQztJQUdyRCxJQUFJLDZCQUEyQyxFQUEzQyxFQUFDLEtBQUssT0FBcUMsRUFBbkMsOEJBQW1DLENBQUM7QUFDcEQsQ0FBQztBQUVELDBDQUEwQzs7Ozs7Ozs7OztBQzlDMUM7QUFBQSxDQUFDO0FBQ3VDO0FBRXhDOzs7O0tBSUs7QUFFTCxhQUFjLFNBQVEsc0RBQU07SUFHeEIsWUFBWSxJQUFZLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxLQUFhO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFpQjtRQUMzQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwyQkFBMkI7SUFDM0IsR0FBRyxDQUFDLE1BQWM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxpQkFBaUI7SUFDVCxJQUFJO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBRUQsV0FBWSxTQUFRLHVEQUFPO0lBRXZCLElBQUk7UUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXpCLENBQUM7SUFFRCxFQUFFO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLHdCQUF1QjtRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQUV1Qjs7Ozs7Ozs7QUM3Q3hCO0FBQUEsSUFBSTtBQUdKLElBQUksUUFBUSxHQUNSLFVBQWEsR0FBTTtJQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUM7QUFHWTs7Ozs7Ozs7QUNUbEIsSUFBVSxXQUFXLENBMEJwQjtBQTFCRCxXQUFVLFdBQVc7SUFDSixjQUFFLEdBQVcsU0FBUyxDQUFDO0lBQ3BDLE1BQU0sVUFBVSxHQUFXLHFCQUFxQixDQUFDO0lBRWpELG9CQUEyQixNQUFjO1FBQ3JDLE1BQU0sQ0FBQyxjQUFFLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFGZSxzQkFBVSxhQUV6QjtJQU9EO1FBR0ksWUFBWSxRQUFnQixDQUFDLEVBQUUsU0FBaUIsQ0FBQztZQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBQ0QsVUFBVTtZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEMsQ0FBQztLQUNKO0lBVlksbUJBQU8sVUFVbkI7SUFFRCxvQkFBb0I7QUFDeEIsQ0FBQyxFQTFCUyxXQUFXLEtBQVgsV0FBVyxRQTBCcEI7QUFFRDs7R0FFRztBQUNILHlEQUFlLFdBQVcsRUFBQyx3QkFBdUIiLCJmaWxlIjoiZGV2LWJ1bmRsZS10cy1tb2R1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDJjZGViMGVmYzU4YTI3OTJiMTAiLCI7XHJcbmltcG9ydCB7SVBlb3BsZX0gZnJvbSAnaW50ZXJmYWNlJztcclxuXHJcbmNsYXNzIFBlb3BsZSBpbXBsZW1lbnRzIElQZW9wbGUge1xyXG4gICAgc3RhdGljIHR5cGU6IHN0cmluZyA9ICdQZW9wbGUnO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfYWdlPzogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2FnZSA9IGFnZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhg5paw5bu6cGVvcGxl5a+56LGh77yM5Lq65ZCN77yaJHt0aGlzLm5hbWV9LCDlubTpvoTvvJoke3RoaXMuX2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgYWdlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9hZ2UgPSB2YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJ2AgKyBgJHt0aGlzLm5hbWV9YCArIGAn55qE5bm06b6E6KKr5pS55Li6LS0+ICR7dmFsdWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKG1ldGVyczogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfei3keS6hiR7bWV0ZXJzfeWFrOmHjO+8gWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5oq96LGh57G777ya5oq96LGh57G75YGa5Li65YW25a6D5rS+55Sf57G755qE5Z+657G75L2/55So44CCIOWug+S7rOS4gOiIrOS4jeS8muebtOaOpeiiq+WunuS+i+WMluOAglxyXG4gKiAgICAgICAgICDkuI3lkIzkuo7mjqXlj6PvvIzmir3osaHnsbvlj6/ku6XljIXlkKvmiJDlkZjnmoTlrp7njrDnu4boioLvvIxhYnN0cmFjdOWFs+mUruWtl+aYr+eUqOS6juWumuS5ieaKveixoeexu+WSjOWcqOaKveixoeexu+WGhemDqOWumuS5ieaKveixoeaWueazlVxyXG4gKiAgICAgICAgICDmir3osaHnsbvkuK3nmoTmir3osaHmlrnms5XkuI3ljIXlkKvlhbfkvZPlrp7njrDlubbkuJTlv4XpobvlnKjmtL7nlJ/nsbvkuK3lrp7njrBcclxuICovXHJcbmFic3RyYWN0IGNsYXNzIEFuaW1hbHMge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0eXBlOiBzdHJpbmcpIHtcclxuICAgIH0vL+WPguaVsOWNs+aehOmAoOaIkOWRmFxyXG5cclxuICAgIHJ1bihtZXRlcnM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMudHlwZX3liqjnianot5HkuoYke21ldGVyc33nsbNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgbW92ZSgpOnZvaWQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQge1Blb3BsZSwgQW5pbWFsc307XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3RzLWZvci1tb2R1bGVzL3NyYy9ncmFtbWVyL2NsYXNzLnRzIiwiaW1wb3J0IHtsYWJlbCwgbGFiZWxOdW1iZXIsIGEgYXMgYWF9IGZyb20gJy4vZ3JhbW1lci9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgZnVuYyBmcm9tICcuL2dyYW1tZXIvYmFzZSc7XHJcbmltcG9ydCB7UGVvcGxlfSBmcm9tICcuL2dyYW1tZXIvY2xhc3MnO1xyXG5pbXBvcnQge1N0dWRlbnQsIE1vdXNlfSBmcm9tICcuL2dyYW1tZXIvc3ViY2xhc3MnO1xyXG5pbXBvcnQgKiBhcyBpZGVudGl0eSBmcm9tICcuL2dyYW1tZXIvZ2VuZXJpYyc7XHJcbmltcG9ydCBNeU5hbWVTcGFjZSBmcm9tICcuL2dyYW1tZXIvbmFtZXNwYWNlJztcclxuXHJcblxyXG5jb25zb2xlLmxvZygn5byA5aeL5a2m5LmgdHMhISEnKTtcclxuXHJcbmxldCBhOiBsYWJlbCA9IHtcclxuICAgIGxhYmVsOiAnYSdcclxufTtcclxubGV0IGI6IGxhYmVsTnVtYmVyID0ge1xyXG4gICAgbGFiZWw6IDEsXHJcbiAgICBjb3VudDogMyxcclxuICAgIGNvbnMoYTogbnVtYmVyLCBiOiBzdHJpbmcsIGM/OiBEYXRlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYSArIGIgKyAncHJpbnQgYXQnICsgYyk7XHJcbiAgICB9XHJcbn07XHJcbmIuY29ucygxLCcyJywgbmV3IERhdGUoKSk7XHJcbmNvbnNvbGUubG9nKGEsIGIsIGFhKTtcclxuXHJcbmZ1bmMoKTtcclxuXHJcbmxldCBqYWNrID0gbmV3IFBlb3BsZSgnSmFjaycsIDEyKTtcclxuamFjay5hZ2UgPSAxNTsvL3NldHRlclxyXG5jb25zb2xlLmxvZyhqYWNrLmFnZSk7Ly9nZXR0ZXJcclxuamFjay5ydW4oMTUpO1xyXG5cclxuXHJcbmxldCBsdWN5ID0gbmV3IFN0dWRlbnQoJ0x1Y3knLCAxNSwgJ+WlsycsICfpq5jkuIknKTtcclxubHVjeS5ydW4oMTApO1xyXG5cclxubGV0IG1vdXNlID0gbmV3IE1vdXNlKCfogIHpvKAnKTtcclxubW91c2UuZ28oKTtcclxuXHJcblxyXG4vL+azm+Wei+S9v+eUqFxyXG5jb25zb2xlLmxvZyhpZGVudGl0eS5pZGVudGl0eSgnbXlTdHJpbmcnKSk7XHJcbi8vbmFtZXNwYWNlXHJcbmNvbnNvbGUubG9nKGDpnaLnp6/kuLrvvJoke015TmFtZVNwYWNlLmNhbGNTcXVhcmUoMyl9YCk7XHJcbmxldCBteVNoYXBlID0gbmV3IE15TmFtZVNwYWNlLk15U2hhcGUoNSwgMSk7XHJcbmNvbnNvbGUubG9nKGDnn6nlvaJteVNoYXBl55qE6Z2i56ev5Li6OiAke215U2hhcGUuY2FsY1NxdWFyZSgpfWApO1xyXG4vL2NvbnNvbGUubG9nKGlkZW50aXR5KCdteVN0cmluZycpLCBpZGVudGl0eTxudW1iZXI+KDEpKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3RzLWZvci1tb2R1bGVzL3NyYy9pbmRleC50cyIsImludGVyZmFjZSBsYWJlbCB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIGNvdW50PzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgbGFiZWwxIHtcclxuICAgIGxhYmVsOiBudW1iZXI7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnMoYTogbnVtYmVyLCBiOiBzdHJpbmcsIGM/OiBEYXRlKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElQZW9wbGUgZXh0ZW5kcyBsYWJlbHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGFnZT86IG51bWJlcjtcclxuXHJcbiAgICBydW4obWV0ZXJzOiBudW1iZXIpO1xyXG59XHJcblxyXG5leHBvcnQge2xhYmVsLCBsYWJlbDEgYXMgbGFiZWxOdW1iZXIsIElQZW9wbGV9Oy8vYXPph43lkb3lkI1cclxuXHJcblxyXG5sZXQgYSA9IDE7XHJcbmV4cG9ydCB7YX07XHJcbi8vZXhwb3J0IGRlZmF1bHQgYTtcclxuLy8gZXhwb3J0IGxldCBhID0gMVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC90cy1mb3ItbW9kdWxlcy9zcmMvZ3JhbW1lci9pbnRlcmZhY2UudHMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgYTogbnVtYmVyID0gMTtcclxuICAgIGxldCBiOiBzdHJpbmcgPSAnYic7XHJcbiAgICBsZXQgYzogYm9vbGVhbiA9ICEnJztcclxuXHJcbiAgICBsZXQgc3RyOiBzdHJpbmcgPSAncGV0ZXInO1xyXG4gICAgY29uc29sZS5sb2coYCR7c3RyfSBpcyBhIGJveSFgKTtcclxuXHJcbiAgICBsZXQgbnVtX2FycjogbnVtYmVyW10gPSBbMSwgMiwgM107XHJcbiAgICBsZXQgbnVtX2FycjE6IEFycmF5PG51bWJlcj4gPSBbMSwgMiwgM107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhYPnu4TnsbvlnovvvJrooajnpLrkuIDkuKrlt7Lnn6XlhYPntKDmlbDph4/lkoznsbvlnovnmoTmlbDnu4TvvIzlkITlhYPntKDnmoTnsbvlnovkuI3lv4Xnm7jlkIw7XHJcbiAgICAgKiAgICAgICAgICDlvZPorr/pl67kuIDkuKrotornlYznmoTlhYPntKDvvIzkvJrkvb/nlKjogZTlkIjnsbvlnovmm7/ku6PvvIzlpoLkuIvnmoTkvovlrZDlj6rog73mmK8n5pWw5a2X44CB5a2X56ym5Liy44CB5pel5pyfJ+exu+Wei+S4reeahOS4gOenjVxyXG4gICAgICogQHR5cGUge1tudW1iZXIgLCBzdHJpbmcgLCBEYXRlXX1cclxuICAgICAqL1xyXG4gICAgbGV0IG1peF9hcnI6IFtudW1iZXIsIHN0cmluZywgRGF0ZV0gPSBbMSwgJzInLCBuZXcgRGF0ZSgpXTtcclxuICAgIG1peF9hcnJbM10gPSAxO1xyXG4gICAgbWl4X2Fycls0XSA9ICcyJztcclxuICAgIG1peF9hcnJbNV0gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIC8vbWl4X2Fycls3XSA9IHRydWU7XHJcbiAgICBmb3IobGV0IG1peCBvZiBtaXhfYXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgaXRlcmF0b3I6IGxvZ2dlZCAke21peH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnVtIENvbG9yIHtcclxuICAgICAgICBSZWQsXHJcbiAgICAgICAgR3JlZW4sXHJcbiAgICAgICAgQmx1ZSxcclxuICAgICAgICBCbGFja1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjb2xvcjogQ29sb3IgPSBDb2xvci5HcmVlbjtcclxuICAgIGNvbnNvbGUubG9nKGDlpLTpobYtPiR7Y29sb3J9LCDohJrlupUke0NvbG9yWzNdfWApO1xyXG5cclxuXHJcbiAgICBsZXQgbm90U3VyZTogYW55ID0gNDtcclxuXHJcbiAgICAvL+aWreiogFxyXG4gICAgbGV0IHNvbWVWYWx1ZTogYW55ID0gXCJ0aGlzIGlzIGEgc3RyaW5nXCI7XHJcbiAgICBsZXQgc3RyTGVuZ3RoOiBudW1iZXIgPSAoc29tZVZhbHVlIGFzIHN0cmluZykubGVuZ3RoO1xyXG5cclxuXHJcbiAgICBsZXQge2ZpcnN0LCAuLi5vdGhlcnN9ID0ge2ZpcnN0OiAxLCBhOiAyLCBjOiAzfTtcclxufVxyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBhID0gMTsvL+S4gOS4quaWh+S7tuWPquiDveWtmOWcqOS4gOS4qmRlZmF1bHRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvdHMtZm9yLW1vZHVsZXMvc3JjL2dyYW1tZXIvYmFzZS50cyIsIjtcclxuaW1wb3J0IHtQZW9wbGUsIEFuaW1hbHN9IGZyb20gXCIuL2NsYXNzXCI7XHJcblxyXG4vKipcclxuICogcHVibGljKOm7mOiupCk65Lu75L2V5Zyw5pa56YO96IO96K6/6ZeuXHJcbiAqIHByaXZhdGU6IOWPquiDveWcqOWjsOaYjuexu+eahOWGhemDqOiuv+mXru+8jOS7lueahOWunuS+i+WMluWvueixoeS5n+aXoOazleiuv+mXrlxyXG4gKiBwcm90ZWN0ZWQ6IOWPquiDveWcqOWjsOaYjuexu+eahOWGhemDqOaIluiAheS7lueahOWtkOexu+WGhemDqOiuv+mXrlxyXG4gKiAqL1xyXG5cclxuY2xhc3MgU3R1ZGVudCBleHRlbmRzIFBlb3BsZSB7XHJcbiAgICBwcml2YXRlIF9zZXg6IHN0cmluZzsvL+engeacieWxnuaAp++8muWPquiDveWcqOW9k+WJjeexu+WGhemDqOiuv+mXrizlj6/ku6XpgJrov4forr7nva5nZXQmc2V06L+b6KGM5L+u5pS55ZKM6K6/6ZeuXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3RhZ2U6IHN0cmluZzsvL+WPquivu+WxnuaAp1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlciwgc2V4OiBzdHJpbmcsIHN0YWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhTdHVkZW50LnR5cGUpOy8v57un5om/5LqGUGVvcGxl57G755qE6Z2Z5oCB5oiQ5ZGYXHJcbiAgICAgICAgc3VwZXIobmFtZSwgYWdlKTtcclxuICAgICAgICB0aGlzLl9zZXggPSBzZXg7XHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQG92ZXJyaWRlOiDph43lhplQZW9wbGXnmoRydW7mlrnms5VcclxuICAgIHJ1bihtZXRlcnM6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW92ZSgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnN0YWdlfSR7dGhpcy5fc2V4feWtpueUnyR7dGhpcy5uYW1lfei3keS6hiR7bWV0ZXJzfeWFrOmHjO+8ge+8gWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5re75Yqg56eB5pyJ5pa55rOV77ya5Y+q6IO95Zyo57G75YaF6YOo6K6/6ZeuXHJcbiAgICBwcml2YXRlIG1vdmUoKTogc3RyaW5nIHsvL+i/lOWbnnN0cmluZ+exu+Wei1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX3otbfot5HkuobvvIHvvIHvvIFgKTtcclxuICAgICAgICByZXR1cm4gJ3N0YXJ0JztcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW91c2UgZXh0ZW5kcyBBbmltYWxzIHtcclxuXHJcbiAgICBtb3ZlKCk6IHZvaWQgey8v5oq96LGh5pa55rOV5b+F6aG75a6e546wXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdvKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW92ZSgpOy8v5a2Q57G75YaF6YOo5Y+v5Lul6K6/6Zeu5Yiw54i257G755qEcHJvdGVjdOaWueazlVxyXG4gICAgICAgIHRoaXMucnVuKDEyMyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7U3R1ZGVudCwgTW91c2V9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC90cy1mb3ItbW9kdWxlcy9zcmMvZ3JhbW1lci9zdWJjbGFzcy50cyIsIi8v5rOb5Z6LXHJcblxyXG5cclxubGV0IGlkZW50aXR5OiA8VD4oYXJnOiBUKSA9PiBUID1cclxuICAgIGZ1bmN0aW9uIDxUPihhcmc6IFQpOiBUIHtcclxuICAgICAgICByZXR1cm4gYXJnO1xyXG4gICAgfTtcclxuXHJcblxyXG5leHBvcnQge2lkZW50aXR5fTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3RzLWZvci1tb2R1bGVzL3NyYy9ncmFtbWVyL2dlbmVyaWMudHMiLCJuYW1lc3BhY2UgTXlOYW1lU3BhY2Uge1xyXG4gICAgZXhwb3J0IGNvbnN0IFBJOiBudW1iZXIgPSAzLjE0MTU5MjY7XHJcbiAgICBjb25zdCBEQVRFX1NUQVJUOiBzdHJpbmcgPSAnMTk3MC0wMS0wMSAwMDowMDowMCc7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGNhbGNTcXVhcmUocmFkaXVzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBQSSAqIHJhZGl1cztcclxuICAgIH1cclxuICAgIGludGVyZmFjZSBTaGFwZSB7XHJcbiAgICAgICAgd2lkdGg6IG51bWJlcjtcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgICAgICBjYWxjU3F1YXJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE15U2hhcGUgaW1wbGVtZW50cyBTaGFwZXtcclxuICAgICAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIgPSAwLCBoZWlnaHQ6IG51bWJlciA9IDApe1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxjU3F1YXJlICgpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2V4cG9ydCB7UEl9O+S4jeiDvei/meagt+WvvOWHulxyXG59XHJcblxyXG4vKmNsYXNzIE15U2hhcGUgey8v5Y+v5Lul5ZKM5Zyo5ZG95ZCN56m66Ze05YaF55qE5a6a5LmJ5ZCM5pe25a2Y5ZyoXHJcblxyXG59Ki9cclxuZXhwb3J0IGRlZmF1bHQgTXlOYW1lU3BhY2U7Ly9leHBvcnQge015TmFtZVNwYWNlfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvdHMtZm9yLW1vZHVsZXMvc3JjL2dyYW1tZXIvbmFtZXNwYWNlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==