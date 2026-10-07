// second code
function getUser() {
    fetch("/api/user")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}
// AI review webhook test
// function getUser(userId) {
//     if (!userId || !Number.isInteger(Number(userId))) {
//         console.error("Invalid user ID:", userId);
//         return;
//     }

//     fetch("/api/users/" + encodeURIComponent(userId))
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Failed to fetch user: ${response.status}`);
//             }

//             return response.json();
//         })
//         .then(data => {
//             console.log("User:", data);
//         })
//         .catch(error => {
//             console.error("Error fetching user:", error);
//         });
// }