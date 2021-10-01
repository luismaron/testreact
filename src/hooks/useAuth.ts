import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export function useAuth(){
  const value = useContext(AuthContext);
  return value;
}