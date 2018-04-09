/**
 * Created by pengfei.li on 2017/6/16.
 */

//a()
function a(x = y, y = 2) {//此行代码报错：x赋值前y并没有定义
    console.log(x);
}

/*
var tmp = new Date();
function f() {
    console.log(tmp);// undefined
    if (false) {
        var tmp = "hello world";
    }
    console.log(tmp);// undefined
}
f(); // undefined:执行到函数内部，由于存在变量提升,tmp被重新定义，此时为Undefined
*/

// ES6的浏览器环境
function f() {
    console.log('I am outside!');
}

(function () {
    if (false) {
        // 重复声明⼀次函数f
        function f() {
            console.log('I am inside!');
        }
    }
    //f();
}());

!function f1() {
    let tmp = 1;
    if (true) {
        let tmp = 2;//这里如果使用var:则会报错，ES6不允许重复声明变量
        console.log("if true : tmp" + tmp);//2
    }
    console.log(tmp);//1
}()
//let：需要使用需先定义，再赋值，再使用；同一块级作用域内不允许重复定义

/*************
 * 解构赋值：
 *  数组--1,只要等号两边的模式相同， 左边的变量就会被赋予对应的值;
 *       2,如果解构不成功，变量的值就等于 undefined
 *       3,如果等号右边不是数组（严格来说不是可遍历的解构），将会报错
 *       var [v1, v2, ..., vN ] = array;
 let [v1, v2, ..., vN ] = array;
 const [v1, v2, ..., vN ] = array;
 *
 */
{
    let [a1, b1, c1] = [1, 2, 3];
    console.log(a1 + b1 + c1);
    let [, , c2] = [1, 2, 3];
    console.log("c2=" + c2);
    let [a3, a4, ...a5] = ["a", "b", "c", "d", "e"];
    console.log(a5)//[cde]
    let [b3, b4, ...b5] = ["a"]
    console.log(b5);//b3=a, b4=undefined, b5 = []
    let [a, [b], d] = [1, [2, 3], 4]
    console.log(b);//2

    //解构赋值允许指定默认值:
    {
        //inner
        let [a = "1"] = ["2"];
        console.log("inner" + a);//2
        let [a1 = "1"] = [];
        console.log("inner" + a1);//1
        let [x, y = 'b'] = ['a']; // x='a', y='b'
        let [x1, y1 = 'b'] = ['a', undefined]; // x1='a', y1='b'
        //ES6内部使⽤严格相等运算符（=== ） ， 判断⼀个位置是否有值。 所以， 如果⼀个数组成员不严格等于 undefined ， 默认值是不会⽣效的。
        let [a2, a3 = "a3"] = ["a", null]//a3 = null
        console.log(a3)
        //默认值可以引⽤解构赋值的其他变量， 但该变量必须已经声明。
        let [x2 = 1, y2 = x] = []; // x2=1; y2=a
        console.log(x2 + "and" + y2);
        let [x3 = 1, y3 = x3] = [2]; // x3=1; y3=1
        let [x4 = 1, y4 = x4] = [1, 2]; // x=1; y4=2;//y4位置对应的数组成员不等于undefined，默认值不生效
        //let [x5 = y5, y5 = 1] = []; // x5=y5,此时y5还未声明，报错
    }
}
/*************
 * 解构赋值：
 *  对象：对象的解构与数组有⼀个重要的不同。 数组的元素是按次序排列的， 变量的
 取值由它的位置决定； ⽽对象的属性没有次序， 变量必须与属性同名， 才能
 取到正确的值。
 完整版：var { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" }----对象的解构赋值的内部机制,是先找到同名属性,然后再赋给对应的变量.真正被赋值的是后者,⽽不是前者。
 *
 */
{
    let {a, b} = {b: 2, a: 3};//a =3, b = 2
    console.log("Object:" + a + b);
    //如果变量名与属性名不⼀致， 必须写成下⾯这样。
    var {foo: baz} = {foo: 'aaa', bar: 'bbb'};//{foo: baz},用属性值baz去找对应属性foo
    //baz = "aaa"
    let obj = {first: 'hello', last: 'world'};
    let {first: f, last: l} = obj;//f=hello, l=world
    let baz1;
    //let {bar: baz1} = {bar: 1}; // 重复声明baz1报错
    ({bar: baz1} = {bar: "baz1"});//baz1="baz1"

    //默认赋值：
    var {x = 3} = {};//x = 3
    var {x, y = 5} = {x: 1};//x = 1,y = 5
    var {x: y = 3} = {};//y = 3
    var {x: y = 3} = {x: 5};//y = 5---对应的值不为undefined

}
/*************
 * 解构赋值：数组和对象的嵌套写法
 ***/
{
    let x, y;
    ({attr: [x, {a2: y}]} = {attr: ["a1", {a2: 3}]});
    console.log(x + "+++++" + y);//x = a1, y=3
    let x1, y1;
    ([{a: x1}, {a: [{y: y1}]}] = [{a: 3}, {a: [{y: {a: 1, b: 3}}]}]);
    console.log(x1 + "********" + y1);//x1=3,y1={a: 1, b : 3}
}
{
    //对象的解构赋值， 可以很⽅便地将现有对象的⽅法， 赋值到某个变量。
    let {log, sin, cos} = Math;
}
{
    //由于数组本质是特殊的对象， 因此可以对数组进⾏对象属性的解构。
    var arr = [1, 2, 3];
    var {0: first, [arr.length - 1]: last} = arr;//first = 1, last=3
}
/*************
 * 解构赋值：字符串
 *  字符串被转换成了⼀个类似数组的对象;
 *  类似数组的对象都有⼀个 length 属性， 因此还可以对这个属性解构赋值。
 ***/
{
    const [a, b, c, d, e] = 'hello';
    /*a = "h"
    b ="e"
    c = "l"
    d ="l"
    e = "o"*/
    let {length: len} = 'hello';//len =5
}
{
    //解构赋值的规则是， 只要等号右边的值不是对象， 就先将其转为对象。 由
    //于 undefined 和 null ⽆法转为对象， 所以对它们进⾏解构赋值， 都会报错。
    let {toString: s} = 123;
    console.log(s) //取123的toString属性
    //let {toString: s} = true;//取true的toString
}
{
    //解构赋值：函数
    function move({x, y} = {x: 0, y: 0}) {
        return [x, y];
    }

    /*move({x: 3, y: 8}); // [3, 8]
    move({x: 3}); // [3, undefined]
    move({}); // [undefined, undefined]
    move(); // [0, 0]*/

    [[1, 2], [3, 4]].map(([a, b]) => a + b);// [ 3, 7 ]
}
{
//⽤途:
    //1,交换变量的值//[x, y] = [y, x];
    //2,函数只能返回⼀个值， 如果要返回多个值， 只能将它们放在数组或对象⾥返回。 有了解构赋值， 取出这些值就⾮常⽅便。
    // 返回⼀个数组
    function example() {
        return [1, 2, 3];
    }

    var [a, b, c] = example();
    // 返回⼀个对象
    //3,解构赋值可以⽅便地将⼀组参数与变量名对应起来。
    // 参数是⼀组有次序的值
    function f([x, y, z]) {
    }

    f([1, 2, 3]);

    // 参数是⼀组⽆次序的值
    function f({x, y, z}) {
    }

    f({z: 3, y: 2, x: 1});
    //4,提取JSON数据
    var jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };
    let {id, status, data: number} = jsonData;
    console.log(id, status, number);
    //5,函数参数的默认值
    /*jQuery.ajax = function (url, {
        async = true,
        beforeSend = function (){},
        complete = function () {},
            crossDomain = false,
            global = true
            // ... more config
        }) {
        // ... do stuff
        }*/
    //指定参数的默认值， 就避免了在函数体内部再写var foo = config.foo ||'default foo';
    // 6,遍历Map结构
    // 任何部署了Iterator接⼝的对象， 都可以⽤ for...of 循环遍历。 Map结构原
    // ⽣⽀持Iterator接⼝， 配合变量的解构赋值， 获取键名和键值就⾮常⽅便。
    var map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');
    for (let [key, value] of map) {
        console.log(key + " is " + value);
    }
    //first is hello
    // second is world
    //如果只想获取键名， 或者只想获取键值， 可以写成下⾯这样:
    // 获取键名
    /*for (let [key] of map) {
    // ...
    }*/
    // 获取键值
    // for (let [,value] of map) {
    //
    // }
    //7,输⼊模块的指定⽅法
    //加载模块时， 往往需要指定输⼊那些⽅法。 解构赋值使得输⼊语句⾮常清晰。
    //const { SourceMapConsumer, SourceNode } = require("source-map");
}

