import NavigationBar from "./Components/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Outlet />
    </div>
  );
}

export default App;
