// This function simulates an asynchronous operation (like fetching data from server)
// It returns a Promise that resolves or rejects after 1 second depending on the 'success' argument
function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("✅ Data received successfully");
      } else {
        reject("❌ Failed to fetch data");
      }
    }, 1000);
  });
}

// Example 1: Calling fetchData with true — this will RESOLVE the Promise
fetchData(true)
  .then((result) => {
    console.log("Then:", result);
  })
  .catch((error) => {
    console.log("Catch:", error);
  });

// Example 2: Calling fetchData with false — this will REJECT the Promise
fetchData(false)
  .then((result) => {
    console.log("Then:", result);
  })
  .catch((error) => {
    console.log("Catch:", error);
  });
