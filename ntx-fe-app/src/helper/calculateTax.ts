// HERE: Task 1
export default function calculateTax(income: number, age: number, dependents: number): number | string {
    if (!isValidInput(income)) return "Invalid income";
    if (!isValidInput(age)) return "Invalid age";
    if (!isValidInput(dependents)) return "Invalid dependents";

    if (age < 18) return "Not eligible for tax";

    let tax: number = countTax(income);

    if (age >= 65) tax *= 0.80;

    return Math.max(calculateDeducRec(tax, dependents), 0); 
}

function isValidInput(value: unknown): value is number {
    return typeof value === "number" && value >= 0;
}

function countTax(income: number): number {
    if (income <= 10000) return income * 0.10;
    if (income <= 50000) return income * 0.20;
    return income * 0.30;
}

function calculateDeducRec(tax: number, dependents: number): number {
    if (dependents === 0) return tax;
    
    return calculateDeducRec(tax - 500, dependents - 1);
}