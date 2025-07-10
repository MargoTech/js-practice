async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const container = document.getElementById("users");
    for (const user of users) {
      const userDiv = document.createElement("div");
      userDiv.innerText = `👤 Name: ${user.name} | 📧 Email: ${user.email}  | 🏙️ City: ${user.address.city}`;
      container.appendChild(userDiv);
    }
  } catch (error) {
    console.log("error", error);
  }
}

fetchUsers();
