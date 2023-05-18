interface Name {
    name: string | undefined
    test(a: string): string
}

interface Age {
    age: number | undefined
}

class Person implements Name, Age {
    name: string | undefined = undefined
    age: number | undefined = undefined
    constructor(name?: string, age?: number) {
        this.name = name
        this.age = age
    }
    test(a: string) {
        return 'a'
    }
}

let a = new Person()


class Person1 {
    name: string | undefined
    constructor(name?: string) {
        this.name = name
    }
}




interface A {
    workA: string
}

interface B {
    workB: string
}

interface C extends A, B {

}

class CC implements C {
    workA: string
    workB: string
    constructor(a: string, b: string) {
        this.workA = a
        this.workB = b
    }
}

let cc = new CC("job1", "job2")

console.log(cc.workA)

namespace test {
    export class A {

    }
    export let a: string
    export const fun = (a: number, b: number) => { return a + b }
    export const funA = () => {
        a = "13"
    }
}
namespace dev {
    export class B {

    }
}

let aa: test.A = new test.A()
new dev.B()
test.a = "123"



