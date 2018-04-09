//泛型


let identity: <T>(arg: T) => T =
    function <T>(arg: T): T {
        return arg;
    };


export {identity};
