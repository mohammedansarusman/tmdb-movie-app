import NavigationBar from "./Components/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App w-full bg-gradient-to-br from-slate-900 to-gray-700">
      <NavigationBar/>
      <Outlet />
    </div>
  );
}

export default App;
