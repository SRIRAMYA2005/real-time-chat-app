import Login from "../components/Login";
import Register from "../components/Register";
import "../styles/auth.css";

export default function AuthPage() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Chat Application</h2>
        <Login />
        <Register />
      </div>
    </div>
  );
}
