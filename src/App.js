import './App.css';
import UseStateFunction from './components/ReactHooks/UseStateFunction.jsx'; // Correct casing
import Footer from './components/Footer.jsx';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <UseStateFunction/> {/* Correct casing */}
      <Footer/>
    </div>
  );
}

export default App;
