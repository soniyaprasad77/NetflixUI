import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const userToken = localStorage.getItem("userToken");

  return userToken ? children : <Navigate to='/' />;
};

export default PrivateRoutes;
