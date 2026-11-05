
function calculateAverage(numbers) {
    return numbers.reduce((a, b) => a + b) / numbers.length;
}

function getUser(user) {
    console.log("User details:", user);

    if (!user) {
        return null;
    }

    return user.name;
}

console.log(getUser(null));

module.exports = {
    calculateAverage,
    getUser,
};
