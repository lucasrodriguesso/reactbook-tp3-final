import { useState } from "react";

function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Email et mot de passe sont requis.");
      return;
    }

    console.log({ email, password });
    setSuccess(true);
    if (onSuccess) {
      const name = email ? email.split("@")[0] : "Utilisateur";
      onSuccess({ email, name });
    }
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form" style={{ margin: "20px" }}>
      <input
        type="email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        aria-label="Email"
      />
      <input
        type="password"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        aria-label="Mot de passe"
      />
      <button className="btn primary" type="submit" style={{ marginTop: "6px" }} disabled={!email.trim() || !password.trim()}>
        Se connecter
      </button>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      {success && <p>Connexion réussie !</p>}
    </form>
  );
}

export default LoginForm;
