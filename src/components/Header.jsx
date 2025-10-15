// src/components/Header.jsx
function Header({ onAddPost }) {
  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1>ReactBook</h1>
      <button onClick={onAddPost}>Ajouter un Post</button>
    </header>
  );
}

export default Header;
