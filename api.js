export async function getUser(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();

    return data;
}

export async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    return response.json();
}

export async function deleteUser(userId) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
            method: "DELETE"
        }
    );

    return response.json();
}
