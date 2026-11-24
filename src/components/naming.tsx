
// 1. Naming convention violations
const UserName = "Ravi";
let TOTAL_COUNT = 10;

function GetUserDetails(user_id) {
    return user_id;
}

class userManager {
    constructor() {
        this.userName = "Ravi";
    }
}

// 2. Misleading variable names
const isValid = "Database connection failed";
const userAge = false;

function deleteUser(userId) {
    return `User ${userId} was not deleted`;
}

// 3. Valid naming examples (should not be flagged)
const userName = "Charishma";
const MAX_RETRY_COUNT = 5;

function calculateTotalPrice(price, quantity) {
    return price * quantity;
}

class UserProfile {
    constructor(name) {
        this.name = name;
    }
}

// 4. Valid short variable names
function calculateCoordinates(x, y) {
    return x + y;
}
