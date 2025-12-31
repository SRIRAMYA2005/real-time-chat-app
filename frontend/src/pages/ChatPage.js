import Rooms from "../components/Rooms";
import Chat from "../components/Chat";
import "../styles/chat.css";

export default function ChatPage() {
  return (
    <div className="chat-layout">
      <Rooms />
      <Chat />
    </div>
  );
}
