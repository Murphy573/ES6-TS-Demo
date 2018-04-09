{
    class A {
        constructor(){
            this.a = 1;
            this.b = 2;
        }
        sum(){
            return this.a + this.b;
        }
        _sum(){
            return 0;
        }
    }
    Object.assign(A.prototype, {
        c: 1,
        toString(){
            return this.a + '-' + this.b + '-' + this.c;
        }
    });
    let a = new A();
    console.log(a.toString());



    let b = 'B';
    let sb = Symbol('sb');
    class B{
        [b](){
            console.log(b);
            return 'called'
        }
        [sb](){
            console.log('sb');
        }
        getSb(){
            return this[sb]();
        }
    }

    console.log(new B()[b]())


    class C{
        constructor(){
            return new B();
        }

    }
    console.log(new C().getSb());
    //B.prototype.isPrototypeOf(new C())  true


    let D = class DD{
        constructor(){
            this.d = 2;
        }
        get d(){
            return DD.d;
        }
        set d(a){
            DD.d = a;
        }
    }
    let d = new D();
    console.log(d.d)
}

{
    class Parent{
        constructor(){
            this.a = 1;
            this.b = 2;
        }
    }

    class Child extends Parent{
        constructor(){
            super();
            this.c = 2;
        }
    }

    let c = new Child();
    console.log('extend++++++' + c)
    /**
     * Child.__proto__ === Parent   //true
     * Child.prototype.__proto__ === Parent
     false
     Child.prototype.__proto__ === Parent.constructor
     false
     Child.prototype.__proto__ === Parent.prototype
     true
     */
}
{
    class Parent{
        constructor(){
            this.a = 1;
            this.b = 2;
        }
        static say(){
            alert('parent');
        }
    }

    class Child extends Parent{
        constructor(){
            super();
            this.c = 2;
        }
    }

    Child.say();
}
