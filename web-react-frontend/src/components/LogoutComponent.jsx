import { Redirect } from "react-router-dom";
import BackendService from "../services/BackendService";

const backendService = new BackendService();

export default function LogoutComponent({setIsAuthenticated}) {
  backendService.logoutAsync()
    .then(() => {
      setIsAuthenticated(false);
    })

  return <Redirect to="/"/>
}