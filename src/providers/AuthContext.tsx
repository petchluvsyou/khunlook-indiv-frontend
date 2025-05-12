"use client";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import UserService from "@/libs/UserService/UserService";
import { User } from "@/libs/UserService/UserServiceModel";

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  login: (username: string, password: string) => Promise<User | void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  const path = usePathname();
  const router = useRouter();

  const refreshAccessToken = useCallback(async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      logout();
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
        {
          refreshToken,
        }
      );

      const { accessToken: newAccessToken } = response.data.tokens;

      localStorage.setItem("accessToken", newAccessToken);
      setAccessToken(newAccessToken);
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      logout();
    }
  }, []);

  useEffect(() => {
    setIsReady(false);

    const protectRoute = async () => {
      if (path === "/") {
        setIsReady(true);
        return;
      }

      if (path.includes("/user")) {
        const user = localStorage.getItem("user");
        const accessToken = localStorage.getItem("accessToken");
        const isAuthenticated = user && accessToken;
        if (!isAuthenticated) {
          router.push("/login");
          return;
        }
      }

      setIsReady(true);
    };

    protectRoute();
  }, [path]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedAccessToken = localStorage.getItem("accessToken");

    if (storedUser && storedAccessToken) {
      setUser(JSON.parse(storedUser));
      setAccessToken(storedAccessToken);
    }

    const interval = setInterval(() => {
      refreshAccessToken();
    }, 55 * 60 * 1000);

    return () => clearInterval(interval);
  }, [refreshAccessToken]);

  const login = async (username: string, password: string) => {
    try {
      const userService = new UserService();
      const response = await userService.userLogin({
        USERNAME: username,
        PASSWORD: password,
      });

      const { user, tokens } = response.data.data;
      console.log(user, tokens);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", tokens.accessToken);
      localStorage.setItem("refreshToken", tokens.refreshToken);

      setUser(user);
      setAccessToken(tokens.accessToken);

      router.push("/");
      return user;
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Invalid username or password.");
    }
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.clear();
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout }}>
      {isReady ? children : <p>Loading</p>}
    </AuthContext.Provider>
  );
};
