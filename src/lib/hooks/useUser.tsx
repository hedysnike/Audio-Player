import { createContext, useContext, useEffect, useState } from "react";


export interface User {
  id:         string;
  createdAt:  string;
  updatedAt:  string;
  username:   string;
  password:   string;
  token:      string;
}


interface UserContext {
  user: User | null;
  isLoggedIn: boolean;
  retry: () => Promise<void>;
  logout: any;
}

const UserContext = createContext<UserContext>({
  user: null,
  isLoggedIn: false,
  retry: async () => {},
  logout: async () => {},
});

export const useUser = () => useContext(UserContext);

function useUserProvider() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUser = async () => {
    try {
      const res = await fetch("/api/user");
      if (!res.ok) throw res;

      const data = await res.json();

      setUser(data.user);
      setIsLoggedIn(true);
    } catch (error) {
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  const logout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });
  
      if (!res.ok) throw res;
  
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  

  useEffect(() => {
    void fetchUser();
  }, []);

  return { user, isLoggedIn, logout, retry: fetchUser };
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { user, isLoggedIn, logout, retry, } = useUserProvider();

  return (
    <UserContext.Provider value={{ user, isLoggedIn, logout, retry, }}>
      {children}
    </UserContext.Provider>
  );
}
