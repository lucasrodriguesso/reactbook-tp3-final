import Feed from "./components/Feed";
import UserProfile from "./components/UserProfile";
import InputLogger from "./components/InputLogger";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <UserProfile />
      <InputLogger />
      <Feed />
      <LoginForm />
    </div>
  );
}

export default App;
