import "./App.css";
import PorDoSol from "../src/assets/porDoSol.png";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionarRender from "./components/ConditionarRender";

function App() {
  return (
    <div className="App">
      <div>
        {" "}
        <img src="/imgpequena.png" alt="" />
      </div>
      <div>
        <img src={PorDoSol} alt="" />
      </div>
      <ManageData></ManageData>
      <ListRender></ListRender>
      <ConditionarRender></ConditionarRender>
    </div>
  );
}

export default App;