{
    //codePointAt ⽅法是测试⼀个字符由两个字节还是由四个字节组成的最简单⽅法。
    function is32Bit(c) {
        return c.codePointAt(0) > 0xFFFF;
    }

    is32Bit("吉") // true
    is32Bit("a") // false
}

{

    console.log('...NodeList-' + [...document.querySelectorAll('div')])
    console.log('Array.from-' + Array.from(document.querySelectorAll('div')))
    console.log('Array.from=>callMap---' + Array.from(document.querySelectorAll('div'), v => v.nodeName));

    console.log([1, 2, 3, 4, 5].copyWithin(1, 3))
}

{
    function A(x, y = 3) {
        console.log(x, y);
    }

    A(1, null);

    function A1(x = 1, y = 2) {
        var x = 3;//let x = 3//error
        console.log(x + y);
    }

    A1()

    function A2(x = 1, y) {
        console.log(x + y);
    }

    A2();

    function A3({x, y = 5} = {}) {
        console.log(x, y);
    }

    A3(1);

    console.log((function (x = 4) {
    }).length);

    function A4(...arg) {
        return arg.reduce(function (prev, next) {
            return prev * next;
        })
    }

    console.log('A4---' + A4(1, 2, 3, 4));

    function A5() {
        x = 1;
        var x;
    }

    A5();

    function A6() {
        let a = [];
        a.push(...[123])
        console.log(a)
    }

    A6(6);

    let x1 = (function () {
        console.log(arguments)
        return arguments;
    })(2223);

    let x = (a, b = 3) => {
        //console.log('function x arguments-->' + arguments.length);  arguments不存在？

        return a + b;
    }
    console.log(x(6))

    let x2 = ({a, b}) => {
        return a + '-' + b;
    }
    console.log(x2({}))
}

