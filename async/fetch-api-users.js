async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    for (const user of users) {
      console.log(user.name);
    }
  } catch (error) {
    console.log("error", error);
  }
}

fetchUsers();
