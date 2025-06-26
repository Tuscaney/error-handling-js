// Part 1: Basic Error Handling
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    console.log("Result:", a / b);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Execution complete.");
  }
}

// Test cases
divideNumbers(10, 2); // should show result
divideNumbers(5, 0);  // should show error


// Part 2: Error Handling in Asynchronous Code
async function fetchData() {
  try {
    const response = await fetch("https://httpstat.us/500");

    // Manually check for a failed response
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Fetch Error:", error.message);
  } finally {
    console.log("Fetch attempt finished.");
  }
}

// Call the function to test
fetchData();


// Part 3: Debugging JavaScript Errors
function greet(name) {
  if ((name = undefined)) {
    console.log("Hello, " + name);
  }
}

greet();
