import Feed from "./components/Feed";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import InputLogger from "./components/InputLogger";
import LoginForm from "./components/LoginForm";
import MessageForm from "./components/MessageForm";
import MessageBoard from "./components/MessageBoard";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";
import ToastContainer from "./components/ToastContainer";
import { Routes, Route } from "react-router-dom";

function Home() {
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

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <Header onAddPost={() => {}} />
          <Routes>
            <Route path="/" element={<ProtectedRoute><FeedPage/></ProtectedRoute>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user/:username" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>} />
          </Routes>
          <ToastContainer />
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
