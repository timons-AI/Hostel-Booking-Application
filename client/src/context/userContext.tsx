import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { CookiesProvider, useCookies } from "react-cookie";

export const UserContext = createContext({});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cookies, setCookie, removeCookie] = useCookies([
    "token-auth",
    "token",
  ]);
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      // Call the logout API endpoint on the server
      // await axios.post("/api/logout");

      // Clear the token from cookies
      console.log(cookies);
      removeCookie("token-auth");
      removeCookie("token");
      localStorage.removeItem("token-auth");
      localStorage.removeItem("token");
      console.log(cookies);

      // Redirect or perform any other client-side logout actions
      // For example, redirecting to the login page
      //   window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    if (!user) {
      axios.get("/users/checkauthentication").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <CookiesProvider>
      <UserContext.Provider value={{ user, setUser, handleLogout }}>
        {children}
      </UserContext.Provider>
    </CookiesProvider>
  );
}
