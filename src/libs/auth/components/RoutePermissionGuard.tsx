import { Navigate } from "react-router-dom";
import { useAuth } from "..";
import { SYSTEM_ROOT_PERMISSION } from "../../core/model";

interface ProtectedRouteProps {
  requiredPermissions: string[];
  children: JSX.Element;
}

const RoutePermissionGuard = (props: ProtectedRouteProps): JSX.Element => {
  const { session } = useAuth();

  // Get the user's permissions from the authentication session
  const userPermissions =
    session?.userInfo?.Roles?.flatMap((role) => role?.Permissions ?? []).map(
      (permission) => permission.PermissionKey,
    ) ?? [];

  // Check if the user has the root permission, if so allow access
  if (userPermissions.includes(SYSTEM_ROOT_PERMISSION)) {
    return props.children;
  }
  // Check if the user has ALL of the required permissions, if not redirect to 404 route
  if (!props.requiredPermissions.every((permission) => userPermissions.includes(permission))) {
    return <Navigate to="/*" replace />;
  }

  // Allow access if the user has all the required permissions specified in the prop
  return props.children;
};

export default RoutePermissionGuard;
