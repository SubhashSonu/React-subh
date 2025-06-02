# React Router Notes

React Router is a JavaScript library used in React applications to handle navigation. It lets you create a multi-page user experience in a single-page application (SPA) without reloading the page.

---

## 📘 Basic Concepts

### 1. Single Page Application (SPA)

* Only one HTML page is loaded.
* Content is updated dynamically using JavaScript.

### 2. Client-Side Routing

* React Router changes the URL and updates the view without refreshing the page.
* Routing is handled in the browser using JavaScript.
* No request is sent to the server for each page navigation.

### 3. Important Components

* `<BrowserRouter>`: Wraps the whole app and enables routing. It uses the browser's history API to keep your UI in sync with the URL.
* `<Routes>`: A container that holds all your `<Route>` components and selects the right one to display based on the URL.
* `<Route>`: Maps a specific path (like `/about`) to a React component that should be rendered.
* `<Link>`: Provides navigation between routes without causing a full page reload. Replaces traditional anchor (`<a>`) tags.
* `useParams()`: A React hook that allows you to read dynamic values from the URL. Commonly used in pages with dynamic routing, like blog post pages.

---

## 🔁 Client-Side vs Server-Side Routing

| Feature     | Client-Side Routing                               | Server-Side Routing                 |
| ----------- | ------------------------------------------------- | ----------------------------------- |
| Handled By  | Browser using JavaScript (React Router)           | Server (Node, PHP, Python, etc.)    |
| Page Reload | No reload (SPA behavior)                          | Full page reload on each request    |
| Performance | Faster after initial load                         | Slower due to server response time  |
| SEO         | Needs extra setup (like SSR with Next.js)         | Better by default                   |
| Navigation  | Handled by React Router                           | Handled by server route handlers    |
| Example     | `/about` shows component instantly without reload | `/about` triggers full HTTP request |

---

## 🛠️ Basic Example

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
```

---

## ✅ Nested Routes

Use nested routes when you want to show subpages inside a main route, like a dashboard.

```jsx
// App.js
<Route path="/dashboard/*" element={<Dashboard />} />
```

```jsx
// Dashboard.js
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="profile">Profile</Link>
      <Link to="settings">Settings</Link>

      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
```

---

## 🔁 Dynamic Routes

Dynamic routes allow you to pass variables (like an ID) in the URL.

```jsx
// App.js
<Route path="/post/:postId" element={<Post />} />
```

```jsx
// Post.js
import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();
  return <h2>Post ID: {postId}</h2>;
}
```

### 🧠 Explanation of `useParams()`

* `useParams()` is a React Router hook.
* It returns an object containing all URL parameters defined in the route.
* Example: If your route is `/user/:id`, then `useParams()` will return `{ id: '123' }` if you navigate to `/user/123`.
* You can use it to fetch data or display content based on the URL.

---

## ❌ 404 Not Found Page

Show a default message for unknown routes.

```jsx
// NotFound.js
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
```

Add to your route list:

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 📌 Summary Table

| Feature       | Description                                         |
| ------------- | --------------------------------------------------- |
| `<Link>`      | Navigate without refreshing the page                |
| `<Routes>`    | Wraps all the route components                      |
| `<Route>`     | Defines which component to show for a given path    |
| `:param`      | Dynamic URL segments like `/post/:id`               |
| `useParams()` | Reads dynamic URL values from the URL               |
| `path="*"`    | Catch-all path for unknown routes                   |
| Nested Routes | Routes defined within components for sub-navigation |

---


