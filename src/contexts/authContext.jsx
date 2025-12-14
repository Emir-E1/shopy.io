import { use, useContext, useState, createContext } from "react";

const AuthContext = createContext();

const userAuth = {
  email: "test@gmail.com",
  name: "test1",
  password: "123",
};

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  function handleLogin(user) {
    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Convert password to string for comparison
    const passwordString = String(user.password);

    if (user.email === userAuth.email && passwordString === userAuth.password) {
      setIsAuth(true);
      return true;
    } else {
      throw new Error("Invalid email or password");
    }
  }

  function logout() {
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
