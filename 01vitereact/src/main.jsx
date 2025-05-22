import React from 'react';
import { createRoot } from 'react-dom/client';


import App from './App.jsx'

function MyApp(){
  return(
    <>
       <h1>Custom App !</h1>
    </>
  )
}

function BuildApp(){
  return (
       <>
       <h2>DataHub</h2>
       </>

  )
}
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const AnotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',  target: '_blank'},
  'click me to visit google'
)
 
createRoot(document.getElementById('root')).render(
   <>
   <App/>
   {/* <MyApp/>
   <BuildApp/> */}

   {reactElement}

   {/* {AnotherElement} */}
   
   </>
)