{
    /*for (var i = 0; i < 5; i++) {
        (function () {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        })(i);
    }


    for (var i = 0; i < 5; i++) {
        setTimeout((function (i) {
            console.log(i);
        })(i), i * 1000);
    }

    for (var i = 0; i < 5; i++) {
        setTimeout(undefined, i * 1000);
    }*/


    /*function factorial(n) {
        if (n === 1) return 1;
        return n * factorial(n - 1);
    }
    console.log(factorial(14));*/

    //

    //F[n]=F[n-1]+F[n-2]

    function f1(n) {
        if (n <= 1) {
            return 1;
        }
        return f1(n - 1) + f1(n - 2);
    }

    console.log('f1=' + f1(5));

    function f2(n, last = 1, result = 1) {
        if (n <= 1) {
            return result;
        }
        return f2(n - 1, result, last + result);
    }

    function Fibonacci(n, lastSum = 1, totalSum = 1) {
        if (n <= 1) {
            return totalSum;
        }
        return Fibonacci(n - 1, totalSum, lastSum + totalSum);
    }

    console.log(Fibonacci(5))

    function jiecheng(n, total = 1) {
        if (n <= 1) {
            return total
        }
        return jiecheng(n - 1, total * n);
    }

    console.log(jiecheng(1000));
}

