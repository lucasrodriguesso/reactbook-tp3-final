import React from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile";

export default function ProfilePage() {
  const { username } = useParams();

  return (
    <main>
      <h2>Profil de {username}</h2>
      <UserProfile username={username} />
    </main>
  );
}
