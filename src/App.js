import './App.css';
import UseStateFunction from './components/ReactHooks/UseStateFunction.jsx'; // Correct casing
import Footer from './components/Footer.jsx';
import Header from './components/Header';
import UseStateFunctonDouble from './components/ReactHooks/UseStateFunctonDouble.jsx';
import UseEffectFunction from './components/ReactHooks/UseEffectFunction.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <UseStateFunction/>
      <UseStateFunctonDouble/>
      <UseEffectFunction/>
      <Footer/>
    </div>
  );
}

export default App;