{
    function getObj(x, y) {
        return {x, y};
    }

    console.log(getObj(1, 3));

    let foo = 'bar';
    let bar = [foo];
    let bar1 = {foo};
    console.log(bar);
    console.log(bar1);

    let o = {
        get() {
            return 1;
        }
    };
    console.log(o.get());

    let car = {
        _wheels: 1,
        get wheel() {
            return this._wheels;
        },
        set wheel(c) {
            this._wheels = c;
        }
    };

    car.wheel = '2';//调用set
    console.log(car.wheel);//调用get


    let p = 'bar';
    let po = {
        [p]: '1233',
        [p + '1']: '2233',
        [p + 'func']() {
            return 'barFunction';
        }
    };
    console.log(po);

    let p1 = 'foo';
    let foo1 = 'bar';
    console.log({[p1]: foo1});

    let {...x} = {a : {b : 1}};
    console.log(x);
    let {x2, ...y2} = Object.create({x2: 1, y2: 2});
    console.log(x2, y2);
}

{
    //symbol
    console.log(typeof (Symbol()));

    let s = Symbol('hello world');
    console.log(s);

    let s1 = Symbol('test 1');
    let s2 = Symbol('test 2');
    let obj = {
        [s1]: '123',
        [s2](){
            return '999'
        },
        s3() {
            return 'hi';
        }
    };
    console.log(obj[s1], obj[s2]());
    console.log(Reflect.ownKeys(obj))
}

{
    //Proxy
    let p = new Proxy({}, {
        get(target, property) {
            return 35;
        }
    });
    console.log(p.time);

    let p1 = {
        time: 11,
        proxy: new Proxy(this, {
            get(){
                return 99;
            }
        })
    };
    console.log(p1.proxy.get);


    let p2 = new Proxy(function(x, y){
        return {x, y};
    }, {
        get(target, name, key){
            if(name === 'prototype'){
                return target.prototype;
            }
            return 'hello,' + name;
        },
        apply(target, bindings, args){
            return target;
        },
        construct(target, args){
            console.log('p2 constructor start!')
            return {
                value: args[1]
            };
        },
        set(target, prop, args, handle){
            target.prop = args;
        }
    });

    console.log(p2(1, 2))
    console.log(new p2(2,3))
    console.log(p2.name);
    console.log(p2.name = 33);
}

{
    //Set Map数据结构
    let s = new Set();
    [1,1,2,3,3,4,7,3].map((v) => s.add(v));
    console.log(s);
    let a = {};
    let s1 = new Set([1,2,3,4,a, a]);
    console.log(s1);

    s1.forEach((v, k) => console.log(k));
}

{
    //generator

    function* f(){
        yield '123';
        console.log('generator start');
    }
    let g = f();
    g.next();


    var clock = function*() {
        while (true) {
            console.log('Tick!');
            yield;
            console.log('Tock!');
            yield;
        }
    };
    var ff = clock();
    ff.next();
    ff.next();
    ff.next();
    ff.next();
    ff.next();
    ff.next();

}

{
    //promise
    let p = new Promise((res, rej) => {
        setTimeout(() => {
            res("done!!")
        }, 2000)
    });
    let p1 = new Promise((res, rej) => {
        res(p);
    });
    p.then((data) => {
        console.log('promise:' + data);
    }, (error) => {

    });
    p1.then((data) => {
        console.log('promise1:' + data);
        return data;
    }).then((data) => {
        console.log('promise1--then-promise:' + data);
    });



    setTimeout(function () {
        console.log('three');
    }, 0);
    Promise.resolve(console.log('before one')).then(function () {
        console.log('two');
    });
    console.log('one')
}
