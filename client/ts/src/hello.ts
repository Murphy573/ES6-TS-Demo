
import myClass from './grammar/class';
import myInterface from './grammar/interface';


{
    let s:string = '123';
    s = '456';

    let n:number = 123;
    n = 2;

    let b:boolean = false;
    b = true;


    let name:string = 'ad';
    let age:number = 2;
    let tec:string = 'teacher';
    let ss:string = `hello, my name is ${name}, my age is ${age + 1}
                    , my job is ${tec}`;
    console.log(ss);


    let arr:number[] = [123];
    let arrT: Array<string> = ['456'];

    let tuple:[string, number] = ['123', 123];
    tuple[2] = 456;
    tuple[3] = '456';
    //tuple[4] = true;//报错


    enum Color{
        'red' = 2,
        'green' = 99,
        'black' = 100,
        'fff' = 101
    }
    let c:Color = Color.green;
    let cc: string = Color[99];
    console.log(`${c}===${cc}`);


    //any
    let notsure: any = 4;
    console.log(notsure.toFixed(4));
    notsure = '456';
    console.log(notsure.substring(1));
    notsure = false;
    notsure = {};


    let list: any[] = [1, true, "free"];

    list[1] = 100;

    let any1: any = 'any';
    let any1_length: number = (<string>any1).length;
    let any2_length: number = (any1 as string).indexOf('n');


}


myClass();
myInterface();