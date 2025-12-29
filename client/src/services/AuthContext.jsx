import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) {
      setToken(cookies.token);
    }
  }, [cookies.token]);

  const login = (newToken) => {
    setCookie("token", newToken, {
      path: "/",
      sameSite: "strict",
    });
    setToken(newToken);
  };

  const logout = () => {
  removeCookie("token", {
    path: "/",
    sameSite: "strict",
  });
  setToken(null);
};


  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn: Boolean(token),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
