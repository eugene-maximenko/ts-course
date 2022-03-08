// type AddFn = (a: number, b: number) => number
interface AddFn {
    (a: number, b: number): number
}

let add: AddFn

add = (n1: number, n2: number) => {
    return n1 + n2
}

interface Named {
    readonly name?: string
    outputName?: string
}

interface Greetable extends Named {

    greet: (phrase: string) => void
}

class Person implements Greetable {
    name?: string
    constructor(n?: string) {
        if (n) {
            this.name = n
        }
    }
    greet(value: string): void {
        if (this.name) {
            console.log(value + ' ' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}

let user1: Greetable

user1 = new Person('Wow')

user1.greet('Hi there - I am ')
console.log(user1);
