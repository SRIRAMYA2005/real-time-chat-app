import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";

function App() {
  const token = localStorage.getItem("token");
  return token ? <ChatPage /> : <AuthPage />;
}

export default App;
