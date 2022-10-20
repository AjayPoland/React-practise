import './App.css';
import HelloAjay from './component/HelloAjay';
import HelloWorld from './component/HelloWorld';

function App() {
  return (
    <div className="App">
      <HelloWorld country="INDIA"/>
      <HelloWorld country="POLAND"/>
      <HelloAjay name="Priyanka"/>
      <HelloAjay name="Bijoy"/>
    </div>
  );
}

export default App;
