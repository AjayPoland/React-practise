import './App.css';
import HelloAjay from './component/HelloAjay';
import HelloWorld from './component/HelloWorld';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <HelloWorld creater="Ajay" country="INDIA"/>
      {/* <HelloWorld creater="Ajay" country="POLAND"/> */}
      <HelloAjay name="Priyanka" position="Assistant"/>
      {/* <HelloAjay name="Bijoy" position="Casher" /> */}
      <Login/>
    </div>
  );
}

export default App;
