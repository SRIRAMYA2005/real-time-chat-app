import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import API from "../services/api";

const socket = io("http://localhost:5000");

function Chat() {
  const { roomId } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("joinRoom", roomId);

    API.get(`/messages/${roomId}`).then(res => {
      setMessages(res.data);
    });

    socket.on("receiveMessage", data => {
      setMessages(prev => [...prev, data]);
    });

    return () => socket.off("receiveMessage");
  }, [roomId]);

  const sendMessage = async () => {
    const msgData = { roomId, text: message };
    socket.emit("sendMessage", msgData);
    await API.post("/messages", msgData);
    setMessage("");
  };

  return (
    <div>
      <h2>Chat</h2>

      <div>
        {messages.map((msg, i) => (
          <p key={i}>{msg.text}</p>
        ))}
      </div>

      <input
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
