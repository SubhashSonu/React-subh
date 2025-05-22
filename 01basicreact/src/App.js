import Subh from './Subh.js'

function App() {
  return (
    <div>
      <Subh />
      <h1>Hello React</h1>
      <h2>React Notes</h2>

      <ol>
        <li>Setting up React App
          <ul>
            <li>Use <code>npx create-react-app my-app</code> to create a new project</li>
            <li>Project includes <code>src/</code>, <code>public/</code>, and <code>package.json</code></li>
          </ul>
        </li>

        <li>Useful npm Commands
          <ul>
            <li><code>npm start</code> - Starts local dev server at <code>localhost:3000</code></li>
            <li><code>npm run build</code> - Creates optimized <code>build/</code> folder</li>
            <li><code>npm install</code> - Installs all dependencies</li>
            <li><code>npm install [package]</code> - Installs additional packages</li>
          </ul>
        </li>

        <li>Handling Errors
          <ul>
            <li><b>react-scripts not recognized</b> - Happens when dependencies are broken</li>
            <li>Fix with:
              <ul>
                <li><code>rm -rf node_modules package-lock.json</code></li>
                <li><code>npm cache clean --force</code></li>
                <li><code>npm install</code></li>
              </ul>
            </li>
          </ul>
        </li>

        <li>Basic Terminal Navigation
          <ul>
            <li><code>cd foldername</code> - Move into folder</li>
            <li><code>cd ..</code> - Go one folder up</li>
            <li><code>code .</code> - Open current folder in VS Code</li>
          </ul>
        </li>

        <li>Project File Structure
          <ul>
            <li><code>src/</code> - Main components</li>
            <li><code>public/</code> - Static HTML and assets</li>
            <li><code>package.json</code> - Project config and dependencies</li>
          </ul>
        </li>

        <li>What's Coming Next
          <ul>
            <li>JSX Basics</li>
            <li>Creating Components</li>
            <li>Props and State</li>
            <li>Handling Events</li>
            <li>React Hooks: <code>useState</code> & <code>useEffect</code></li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default App;
