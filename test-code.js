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