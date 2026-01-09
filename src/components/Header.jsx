import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

function IconSun() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 4V2M12 22v-2M4.93 4.93L3.51 3.51M20.49 20.49l-1.42-1.42M4 12H2m20 0h-2M4.93 19.07l-1.42 1.42M20.49 3.51l-1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Header({ onAddPost }) {
  const auth = useContext(AuthContext);
  const themeCtx = useContext(ThemeContext);

  const user = auth?.user ?? null;
  const login = auth?.login ?? (() => {});
  const logout = auth?.logout ?? (() => {});

  const theme = themeCtx?.theme ?? 'light';
  const dispatchTheme = themeCtx?.dispatch ?? (() => {});

  const isDark = theme === 'dark';
  const [search, setSearch] = useState("");

  return (
    <header className="app-header" role="banner">
      <div className="app-header-left">
        <h1 className="app-title">ReactBook</h1>
      </div>

      <div className="app-header-right">
        <div className="header-search">
          <input
            className="input"
            type="search"
            placeholder="Rechercher des posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: 220 }}
            aria-label="Rechercher"
          />
        </div>

        <button className="notif-bell" title="Notifications" aria-label="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="notif-count">0</span>
        </button>

        <div className="header-user">
          {user ? (
            <>
              <span className="user-name">{user.name}</span>
              <button className="btn ghost" onClick={logout} style={{ marginLeft: '0.5rem' }}>Se déconnecter</button>
            </>
          ) : (
            <span className="guest">Invité</span>
          )}
        </div>

        <button
          className="theme-toggle"
          onClick={() => dispatchTheme({ type: 'TOGGLE_THEME' })}
          aria-label="Basculer thème"
          title={`Mode ${isDark ? 'sombre' : 'clair'}`}
        >
          {isDark ? <IconMoon /> : <IconSun />}
        </button>
      </div>
    </header>
  );
}

export default Header;
