function getUser() {
    fetch("/api/user")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
        console.error("Error fetching user data:", error);
    });
}
