import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={{ padding: "8px", margin: "5px", width: "200px" }}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ padding: "8px", margin: "5px", width: "200px" }}
      />
      <br />
      <button type="submit" style={{ padding: "8px 16px", marginTop: "10px" }}>
        Se connecter
      </button>
      {success && <p>Connexion réussie !</p>}
    </form>
  );
}

export default LoginForm;
