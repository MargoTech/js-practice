async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const some = document.getElementById("users");
  } catch (error) {
    console.log("error", error);
  }
}

fetchUsers();
