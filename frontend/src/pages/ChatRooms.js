import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function ChatRooms() {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const res = await API.get("/rooms");
    setRooms(res.data);
  };

  const createRoom = async () => {
    await API.post("/rooms", { name: roomName });
    setRoomName("");
    fetchRooms();
  };

  return (
    <div>
      <h2>Chat Rooms</h2>

      <input
        placeholder="New Room Name"
        value={roomName}
        onChange={e => setRoomName(e.target.value)}
      />
      <button onClick={createRoom}>Create Room</button>

      <ul>
        {rooms.map(room => (
          <li key={room._id} onClick={() => navigate(`/chat/${room._id}`)}>
            {room.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatRooms;
