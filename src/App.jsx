import React from 'react'
import Counter from './component/Counter'
import PasswordGenrator from './component/PasswordGenrator'
import CurrencyConverter from './component/currencyConverter/CurrencyConverter'
 
import UserContextProvider from './context/UserContextProvider'
import Login from './component/contectUsecase/Login'
import Profile from './component/contectUsecase/Profile'
import Index from './component/todo/Index'




// const App = () => {
//   return (
//     <UserContextProvider>
//       <Login />
//       <Profile />
//     </UserContextProvider>
//   );
// };
const App = () => {
  return (
    <Index/>
  );
};

export default App
