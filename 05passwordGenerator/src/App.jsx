import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:',.<>?/~`-="
    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select()
    // if(passwordRef.current)
    //   passwordRef.current.setSelectionRange(0,5)
      window.navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // hide after 2s
    }
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3 text-xl font-semibold">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-800 text-white px-4 py-1 shrink-0 transition-all duration-300 ease-in-out hover:bg-blue-700 active:scale-95 relative"
          >
            {copied ? '✔ Copied!' : 'Copy'}
          </button>
        </div>

        <div className="flex items-center gap-x-1 mb-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1 py-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed(prev => !prev)}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
