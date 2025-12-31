export default function Chat() {
  return (
    <div className="chat-box">
      <div className="messages">
        <div className="message">Hello 👋</div>
        <div className="message my-message">Hi 😄</div>
      </div>

      <input
        placeholder="Type a message..."
        style={{ padding: "10px", border: "none" }}
      />
    </div>
  );
}
