
function calculateAverage(numbers) {
    // BUG-002: Potential division by zero when numbers is empty
    return numbers.reduce((a, b) => a + b) / numbers.length;
}

function getUser(user) {
    console.log("User details:", user);
    console.debug("Debug user information:", user);

    if (!user) {
        return null;
    }

    return user.name;
}

console.log(calculateAverage([]));
console.log(getUser(null));

module.exports = {
    calculateAverage,
    getUser,
};
