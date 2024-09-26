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

function App() {
  const userData = {
    name: "Bahir",
    age: 25,
    phone: "0768816878",
    email: "mbh@gmail.com",
  };

  

  return (
    <div>
      <Header />
      <Cartbutton/>
      <Testtry/>
      {/* <UseProps name={userData.name} age={userData.age} phone={userData.phone} email={userData.email}/> */}
      <UseProps {...userData}/> /*Spread Operator */
      <Footer />
    </div>
  );
}

export default App;
