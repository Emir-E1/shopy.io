import { use, useContext, useState, createContext } from "react";

const AuthContext = createContext();

const userAuth = {
  email: "test@gmail.com",
  name: "test1",
  password: 123,
};

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  function handleLogin(user) {
    if (!user) return;
    if (user.email === userAuth.email && user.password === userAuth.password) {
      setIsAuth(true);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuth, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
