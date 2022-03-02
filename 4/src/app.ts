class Department {
    // name: string
    private employees: string[] = []

    constructor (private id: string, public name: string) {
        // this.name = n
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

const accounting = new Department('Accounting', 'Leila')

accounting.addEmployee('Max')
accounting.addEmployee('Manu')
// accounting.employees[2] = 'Anna'

accounting.describe()
accounting.printEmployeeInformation()

// const accountingCopy = {
//     name: 'another',
//     describe: accounting.describe,
// }

// accountingCopy.describe()

// console.log(accountingCopy.describe)