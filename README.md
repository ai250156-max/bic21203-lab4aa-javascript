# BIC21203 — Lab #4a: Client-Side Scripting (JavaScript)

* **Name:** Ainatul Balqis binti Ahmad Bukhari
* **Student ID:** AI250156
* **Course:** BIC21203

## Brief Explanation
This lab implements native client-side JavaScript without external libraries, covering DOM selection, event handling with `addEventListener()`, safe text updates via `textContent`, input validation using `if...else if...else` and `Number.isFinite()`, `for` loops, and dynamic element creation using `document.createElement()`.

## How to Run Each Question
1. Clone or download the `bic21203-lab4a-javascript` repository and open it in VS Code.
2. Run each HTML file using **Live Server** (or open directly in a browser):
   * **Question 1:** `q1/index.html`
   * **Question 2:** `q2/index.html`
   * **Question 3:** `q3/index.html`

---

## Output & Test Evidence

### Question 1 - Interactive Text Changer

**Output before click the “Change Message”:**
![Q1 Before](screenshots/q1-before.png)

**Output after click the “Change Message”:**
![Q1 After](screenshots/q1-after.png)

**Explanation:** `"Welcome to my website!"` changes to `"Hello there!"`. Clicking `#changeBtn` triggers `changeMessage()` via `addEventListener()` and updates `#message` to `"Hello there!"`.

---

### Question 2 - Smart Number Validator

**Output:**

1. Type `5` and click Check -> Expected output: `"The number is lower than 10"`.  
   **Output:**  
   ![Q2 Test 1](screenshots/q2-test1.png)

2. Type `10` and click Check -> Expected output: `"The number is equal to 10"`.  
   **Output:**  
   ![Q2 Test 2](screenshots/q2-test2.png)

3. Type `15` and click Check -> Expected output: `"The number is higher than 10"`.  
   **Output:**  
   ![Q2 Test 3](screenshots/q2-test3.png)

4. Type `10.5` and click Check -> Expected output: `"The number is higher than 10"` (decimal test case).  
   **Output:**  
   ![Q2 Test 4](screenshots/q2-test4.png)

5. Type `abc` and click Check -> Expected output: `"Please enter a valid number!"`.  
   **Output:**  
   ![Q2 Test 5](screenshots/q2-test5.png)

6. Leave blank or spaces and click Check -> Expected output: `"Please enter a valid number!"`.  
   **Output:**  
   ![Q2 Test 6](screenshots/q2-test6.png)

**Explanation:** `checkInput()` validates empty or whitespace and non-numeric inputs (`"Please enter a valid number!"`) and classifies valid numbers against `10` (`lower`, `equal`, or `higher`).

---

### Question 3 - Dynamic Number Generator

1. **Before click “Generate”:**  
   **Output:**  
   ![Q3 Before](screenshots/q3-before.png)

2. **After click “Generate”:**  
   **Output:**  
   ![Q3 After](screenshots/q3-after.png)

**Explanation:** `generateNumbers()` clears `#numberList`, loops `1` to `5`, creates `<li>` elements dynamically, and prevents duplicate items on repeated clicks.