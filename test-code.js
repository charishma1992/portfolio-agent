const users = [];

function addUser(name, age) {
    // Issue 1: Missing input validation
    users.push({ name, age });
}

function getUser(id) {
    // Issue 2: Loose equality
    return users.find(user => user.id == id);
}

function divide(a, b) {
    // Issue 3: Division by zero
    return a / b;
}

function displayUser(name) {
    // Issue 4: Potential XSS vulnerability
    document.getElementById("user").innerHTML = name;
}

function login(password) {
    // Issue 5: Hardcoded password
    console.log('password',password);
    if (password === "admin123") {
        return true;
    }
    return false;
}