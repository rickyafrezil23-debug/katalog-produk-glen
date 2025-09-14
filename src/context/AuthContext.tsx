import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: any;
  login: (email: string, pass: string) => Promise<boolean>;
  register: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Di aplikasi nyata, Anda akan memeriksa sesi yang ada di sini
    setLoading(false);
  }, []);

  const login = async (email: string, pass: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi request jaringan
    if (email === "admin@example.com" && pass === "admin123") {
      setUser({ email, role: "admin" });
      setLoading(false);
      return true;
    }
    if (email === "user@example.com" && pass === "user123") {
      setUser({ email, role: "user" });
      setLoading(false);
      return true;
    }
    setLoading(false);
    return false;
  };

  const register = async (email: string, pass: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi request jaringan
    // Di aplikasi nyata, Anda akan memeriksa apakah email sudah ada sebelum mendaftar
    console.log(`Mendaftarkan pengguna: ${email} dengan password: ${pass}`);
    const newUser = { email, role: "user" }; // Pengguna baru selalu memiliki peran 'user'
    setUser(newUser);
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};