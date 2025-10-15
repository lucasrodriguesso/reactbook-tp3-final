import Feed from "./components/Feed";
import UserProfile from "./components/UserProfile";
import InputLogger from "./components/InputLogger";
import LoginForm from "./components/LoginForm";
import MessageForm from "./components/MessageForm";
import MessageBoard from "./components/MessageBoard";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <UserProfile />
      <InputLogger />
      <Feed />
      <LoginForm />
      <MessageBoard />
    </div>
  );
}

export default App;
