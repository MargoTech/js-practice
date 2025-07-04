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

// Async function that uses await + try/catch
async function run() {
  try {
    // Wait for fetchData to complete successfully
    const result = await fetchData(true);
    console.log("Success", result);
  } catch (error) {
    // If fetchData fails (reject), handle the error here
    console.log("Error", error);
  }
}

// Run the function with success = true
run(true);

// Run the function with success = false
run(false);
