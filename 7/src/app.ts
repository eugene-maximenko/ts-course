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
