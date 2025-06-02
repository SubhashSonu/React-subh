import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";

function Content() {
  const { theme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={styles}>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <ThemeToggler />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
