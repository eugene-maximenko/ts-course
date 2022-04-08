function Logger(logString: string) {
  console.log('LOGGER FACTORY');

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE  FACTORY');

  return function (constructor: any) {
    console.log('Rendering template');

    const hookEl = document.getElementById(hookId);
    const person = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = person.name;
    }
  };
}

// @Logger('LOGGING - PERSON ')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h2>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log(`Creating person object...`);
  }
}

const person = new Person();

console.log(person);

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  @Log
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

// new Product('4', 4);
