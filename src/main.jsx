import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
function MyApp(){
  return(
    <h1>custom h1 !</h1>
  )
}
// const CustomEle={
//   <a href="http://www.google.com" target="_black">google</a>
// }
const ReactEle=React.createElement(
  "a",
  {
  href:"http://www.google.com",
  target:"_blank"
},
"click me to visit google"
)
let root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
  
    ReactEle
  
)