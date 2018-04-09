function printLabel(labelObj: { label: string }) {
    console.log(labelObj.label);
}

printLabel({label: 'label'});

interface label {
    label: string;
    count?: number;
}

/*function print(obj) {
    console.log(obj.label + '-' + obj.count);
}*/

/*print({label: 'abc'});*/

interface Point {//只读不可变的属性
    readonly x: string;
    readonly y?: number;
}

let p: Point = {x: '123', y: 2};
//p.x = '1111';  报错

let aa: number[] = [1, 2, 3, 4];
//let ro: ReadonlyArray<number> = a; //报错
//a = ro as number[]


{
    interface SquareConfig {
        width?: number;
        height?: number;
        color?: string;

        [propName: string]: any;
    }

    /*function createSquare(config: SquareConfig): { color: string; area: number } {
        return;
    }

    let mySquare = createSquare({colour: '', width: 100});*/


    interface Fun {
        (width: number, height: number): number;
    }

    let calc: Fun = function (width, height) {
        return width * height;
    };


}

{
    interface StringDirection {
        [index: string]: string;

        readonly a: string;
        b: string;
        c: string;
    }

    let s: StringDirection = {
        a: '1',
        b: '2',
        c: '3'
    };
    s[3] = '456';
}

{
    interface PC {
        keyboard: string;
        screen: string;
        version: number;

        pressKey(key: string);
    }

    class MyComputer implements PC {
        keyboard: string;
        screen: string;
        version: number;
        pressKey(k: string) {
            //alert(k);
        };

        constructor(kb: string, sc: string, v: number) {
            this.keyboard = kb;
            this.screen = sc;
            this.version = v;
        }

    }

    let pc = new MyComputer('hp', 'hp', 3)
    pc.pressKey('enter');
}

{
    //混合：一个对象可以同时做为函数和对象使用，并带有额外的属性
    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }

    /*function getCounter(): Counter {
        let counter = <Counter>function (start: number) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }

    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;*/

}


{
    interface A{

    }

    class A {
        a;
        constructor(a){
            this.a = a;
        }
    }
}

export default function(){

}