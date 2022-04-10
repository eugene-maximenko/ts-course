// function Logger(logString: string) {
//   console.log('LOGGER FACTORY');

//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log('TEMPLATE  FACTORY');

//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     // return new constrcutor which will replace the old one
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();

//         console.log('Rendering template');

//         const hookEl = document.getElementById(hookId);

//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector('h1')!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// // @Logger('LOGGING - PERSON ')
// @Logger('LOGGING')
// @WithTemplate('<h1>My Person Object</h2>', 'app')
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log(`Creating person object...`);
//   }
// }

// // const person = new Person();

// // console.log(person);

// function Log(target: any, propertyName: string | Symbol) {
//   console.log('Property decorator!');
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log('Accesor decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log('Method decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log('Paremeter decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error('Invalid price - should be positive!');
//     }
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// // }

// const p1 = new Product('Book', 19);
// const p2 = new Product('Book 2', 29);

function AutoBind() {}

class Printer {
  message = 'This works!';

  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);
