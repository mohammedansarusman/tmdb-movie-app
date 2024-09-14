import NavigationBar from "./Components/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App w-full bg-pink-500">
      <NavigationBar/>
      <Outlet />
    </div>
  );
}

export default App;
