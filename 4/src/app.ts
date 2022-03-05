class Department {
    static fiscalYear = 2020

    // name: string
    protected employees: string[] = []

    constructor(private readonly id: string, public name: string) {
        // this.name = n
        console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return { name }
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

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT')
    }
}

const employee1 = Department.createEmployee('Max')

console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('Accounting', ['Max'])

it.addEmployee('Max')
it.addEmployee('Manu')
// accounting.employees[2] = 'Anna' 

it.describe()
it.printEmployeeInformation()

class AccountingDepartment extends Department {
    private lastReport: string

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0]
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports)
    }
}

console.log(it)

const accounting = new AccountingDepartment('d2', [])

accounting.mostRecentReport = 'Year End Report'
accounting.addReport('Something went wrong...')
console.log(accounting.mostRecentReport)

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printReports()
accounting.printEmployeeInformation()

// const accountingCopy = {
//     name: 'another',
//     describe: accounting.describe,
// }

// accountingCopy.describe()

// console.log(accountingCopy.describe)