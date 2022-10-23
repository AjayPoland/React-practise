import './App.css';
import MethodConstructor from './component/MethodConstructor';
import Object from './component/Object';
// import HelloAjay from './component/HelloAjay';
import HelloWorld from './component/HelloWorld';
// import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <HelloWorld creater="Ajay" country="INDIA"/>
      {/* <HelloWorld creater="Ajay" country="POLAND"/> */}
      {/* <HelloAjay name="Priyanka" position="Assistant"/> */}
      {/* <HelloAjay name="Bijoy" position="Casher" /> */}
      {/* <Login/> */}
      <MethodConstructor/>
      <Object/>
    </div>
  );
}

export default App;
