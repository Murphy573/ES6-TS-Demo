{
    interface Normal {
        name: string;
        type: string;
        age?: number;
    }

    /**
     * public(默认):任何地方都能访问
     * private: 只能在声明类的内部访问，他的实例化对象也无法访问
     * protected: 只能在声明类的内部或者他的子类内部访问
     * */
    class Animals{
        private name: string;
        type: string;
        protected age?: number;
        constructor(animal: Normal){
            this.name = animal.name;
            this.type = animal.type;
            this.age = animal.age;
        };
        move(dis: number = 5){
            console.log(`${this.age} age ${this.name} has run ==> ${dis}`);
        }
    }

    let animal = new Animals({
        name: 'a',
        type: 'aa',
        age: 12
    });
    //animal.name或者annimal.age报错
    class Dog extends Animals{
        weight: number;
        readonly height: number;//一次赋值，不可修改
        constructor(dog: Normal, weight: number, height: number) {
            super(dog);
            this.weight = weight;
            this.height = height;
        };
        //@override
        move(dis:number = 10){
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

export default function myClass(){
    console.log(123);
}