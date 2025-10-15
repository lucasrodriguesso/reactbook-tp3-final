import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // état pour le chargement
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => {
        if (!res.ok) throw new Error("Erreur lors de la récupération des données");
        return res.json();
      })
      .then(data => {
        setUser(data);
        setIsLoading(false); // chargement terminé
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Chargement...</p>; // affichage pendant la requête
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "8px",
      width: "300px",
      margin: "20px auto",
      textAlign: "left"
    }}>
      <h2>{user.name}</h2>
      <p><strong>Email :</strong> {user.email}</p>
      <p><strong>Société :</strong> {user.company.name}</p>
    </div>
  );
}

export default UserProfile;
