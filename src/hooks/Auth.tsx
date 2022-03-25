import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
  id: string;
  nome: string;
  avatar: string;
  telefone: string;
  date: string;
  sexo: string;
  ponstos: number;
  pesquisasRespondidas: number;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: any;
  senha: any;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void;
  updateUser(user: User): void;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: TransactionsProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Token:token');
    const user = localStorage.getItem('@User:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState;
  })

  const signIn = useCallback(async ({ email, senha }) => {
    const response = await api.post(`/login`, {
      email,
      senha,
    });

    const { user, token } = response.data.result;

    localStorage.setItem('@Token:token', token);
    localStorage.setItem('@User:user', JSON.stringify(user));

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ 
      user, 
      token
    })
  }, []);
  
  const signOut = useCallback(() => {
    localStorage.removeItem('@Token:token');
    localStorage.removeItem('@User:user');

    setData({} as AuthState)
  }, [])

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem("@User:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token]
  )

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }