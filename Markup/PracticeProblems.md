# JavaScript Practice Problems

Practice problems aligned with topics covered in this batch (`Introduction.md`, `VariableAndType.md`, and Day 2–3 JavaScript files).

---

## Topics Covered

### Variables & Scope (`VariableAndType.md`, `Variable.js`, `OtherFile.js`)
- `var`, `let`, `const`
- Dynamic typing
- Assignment and reassignment
- Block scope vs function scope
- `const` cannot be reassigned
- Using variables inside functions

### Data Types (`Types.js`)
- Primitives: `string`, `number`, `boolean`, `undefined`, `null`, `bigint`
- Non-primitives introduced: `object`, `array`, `function` (listed, not practiced yet)
- `typeof` operator
- `null` vs `undefined`
- `typeof null` quirk
- BigInt with `n` suffix

### Strings (`string.js`)
- Single quotes, double quotes, backticks
- Template literals (`${...}`)
- `length`, `toUpperCase`, `toLowerCase`, `charAt`, `indexOf`, `includes`, `slice`, `split`, `trim`, `trimStart`, `trimEnd`, `replace`, `replaceAll`, `concat`
- Concatenation: `+`, `concat()`, template literals
- Character indexing (0-based)

---

## Practice Problems by Topic

### 1. Setup & Environment

1. Install Node.js and run `node --version` in the terminal. Record the version.
2. Create a folder `practice/day1` with `hello.js` that prints your name using `console.log`.
3. In VS Code, install Prettier and format one of your `.js` files.
4. Initialize Git in the project folder, make a commit, and describe (in comments) what “pull” vs “push” does.
5. Install the Playwright Test for VS Code extension and locate where test runs would appear in the UI.

---

### 2. Variable Declaration (`var`, `let`, `const`)

1. Declare `productName` with `let`, assign `"Laptop"`, then reassign to `"Tablet"`. Log both steps.
2. Declare `MAX_USERS` with `const` set to `100`. Try reassigning to `200` — what error do you get? Comment out the bad line and explain why.
3. Fix `OtherFile.js`: declare `PI` correctly as `const PI = 3.14` and log it.
4. Declare three variables in one style each: `var a`, `let b`, `const c = 5`. Log all three.
5. Declare a variable without assigning a value; log it. What prints?

---

### 3. Dynamic Typing

1. Start with `let x = 10`, log `typeof x`. Set `x = "ten"`, log again.
2. Store `true`, then `null`, then `42n` in the same `let` variable; log value and `typeof` after each change.
3. Explain in a comment why JavaScript is called “dynamically typed.”

---

### 4. Scope (`var` vs `let`)

1. Inside `if (true) { }`, declare `var innerVar = 1` and `let innerLet = 2`. Log both inside and outside the block. What differs?
2. Write a function with a `let` inside it; try to log that variable outside the function. What happens?
3. Rewrite a snippet that uses `var` in a loop so it uses `let` instead; log the loop variable after the loop.
4. Predict then verify: where is `city` accessible in your `Variable.js` example?

---

### 5. `const` and Reassignment

1. `const colors = ["red", "blue"]` — push `"green"`. Does it work? Why?
2. `const user = { name: "Ada" }` — change `user.name` to `"Grace"`. Does it work? Why?
3. Write `calculateCircumference(radius)` using a `const` for `PI` (like your area example) and return `2 * PI * radius`.

---

### 6. Functions with Variables

1. Copy the `calculateArea()` pattern: write `calculatePerimeter(radius)` using `PI` and `radius`.
2. Pass `radius` as a parameter instead of using a global `radius`.
3. Log area for radii `3`, `5`, and `10` in a loop.

---

### 7. `typeof` and Primitives

1. For each value below, predict then check `typeof`:
   - `"hello"`
   - `42`
   - `3.14`
   - `true`
   - `undefined`
   - `null`
   - `10n`
   - `{}`
   - `[]`
   - `function(){}`
2. Why does `typeof null` return `"object"`? Write a one-line comment with the fix (`=== null`).
3. Distinguish in comments: `undefined` vs `null` — when would you use each?

---

### 8. Numbers

1. Store integer `25` and float `19.99`; confirm both are `typeof "number"`.
2. Compute and log: sum, difference, product, quotient, and remainder of `17` and `5`.
3. Assign `a = 10`, then `a = 5.12345`; confirm type stays `"number"`.
4. What is `Number.MAX_SAFE_INTEGER`? Create a BigInt one larger and log both.

---

### 9. Booleans

1. Declare `isLoggedIn = true`, then set to `false`; log `typeof` each time.


---

### 10. `undefined` and `null`

1. `let x;` — log `x` and `typeof x`.
2. `let y = null;` — log `y` and `typeof y`. Compare to problem 1.
3. Write `checkEmpty(value)` that prints `"null"`, `"undefined"`, or `"has value"` using strict checks.
4. Call a function with no argument; inside, log the parameter’s type when not passed.

---

### 11. BigInt

1. Create `let big = 9007199254740991n` and add `1n`. Log the result.
2. Try `10n + 5` — what happens? Fix with conversion.
3. When would you use BigInt instead of `number`? (Short comment answer.)

---

### 12. String Basics & Quotes

1. Create the same sentence with `'...'`, `"..."`, and `` `...` ``.
2. Store `"123"` in a variable; prove with `typeof` it is not a number.
3. Build a template literal: `"Hello, {name}! You are {age} years old."` with real variables.

---

### 13. String Methods

Given:

```js
let s = " hello world written in javascript ";
```

1. Log `s.length` (with and without trimming — compare).
2. Log `toUpperCase()` and `toLowerCase()`; confirm original `s` is unchanged.
3. `charAt(0)`, `charAt(4)`, `charAt(100)` — what is the last result?
4. `indexOf('o')` vs `indexOf('z')`.
5. `includes('eat')`, `includes('java')` — true or false?
6. `slice(0, 5)` and `slice(6)` — predict outputs first.
7. `split(' ')` — how many array elements? Try `split('')` on `"hi"`.
8. `replace('w', '&')` vs `replaceAll('w', '&')` — count differences in output.
9. `trim()`, `trimStart()`, `trimEnd()` — wrap in `'&' + ... + '&'` like the class examples.
10. Extract the word `"javascript"` using only `slice` or `indexOf` + `slice`.

---

### 14. String Concatenation

1. Build full name with `+`: `firstName + " " + lastName`.
2. Same result with `concat()`.
3. Same result with a template literal.
4. Given `[" ", "Doe", " is learning JS."]`, use spread with `concat` like `fullName2` in `string.js`.
5. Build a multi-line address string using only backticks (street, city, zip on separate lines).

---

### 15. String Indexing & Validation

1. Draw an index table for `"hello"` (0 → h, 1 → e, …) like the comments in `string.js`.
2. Write `getInitial(name)` returning the first character uppercased.
3. Write `isValidEmailRough(str)` using `includes('@')` and `includes('.')` (simple check only).
4. Write `countChar(str, ch)` — how many times `ch` appears (loop + `charAt` or `split`).

---

### 16. Mixed Review (Variables + Types + Strings)

1. `const price = 29.99`, `let quantity = 2`, log total as `"Total: $59.98"` using a template literal.
2. User input simulation: `let input = "   42   "` — trim, check with `includes` that it looks numeric (rough), convert with `Number()`.
3. Parse `"John,Doe,30"` with `split(',')` and log three labeled fields.
4. Fix and explain buggy code:

```js
const name = "Alice";
name = "Bob";
var score = 10;
if (true) {
  let score = 20;
}
console.log(score); // What prints? Why?
```

---
ss