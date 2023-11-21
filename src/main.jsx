import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// function MyApp(){
//   return(
//     <h1>custom h1 !</h1>
//   )
// }
// const CustomEle={
//   <a href="http://www.google.com" target="_black">google</a>
// }

// let monologue="google use "
// const ReactEle=React.createElement(
//   "a",
//   {
//   href:"http://www.google.com",
//   target:"_blank"
// },
// // "click me to visit google"
// monologue,
// )
let root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)