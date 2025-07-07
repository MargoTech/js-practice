async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    for (const user of users) {
      console.log(
        `Name: ${user.name} , E-mail ${user.email} , City: ${user.address.city}`
      );
    }

    const filtered = users.filter(
      (user) => user.name.startsWith("C") || user.name.startsWith("E")
    );

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

    for (const user of sorted) {
      console.log(`🔍${user.name}, ${user.email}, ${user.address.city}`);
    }

    const longNames = users.filter((user) => user.name.length > 10).length;
    console.log(`📏 Users with long names (>10): ${longNames}`);

    const groupByCity = {};
    for (const user of users) {
      const city = user.address.city;
      if (!groupByCity[city]) {
        groupByCity[city] = [];
      }
      groupByCity[city].push(user);
      for (const city in groupByCity) {
        const count = groupByCity[city].length;
        console.log(`🏙️${city} → ${count} users`);
      }
    }
  } catch (error) {
    console.log("error", error);
  }
}

fetchUsers();
