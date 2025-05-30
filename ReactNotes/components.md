
# 🧩 React Component Concepts – 

---

## 🔹 1. Component Lifecycle (Functional Style)

In older React (class components), we had special lifecycle methods. But in modern React (functional components), we use the `useEffect()` hook to manage this.

### 🔁 What is Lifecycle?
It’s about what happens:
- When a component **appears** (mounts)
- When a component **updates** (changes)
- When a component **disappears** (unmounts)

### ✅ Example:

```jsx
useEffect(() => {
  console.log("Component appeared (mounted)");

  return () => {
    console.log("Component is about to disappear (unmount)");
  };
}, []);
```
The first part runs when the component loads.

The return part runs when the component is removed.

### 🔹 2. Re-rendering Behavior
React automatically re-renders a component when:

The component’s state changes (using useState)

The component gets new props

🧠 Changing normal variables won't trigger re-rendering.

```jsx

const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Add</button>
```
Clicking the button will re-render the component with new count value.

### 🔹 3. Composition vs Inheritance
✅ Composition (✅ Best way)
Use components inside other components.

```jsx

function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <p>Hello</p>
</Card>
```
🛑 Inheritance (❌ Not used in React)
React doesn't use classes to pass UI or behavior down like in OOP. It prefers composition.

### 🔹 4. Keys in Lists
When displaying items using .map(), always use a unique key so React can keep track of items.

```jsx

const items = ['A', 'B', 'C'];

<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
```
🧠 key helps React to know which item changed, added, or removed.

### 🔹 5. Conditional Rendering
✅ Using && (if this is true, show it)
```jsx

{isLoggedIn && <p>Welcome back!</p>}
```
✅ Using ternary ? : (if-else)
```jsx

{isLoggedIn ? <p>Hello</p> : <p>Please login</p>}
```
### 🔹 6. Handling Events (e.g., onClick)
React uses events like HTML, but in camelCase and with functions.

```jsx

function handleClick() {
  alert('You clicked me!');
}

<button onClick={handleClick}>Click Me</button>
```
You can also write inline:

```jsx

<button onClick={() => alert('Clicked!')}>Click</button>
```
### 🔹 7. Forms in React
In React, we control form inputs using state. These are called controlled components.

🧠 Text Input
```jsx
const [name, setName] = useState("");

<input value={name} onChange={(e) => setName(e.target.value)} />
```
🧠 Textarea
```jsx
<textarea value={bio} onChange={(e) => setBio(e.target.value)} />
```
🧠 Select Dropdown
```jsx

<select value={city} onChange={(e) => setCity(e.target.value)}>
  <option value="delhi">Delhi</option>
  <option value="mumbai">Mumbai</option>
</select>
🧠 Submit Form
```
```jsx
<form onSubmit={(e) => {
  e.preventDefault();
  alert(name);
}}>
  <button type="submit">Submit</button>
</form>
```
