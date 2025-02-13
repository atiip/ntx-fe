// HERE: Task 2
function calculateShippingCost(destination: string, weight: number, priority: string): number | string {

    if (!isValidDestination(destination)) return "Invalid destination";
    if (!isValidWeight(weight)) return "Invalid weight";
    if (!isValidPriority(priority)) return "Invalid priority";

    let baseCost = countBasedCost(destination, priority, weight);

    return baseCost;
}

function isValidDestination(destination: string): boolean {
    return destination === "domestic" || destination === "international";
}

function isValidWeight(weight: number): boolean {
    return typeof weight === "number" && weight > 0;
}

function isValidPriority(priority: string): boolean {
    return priority === "standard" || priority === "express" || priority === "priority";
}

function countBasedCost(destination: string, priority: string, weight: number): number {
    const costTable: Record<string, Record<string, number>> = {
        "domestic": {
            "standard": 5,
            "express": 10,
            "priority": 20
        },
        "international": {
            "standard": 15,
            "express": 25,
            "priority": 50
        }
    };

    let res = costTable[destination][priority] * weight;
    
    if (destination === "domestic" && weight > 10) res += 10;
    if (destination === "international" && weight > 5) res += 50;


    return res;
}