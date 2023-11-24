import React from 'react'
import Counter from './component/Counter'
import PasswordGenrator from './component/PasswordGenrator'
import CurrencyConverter from './component/currencyConverter/CurrencyConverter'
 
import UserContextProvider from './context/UserContextProvider'
import Login from './component/contectUsecase/Login'
import Profile from './component/contectUsecase/Profile'



const App = () => {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
   
  )
}

export default App
