import './App.css';
// import UseStateFunction from './components/ReactHooks/UseStateFunction.jsx'; // Correct casing
import Footer from './components/Footer.jsx';
import Header from './components/Header';
// import UseStateFunctonDouble from './components/ReactHooks/UseStateFunctonDouble.jsx';
// import UseEffectFunction from './components/ReactHooks/UseEffectFunction.jsx';
import Cartbutton from "./components/Cartbutton.js";
//import UseStatetry from './components/interviewTasks/UseStatetry.jsx'; // Capitalized to fix the issue
import Testtry from './components/interviewTasks/Testtry.jsx';
import UseProps from './components/PropsSet/UseProps.jsx';
import UseStateFunction from './components/ReactHooks/UseStateFunction.jsx';
import UseRefFunction from './components/ReactHooks/UseRefFunction.jsx';
import UseMemo from './components/ReactHooks/UseMemo.jsx';
import { useCallback, useState } from 'react';
import UseCallback from './components/ReactHooks/UseCallback.jsx';
import { Button } from 'react-bootstrap';

function App() {
  const userData = {
    name: "Bahir",
    age: 25,
    phone: "0768816878",
    email: "mbh@gmail.com",
  };

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  const increment = useCallback(() =>{
    console.log(flag, 'flag value')
    setCount(count => count+1);
  }, [flag]);
  

  return (
    <div>
      <Header />
      <Cartbutton/>
      <Testtry/>
      {/* <UseProps name={userData.name} age={userData.age} phone={userData.phone} email={userData.email}/> */}
      <UseProps {...userData}/> {/*Spread Operator */}
      <UseCallback count={count} increment={increment}/>
      <Button onClick={() => setFlag((flag) => !flag)}>Recreate increment function</Button>
      <UseStateFunction/>
      <UseRefFunction/>
      <UseMemo/>
      <Footer />
    </div>
  );
}

export default App;
