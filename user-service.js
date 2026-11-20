export function calculateAverage(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}

export function getUserName(user) {
    return user.profile.name.toUpperCase();
}

export function validateUser(user) {
    console.log("Validating user:", user);

    if (user.email.includes("@")) {
        return true;
    }

    return false;
}

export function getUserAge(user) {
    return new Date().getFullYear() - user.birthYear;
}
