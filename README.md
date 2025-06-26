# JavaScript Error Handling Assignment

## Overview

This project demonstrates how to handle and debug errors in JavaScript using:

- `try`, `catch`, and `finally`
- `async/await` with error handling
- Debugging and fixing logic errors

The project is broken into 3 parts and includes screenshots of the output for each.

---

## 🔹 Part 1: Basic Error Handling

**Function:** `divideNumbers(a, b)`  
- Uses `try/catch/finally` to safely divide numbers.
- Throws an error when attempting to divide by zero.

📸 `screenshots/part1-divideNumbers-output.png`

---

## 🔹 Part 2: Asynchronous Error Handling

**Function:** `fetchData()`  
- Uses `async/await` to fetch from an API that returns a 500 error.
- Manages error response with `try/catch/finally`.

📸 `screenshots/part2-fetchData-output.png`

---

## 🔹 Part 3: Debugging JavaScript Errors

**Function (buggy):** `buggyGreet(name)`  
- Shows a logic bug with `name = undefined` instead of comparison.
- Demonstrates incorrect behavior.

📸 `screenshots/part3-buggy-greet.png`

**Function (fixed):** `greet(name)`  
- Properly checks if `name` is `undefined`.
- Logs “Hello, Guest!” or greets by name.

📸 `screenshots/part3-fixed-greet.png`

---

## 💻 How to Run

1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. Open the browser’s developer console (F12 or right-click → Inspect → Console) to view the outputs.

---

## 🔗 Submission Link

> Replace this line with your GitHub repository URL  
> Example: `https://github.com/yourusername/error-handling-js`

