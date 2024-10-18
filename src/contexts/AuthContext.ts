import { SetStateAction, createContext } from "react";

export interface AuthContextInterface {
  isAuthenticated: boolean;
  setAuthenticated: React.Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextInterface>({
  isAuthenticated: false,
  setAuthenticated: () => {}
});