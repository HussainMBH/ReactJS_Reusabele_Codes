//import UseStateFunction from './components/ReactHooks/UseStateFunction.jsx'; // Correct casing
// import Footer from './components/Footer.jsx';
// import Header from './components/Header';
//import UseStateFunctonDouble from './components/ReactHooks/UseStateFunctonDouble.jsx';
//import UseEffectFunction from './components/ReactHooks/UseEffectFunction.jsx';
//import Cartbutton from "./components/Cartbutton.js";
//import UseStatetry from './components/interviewTasks/UseStatetry.jsx'; // Capitalized to fix the issue
//import Testtry from './components/interviewTasks/Testtry.jsx';
//import UseProps from './components/PropsSet/UseProps.jsx';
//import UseStateFunction from './components/ReactHooks/UseStateFunction.jsx';
//import UseRefFunction from './components/ReactHooks/UseRefFunction.jsx';
//import UseMemo from './components/ReactHooks/UseMemo.jsx';
//import { useCallback, useState } from 'react';
//import UseCallback from './components/ReactHooks/UseCallback.jsx';
//import { Button } from 'react-bootstrap';
//import Day01 from './Daytry/Day01.jsx';
// import { Routes, Route } from "react-router-dom";
// import Home from "./components/pages/Home";
// import User from "./components/pages/User";
// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// import Header from "./components/Header";
// import Error from "./components/pages/Error";
import Dashboard from "./components/pages/Dashboard";

function App() {
//   const userData = {
//     name: "Bahir",
//     age: 25,
//     phone: "0768816878",
//     email: "mbh@gmail.com",
//   };

  //const [count, setCount] = useState(0);
  //const [flag, setFlag] = useState(true);

  // const increment = useCallback(() =>{
  //   console.log(flag, 'flag value')
  //   setCount(count => count+1);
  // }, [flag]);
  
  // const userData = {
  //   name: "Bahir",
  //   age: 24,
  //   mail: "mbh@gmail.com"
  // }

  return (
    <div>
      {/* <Header />
      <Cartbutton/>
      {/* <Testtry/>
      {/* <UseProps name={userData.name} age={userData.age} phone={userData.phone} email={userData.email}/> */}
     {/* <UseProps {...userData}/> {/*Spread Operator */}
      {/* <UseCallback count={count} increment={increment}/>
      <Button onClick={() => setFlag((flag) => !flag)}>Recreate increment function</Button>
      <UseStateFunction/>
      <UseRefFunction/>
      <UseMemo/> */}
      {/* <Day01 name={userData.name} age={userData.age} mail={userData.mail}/>
      <Footer /> */}

      {/* <Header/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user/:username" element={<User/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      */}
      <Dashboard/>
    </div>
    
  );
}

export default App;
