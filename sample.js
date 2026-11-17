async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();

    console.log("Fetched User:", data.name);
}

fetchUser();