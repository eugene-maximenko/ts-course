abstract class Department {
    static fiscalYear = 2020

    // name: string
    protected employees: string[] = []

    constructor (protected readonly id: string, public name: string) {
        // this.name = n
        console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return {name}
    }

    abstract describe(this: Department): void

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    constructor (id: string, public admins: string[]) {
        super(id, 'IT')
    }

    describe() {
        console.log(('IT Department - ID: ' + this.id));
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
    private static instance: AccountingDepartment

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

    private constructor (id: string, private reports: string[]) {
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

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance
        }
        this.instance = new AccountingDepartment('d2', [])
        return this.instance
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);

    }
}

console.log(it)

// const accounting = new AccountingDepartment('d2', [])

const accounting = AccountingDepartment.getInstance()
const accounting1 = AccountingDepartment.getInstance()

console.log(accounting === accounting1)

accounting.mostRecentReport = 'Year End Report'
accounting.addReport('Something went wrong...')
console.log(accounting.mostRecentReport)

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.printReports()
// accounting.printEmployeeInformation()

accounting.describe()

// const accountingCopy = {
//     name: 'another',
//     describe: accounting.describe,
// }

// accountingCopy.describe()

// console.log(accountingCopy.describe)