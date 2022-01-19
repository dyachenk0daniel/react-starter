import { useRoutes } from 'react-router-dom';
import routes from "@/routes";

const RoutingManager = () => {
  return useRoutes(routes);
};

export default RoutingManager;
