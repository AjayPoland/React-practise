import "./App.css";
import MethodConstructor from "./component/MethodConstructor";
import Object from "./component/Object";
// import HelloAjay from './component/HelloAjay';
import HelloWorld from "./component/HelloWorld";
import Login from "./component/Login";
import Iterator from "./component/Iterator";
import SetDemo from "./component/SetDemo";
import MapDemo from "./component/MapDemo";
import Object_adv from "./component/Object_adv";
import EventBinding from "./component/EventBinding";


function App() {
  return (
    <div className="App">
      {/* <HelloWorld creater="Ajay" country="INDIA"/> */}
      {/* <HelloWorld creater="Ajay" country="POLAND"/> */}
      {/* <HelloAjay name="Priyanka" position="Assistant"/> */}
      {/* <HelloAjay name="Bijoy" position="Casher" /> */}
      {/* <Login /> */}
      {/* <MethodConstructor/>
      <Object/> */}
      {/* <Iterator/> */}
      {/* <SetDemo/> */}
      {/* <MapDemo/> */}
      {/* <Object_adv/> */}
      <EventBinding/>
    </div>
  );
}

export default App;
