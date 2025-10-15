import Feed from "./components/Feed";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      {/* Affiche le profil utilisateur */}
      <UserProfile />

      {/* Affiche le fil d'actualité avec Header et PostCard */}
      <Feed />
    </div>
  );
}

export default App;
