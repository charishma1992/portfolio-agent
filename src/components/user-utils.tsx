
// 1. Genuine duplicate of calculateTotalPrice() in naming.tsx
// Expected: AI should identify duplicated business logic.

function calculateOrderTotal(amount, count) {
    return amount * count;
}

// 2. Similar structure, but different business logic
// Expected: Should NOT be reported as duplication.

function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

// 3. Another genuine duplicate with different variable names
// Expected: AI should identify duplicated business logic.

function getProductCost(unitPrice, units) {
    return unitPrice * units;
}

// 4. Different business logic
// Expected: Should NOT be reported as duplication.

function calculateDiscountedPrice(price, discountPercentage) {
    return price - (price * discountPercentage / 100);
}

// 5. Independent business logic
// Expected: Should NOT be reported as duplication.

function getEligibleUsers(users) {
    return users.filter(user => user.isActive && user.age >= 18);
}
