import './App.css';
// import UseStateFunction from './components/ReactHooks/UseStateFunction.jsx'; // Correct casing
import Footer from './components/Footer.jsx';
import Header from './components/Header';
// import UseStateFunctonDouble from './components/ReactHooks/UseStateFunctonDouble.jsx';
// import UseEffectFunction from './components/ReactHooks/UseEffectFunction.jsx';
import Cartbutton from "./components/Cartbutton.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <Cartbutton/>
      <Footer/>
    </div>
  );
}

export default App;
