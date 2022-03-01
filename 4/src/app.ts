// const userName = 'Max'
// // userName = 'Maximillian'
// let age = 30

// age = 29
// var result

// function add(a: number, b: number) {
//     result = a + b
//     return result 
// }

// console.log(result);

// const add = (a: number, b: number = 1) => a + b

// const printOutput: (a: number | string) => void = output => console.log(output)

// const button = document.querySelector('button')

// if (button) {
//     button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(5))

const hobbies = ['Sports', 'Cooking', '2', '3']
const activeHobbies = ['Hiking']

activeHobbies.push(...activeHobbies)

const person = {
    firstName: 'Max',
    age: 30
}

const copiedPerson = { ...person }

const add = (...numbers: [number, number, number]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}

const addNumbers = add(5, 2, 3)
console.log(addNumbers)

const [hobby1, hobby2, ...rest] = hobbies

console.log(hobbies, hobby1, hobby2, rest)

const { firstName: userName, age } = person

console.log(userName)