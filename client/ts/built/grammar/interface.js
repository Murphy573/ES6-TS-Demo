function printLabel(labelObj) {
    console.log(labelObj.label);
}
printLabel({ label: 'label' });
let p = { x: '123', y: 2 };
//p.x = '1111';  报错
let aa = [1, 2, 3, 4];
//let ro: ReadonlyArray<number> = a; //报错
//a = ro as number[]
{
    function createSquare(config) {
        return;
    }
    let mySquare = createSquare({ colour: '', width: 100 });
    let calc = function (width, height) {
        return width * height;
    };
}
{
    let s = {
        a: '1',
        b: '2',
        c: '3'
    };
    s[3] = '456';
}
{
    class MyComputer {
        pressKey(k) {
            //alert(k);
        }
        ;
        constructor(kb, sc, v) {
            this.keyboard = kb;
            this.screen = sc;
            this.version = v;
        }
    }
    let pc = new MyComputer('hp', 'hp', 3);
    pc.pressKey('enter');
}
{
    function getCounter() {
        let counter = function (start) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
}
{
    class A {
        constructor(a) {
            this.a = a;
        }
    }
}
export default function () {
}
//# sourceMappingURL=interface.js.map