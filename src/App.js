import { CountProvider } from "./Context/countProvider";
import Contador from "./components/Contador";

function App() {

  console.log("Tengo el último commit firmado");

  return (
    <div className="App">
      <CountProvider>
        <Contador />
      </CountProvider>
    </div>
  );
}

export default App;
