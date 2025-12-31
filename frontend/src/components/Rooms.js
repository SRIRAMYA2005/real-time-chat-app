export default function Rooms({ rooms, joinRoom }) {
  return (
    <div className="rooms">
      <h3>Rooms</h3>
      {rooms.map(room => (
        <div
          key={room._id}
          className="room"
          onClick={() => joinRoom(room._id)}
        >
          {room.name}
        </div>
      ))}
    </div>
  );
}
