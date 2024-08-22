import './App.css';
// // import UseStateFunction from './components/ReactHooks/UseStateFunction.jsx'; // Correct casing
// import Footer from './components/Footer.jsx';
// import Header from './components/Header';
// // import UseStateFunctonDouble from './components/ReactHooks/UseStateFunctonDouble.jsx';
// //import UseEffectFunction from './components/ReactHooks/UseEffectFunction.jsx';
// import Cartbutton from "./components/Cartbutton.js"
import UseProps from './components/buttonpages/UseProps.jsx';

function App() {
  const userData = {
    name: "Bahir",
    age: 24,
    contactNumber: "0768816878",
    mail: "mbahirh624@gmail.com"
  };

  return (
    <div>
      <h1>This is Testing Data</h1>
      <UseProps 
        name={userData.name}
        age={userData.age}
        phonenumber={userData.contactNumber}
        mail={userData.mail} 
      />
    </div>
  );
}

export default App;
