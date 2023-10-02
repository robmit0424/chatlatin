import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import LoginScreen from "./Components/LoginScreen";
import Welcome from "./Components/Welcome";
import ChatScreen from "./Components/ChatScreen";
import CreateGroup from "./Components/CreateGroup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat" element={<ChatScreen />} />
          <Route path="groups" element={<CreateGroup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
