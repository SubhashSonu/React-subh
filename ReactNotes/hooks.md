
# 📘 React Core Hooks - Explained in Simple Words

---

## 🔹 What are Hooks?

### ✅ In Simple Words:
Hooks are special **functions in React** that let us **add features** (like state, timers, or API calls) to our components — **without using classes**.

---

## 💡 Why Hooks?

Before Hooks, if you wanted to use state or lifecycle methods, you had to use **class components**.  
Hooks let us do all that **inside normal function components** — and the code becomes easier to read and reuse.

---

## 🪝 1. useState – To Store & Change Values

### ✅ What is it?
`useState` lets you **store a value** (like a counter, a name, or a color) in your component — and **update** it later.

### 💬 Think of it like:
A box (state) that keeps a value. You can read it and change it.

### 🧠 Example: Simple Counter

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // start with 0

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```
✅ Explanation:
useState(0): 0 is the starting value.

count: current value (like 0, 1, 2...)

setCount: function that changes the value.

When setCount is called, the component updates and shows the new value.

### 🪝 2. useEffect – For Side Effects
✅ What is it?
useEffect lets you run code after the component is shown on screen.
This is useful for things like:

getting data from the internet (API calls),

setting up timers,

changing the title of the webpage.

💬 Think of it like:
“Hey React, after you finish showing this component, please run this code!”

🧠 Example: Change Page Title
```jsx
import { useEffect, useState } from 'react';

function PageTitleChanger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      Click me ({count})
    </button>
  );
}
```
✅ Explanation:
This sets the page title every time the count changes.

useEffect runs the code inside it after render.

### 🪝 3. useContext – Share Data Everywhere
✅ What is it?
useContext lets your component use global data (like current user or theme) without passing props again and again.

💬 Think of it like:
A shared box of data that any component can open and use.

🧠 Example:

```jsx
const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value="Alice">
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const name = React.useContext(UserContext);
  return <h2>Hello, {name}</h2>;
}
```
✅ Explanation:
UserContext creates a context (shared box).

Provider gives a value to it.

useContext allows any component to read it.

### 🪝 4. useRef – Access DOM or Store Values
✅ What is it?
useRef is used to:

Get a reference to a DOM element (like an input box),

Keep a value that does NOT trigger a re-render when changed.

🧠 Example: Focus on Input

```jsx
import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
}
```
### 🪝 5. useMemo – Save Computed Values
✅ What is it?
useMemo helps remember a value you calculated — and recalculate only when needed.

### 💬 Think of it like:
“Don’t redo the work unless something important changed.”

```jsx
const result = useMemo(() => {
  return slowCalculation(input);
}, [input]);
```
### 🪝 6. useCallback – Save a Function
✅ What is it?
useCallback remembers a function, so it's not recreated on every render.

```jsx
const handleClick = useCallback(() => {
  doSomething();
}, []);
```

### 🪝 7. useReducer – Manage Complex State
✅ What is it?
useReducer is useful when:

You have many related state values

Or want Redux-like state logic

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  return state;
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increase
      </button>
    </>
  );
}
```