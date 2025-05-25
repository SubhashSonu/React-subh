import { useState } from "react"
function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
       <div className="flex flex-wrap justify-center
       gap-3 shadow-lg bg-white px-2 py-2
       rounded-3xl">
        <button
        onClick={()=> setColor("red")} 
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg transition-transform active:scale-95"
        style={{backgroundColor: "red"}}
        >Red</button>
        <button 
        onClick={()=> setColor("green")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg transition-transform active:scale-95"
        style={{backgroundColor: "green"}}
        >Green</button>
        <button 
        onClick={()=> setColor("blue")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg transition-transform active:scale-95"
        style={{backgroundColor: "blue"}}
        >Blue</button>
        <button 
        onClick={()=> setColor("orange")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg transition-transform active:scale-95"
        style={{backgroundColor: "orange"}}
        >Orange</button>
        <button 
        onClick={()=> setColor("violet")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg transition-transform active:scale-95"
        style={{backgroundColor: "violet"}}
        >Violet</button>
        <button 
        onClick={()=> setColor("yellow")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-lg transition-transform active:scale-95"
        style={{backgroundColor: "yellow"}}
        >Yellow</button>
        <button 
        onClick={()=> setColor("black")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg transition-transform active:scale-95"
        style={{backgroundColor: "black"}}
        >Black</button>
       </div>
      </div>
    </div>
  )
}

export default App
