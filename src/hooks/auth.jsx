import {createContext, useContext, useState, useEffect} from "react";
import {api} from "../../services/api.js";

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState({});

  async function signIn({email, password}) {

    try {
      const response = await api.post("/sessions", {email, password});
      const {user, token} = response.data;

      localStorage.setItem("@rocketnotes-Thorvi:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes-Thorvi:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;



      setData({user, token});
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível realizar o login.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes-Thorvi:user");
    localStorage.removeItem("@rocketnotes-Thorvi:token");

    setData({});
  }

useEffect(() => {
  const token = localStorage.getItem("@rocketnotes-Thorvi:token");
  const user = localStorage.getItem("@rocketnotes-Thorvi:user");

  if (token && user) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({
      token,
      user: JSON.parse(user)
    });
  }

}, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth};
