interface label {
    label?: string;
    count?: number;
}

interface label1 {
    label: number;
    count: number;

    cons(a: number, b: string, c?: Date);
}

interface IPeople extends label{
    name: string;
    age?: number;

    run(meters: number);
}

export {label, label1 as labelNumber, IPeople};//as重命名


let a = 1;
export {a};
//export default a;
// export let a = 1