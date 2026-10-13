function calculateAverage(numbers) {
    return numbers.reduce((a, b) => a + b) / numbers.length;
}

function getUser(user) {
    console.log("User details:", user);
    return user.name.toUpperCase();
}

console.log(calculateAverage([]));
console.log(getUser(null));
