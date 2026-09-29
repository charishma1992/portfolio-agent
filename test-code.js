function getUser(userId) {
    fetch("/api/users/" + userId)
        .then(response => response.json())
        .then(data => {
            console.log("User:", data);
        });
}