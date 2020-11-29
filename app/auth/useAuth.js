import { useContext } from "react";
import Context from "../../context/context";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(Context.UserContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  return { user, logIn, logOut };
};
