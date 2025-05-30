
# 📘 React Basics Notes

---

## 🔰 1. What is React?

### ✅ Summary:
- React is a **JavaScript library** for building **user interfaces**.
- Developed and maintained by **Meta (Facebook)**.
- Encourages **component-based architecture**.
- Enables **Single Page Applications (SPA)** – dynamic page updates without reloads.
- Uses a **Virtual DOM** for efficient UI updates.

---

## 🔰 2. JSX Syntax & Rules

### ✅ Summary:
JSX (JavaScript XML) allows writing HTML-like syntax directly in JavaScript.

### 📌 Key Rules:
- Must return **one parent element**.
- Use `className` instead of `class`.
- Embed JS expressions inside `{}`.

### 💡 Example:
```javascript
function Welcome() {
  const name = "React";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a JSX example.</p>
    </div>
  );
}
```

### 🔰 3. React vs ReactDOM
✅ Summary:
react: Contains the core React library for creating components.

react-dom: Responsible for rendering components to the DOM.

💡 Example:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### 🔰 4. Functional vs Class Components
✅ Summary:
Functional Components: Use functions, easier to write and understand, use hooks.

Class Components: Use ES6 classes, this keyword, and lifecycle methods (older style).

💡 Functional Component 

```javascript
function Greet() {
  return <h2>Hello from a Functional Component!</h2>;
}
💡 Class Component Example:

import React, { Component } from "react";

class Greet extends Component {
  render() {
    return <h2>Hello from a Class Component!</h2>;
  }
}
```
🔔 Use functional components for modern React development.

### 🔰 5. Rendering Components
✅ Summary:
The root component is rendered into the DOM using ReactDOM.createRoot().render().


``` javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### 🔰 6. Component Naming & Structure
✅ Summary:
Component names must start with an uppercase letter.

File names often match the component name (e.g., Header.js for Header component).

Components are stored in a components/ folder for clarity.

💡 Example:

```javascript
// Header.js
function Header() {
  return <h1>Welcome to My App</h1>;
}

export default Header;
```

```javascript
// App.js
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

