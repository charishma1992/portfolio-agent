function getUser(userId) {
    fetch("/api/users/" + userId)
        .then(response => response.json())
        .then(data => {
            console.log("User:", data);
        });
}

function calculateTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total = total + items[i].price;
    }

    return total;
}

function getUserName(user) {
    return user.profile.name;
}
function getUserById(id) {
    fetch("/api/users/" + id)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}

function getFirstUser(users) {
    return users[0].name;
}

function processPayment(payment) {
    if (payment.status === "success") {
        return payment.amount;
    }

    return payment.amount;
}