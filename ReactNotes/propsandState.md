
# 📘 React: Props and State (Detailed Notes)

---

## 🔹 1. What are Props in React?

### ✅ Definition:
- **Props** (short for *properties*) are used to **pass data from one component to another**, typically from a **parent to a child**.
- Props are **read-only** — the receiving component cannot change them.

### ✅ Key Points:
- Props help make components **reusable**.
- Props are like **function arguments**, and components are like **functions**.

### 🧠 Example 1: Passing Props

```javascript
// App.js
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Alice" />
    </div>
  );
}

// Greeting.js
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;

```
🔹 Output: Hello, Alice!

### 🧠 Example 2: Destructuring Props

```javascript
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```
🔹 2. What is State in React?
✅ Definition:
State is a built-in React object that stores property values that belong to a component.

When the state changes, the component re-renders automatically.

✅ Key Points:
State is mutable (can change).

We use the useState hook in functional components to manage state.

🔧 Syntax of useState:

```javascript
const [value, setValue] = useState(initialValue);
```
value: current state value

setValue: function to update the value

initialValue: starting value of the state

### 🧠 Example: Counter
```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```
🔹 Initially shows Count: 0
🔹 On button click, count increases by 1

### 🔄 Difference Between Props and State
| Feature     | Props                          | State                         |
| ----------- | ------------------------------ | ----------------------------- |
| Definition  | Data passed to components      | Data managed inside component |
| Mutability  | ❌ Read-only                    | ✅ Can be changed              |
| Purpose     | Pass data from parent to child | Track and update local data   |
| Example Use | User name from parent          | Button click counter          |



### 🔗 Example: Using Props and State Together

```javascript
function Welcome({ name }) {
  const [message, setMessage] = useState("Hello");

  return (
    <div>
      <h2>{message}, {name}!</h2>
      <button onClick={() => setMessage("Welcome")}>Change Message</button>
    </div>
  );
}
```
🔹 Props (name) is passed from parent
🔹 State (message) is managed inside component
