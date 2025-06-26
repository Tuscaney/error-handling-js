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
