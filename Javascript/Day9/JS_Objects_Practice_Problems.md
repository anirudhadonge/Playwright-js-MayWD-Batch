# JavaScript Objects — Practice Problems

10 problems progressing from Easy → Medium → Hard.

---

## Easy

### Problem 1 — Access object properties

**Task:** Given the `person` object below, return a string in the format `'Name is AGE years old.'` using dot notation to access the properties.


### Problem 2 — Add and update properties

**Task:** Write a function `updateProduct(obj)` that takes a product object and:
1. Adds a property `inStock` set to `true`
2. Updates the `price` by applying a 10% discount

Return the modified object.


### Problem 3 — Delete a property

**Task:** Write `removePassword(user)` that deletes the `password` property from the user object and returns it. The returned object should not have a `password` key.

```js
function removePassword(user) {
  // your code here
}


### Problem 4 — Count object keys

**Task:** Write `countKeys(obj)` that returns the number of own enumerable keys in the given object.

```js
function countKeys(obj) {
  // your code here
}

// Expected output
countKeys({ a: 1, b: 2, c: 3 }); // 3
countKeys({});                    // 0
```

## Medium

### Problem 5 — Merge two objects

**Task:** Write `mergeObjects(a, b)` that merges two objects. If the same key exists in both, the value from `b` should win. Return a **new** object without mutating `a` or `b`.

```js
function mergeObjects(a, b) {
  // your code here
}

// Expected output
mergeObjects({ x: 1, y: 2 }, { y: 99, z: 3 });
// { x: 1, y: 99, z: 3 }
```

### Problem 6 — Invert an object

**Task:** Write `invertObject(obj)` that swaps keys and values. Assume all values are strings or numbers. Return a new object.

```js
function invertObject(obj) {
  // your code here
}

// Expected output
invertObject({ a: 'x', b: 'y', c: 'z' });
// { x: 'a', y: 'b', z: 'c' }
```

<details>
<summary>Hint</summary>

Use `Object.entries()` to loop and build a new object with keys and values swapped.

</details>

---

### Problem 7 — Deep clone an object

**Task:** Write `deepClone(obj)` that returns a deep copy of a plain object (may be nested). Changes to the clone must **not** affect the original.

```js
function deepClone(obj) {
  // your code here
}

// Expected behaviour
const orig  = { a: 1, nested: { b: 2 } };
const clone = deepClone(orig);
clone.nested.b = 99;
console.log(orig.nested.b); // 2  (original unchanged)
```

<details>
<summary>Hint</summary>

`JSON.parse(JSON.stringify(obj))` is the simplest approach for plain objects without functions.

</details>

---

### Problem 8 — Group array of objects by a key

**Task:** Write `groupBy(arr, key)` that groups an array of objects by a given property. Return an object where each key is a distinct value of that property, and the value is an array of matching objects.

```js
function groupBy(arr, key) {
  // your code here
}

// Expected output
const data = [
  { name: 'Alice', dept: 'Eng' },
  { name: 'Bob',   dept: 'HR'  },
  { name: 'Carol', dept: 'Eng' },
];

groupBy(data, 'dept');
// {
//   Eng: [{ name: 'Alice', dept: 'Eng' }, { name: 'Carol', dept: 'Eng' }],
//   HR:  [{ name: 'Bob',   dept: 'HR'  }]
// }
```

<details>
<summary>Hint</summary>

Use `reduce` or a `for...of` loop. For each item, check if the group exists, create it if not (`[]`), then `push` the item.

</details>

---

## Hard

### Problem 9 — Flatten a nested object

**Task:** Write `flatten(obj, prefix = '')` that flattens a nested object into a single-level object using dot notation for nested keys.

```js
function flatten(obj, prefix = '') {
  // your code here
}

// Expected output
flatten({ a: { b: { c: 1 } }, d: 2 });
// { 'a.b.c': 1, d: 2 }
```

<details>
<summary>Hint</summary>

Use recursion. For each key, if the value is a non-null object, recurse with `prefix + key + '.'`. Otherwise assign to the result object directly.

</details>

---

### Problem 10 — Implement a simple observable object

**Task:** Write `makeObservable(obj)` that wraps an object so that when any property is **set**, a callback registered via `obj.onChange(cb)` is called with `(key, newValue, oldValue)`. Return the proxy.

```js
function makeObservable(obj) {
  // your code here — use Proxy
}

// Expected behaviour
const state = makeObservable({ score: 0 });

state.onChange((key, newVal, oldVal) => {
  console.log(`${key}: ${oldVal} → ${newVal}`);
});

state.score = 10; // logs "score: 0 → 10"
state.score = 20; // logs "score: 10 → 20"
```

<details>
<summary>Hint</summary>

Use `new Proxy(obj, { set(target, key, value) { ... } })`. Store the callback in a closure variable. Skip the `'onChange'` key itself from triggering notifications.

</details>

---

## Quick Reference

| # | Problem | Concept | Level |
|---|---------|---------|-------|
| 1 | Access object properties | Dot notation, template literals | Easy |
| 2 | Add and update properties | Property assignment | Easy |
| 3 | Delete a property | `delete` operator | Easy |
| 4 | Count object keys | `Object.keys()` | Easy |
| 5 | Merge two objects | Spread operator `{...a, ...b}` | Medium |
| 6 | Invert an object | `Object.entries()`, swap | Medium |
| 7 | Deep clone an object | `JSON.parse / JSON.stringify` | Medium |
| 8 | Group array by key | `reduce`, dynamic keys | Medium |
| 9 | Flatten a nested object | Recursion, dot-path keys | Hard |
| 10 | Observable object | `Proxy`, `set` trap | Hard |
