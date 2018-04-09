import myClass from './grammar/class';
import myInterface from './grammar/interface';
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
    var Color;
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
myClass();
myInterface();
//# sourceMappingURL=hello.js.map