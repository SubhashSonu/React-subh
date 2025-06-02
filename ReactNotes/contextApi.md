
---

### 📘 `Context_API_Notes.md` — Simple and Detailed

````md
# 🌐 React Context API Notes (Beginner Friendly)

## 🔶 What is Context API?

React Context API is used to share data between components **without passing props manually**.

It helps when you want to share things like:
- User login info
- Theme (dark/light)
- Language settings

---

## ✅ Steps to Use Context API

---

## 1️⃣ Create a Context

**File: `UserContext.js`**

```js
import React from 'react';

const UserContext = React.createContext();

export default UserContext;
````

🔹 This creates a context that can be used by other components.

---

## 2️⃣ Create a Provider Component

**File: `UserContextProvider.js`**

```js
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

🔹 This wraps your whole app and provides the `user` and `setUser` to all children.

🔹 `children` means whatever you wrap inside `<UserContextProvider>...</UserContextProvider>` in `App.js`.

---

## 3️⃣ Use the Context in Components

---

### 🧾 `Login.js`

```js
import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
```

🔹 This gets `setUser` from context and updates it when the form is submitted.

---

### 🧍 `Profile.js`

```js
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
```

🔹 This reads the `user` from context and shows a welcome message.

---

## 4️⃣ Wrap Your App with the Provider

**File: `App.js`**

```js
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1>React with Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
```

🔹 This gives `Login` and `Profile` access to the context.

---

## 💡 What is `children`?

```js
const UserContextProvider = ({ children }) => {
  ...
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```

➡️ `children` means whatever you wrap inside the component.
Example:

```js
<UserContextProvider>
  <App />
</UserContextProvider>
```

Here, `children = <App />`.

---

## 📌 Summary Table

| Feature           | Use                                 |
| ----------------- | ----------------------------------- |
| `createContext()` | Create context object               |
| `Provider`        | Shares data with children           |
| `useContext()`    | Access shared data in any component |
| `children`        | Represents nested components        |

---

## ✅ Output Behavior

* If the user logs in: Profile shows `Welcome username`
* If no user: Profile shows `Please login`

---

## 🧠 You Just Learned:

* How to **share data globally** in React
* How to use `Context` with `useState`
* How to use `useContext()` to access and update data
* Real-world example: simple login system

---


