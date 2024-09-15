import NavigationBar from "./Components/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App w-full h-[100%]">
      <NavigationBar/>
      <Outlet />
    </div>
  );
}

export default App;
