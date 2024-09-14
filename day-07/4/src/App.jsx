import { createContext, useContext, useState } from 'react';
import './App.css';

// Create a ThemeContext
const ThemeContext = createContext();

// Create a UserContext
const UserContext = createContext();

// ThemeProvider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// UserProvider Component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Iftekhar Ahmed', loggedIn: true });

  const logout = () => {
    setUser({ ...user, loggedIn: false });
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <MainComponent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;

// MainComponent that uses both contexts
const MainComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(UserContext);

  return (
    <div style={{ padding: '20px', backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Welcome, {user.name}</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {user.loggedIn && <button onClick={logout}>Logout</button>}
      {!user.loggedIn && <p>You are logged out.</p>}
    </div>
  );
};
