import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatRooms from "./pages/ChatRooms";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rooms" element={<ChatRooms />} />
        <Route path="/chat/:roomId" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
