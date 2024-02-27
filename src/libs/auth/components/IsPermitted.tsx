import React, { useEffect, useState } from "react";
import { getCurrentSession } from "../utilities";

interface Permission {
  Id: string;
  ModuleName: string;
  PermissionKey: string;
  PermissionName: string;
}

type isPermittedProps = {
  requiredPermissions: string[];
  children: React.ReactNode;
};

const IsPermitted = ({ requiredPermissions, children }: isPermittedProps): JSX.Element => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const session = getCurrentSession();

  useEffect(() => {
    const userPermissions = session?.userInfo?.Roles.flatMap((role: any) =>
      role.Permissions.map((permission: Permission) => permission.PermissionKey),
    );

    const isAuthorized =
      userPermissions?.includes("SYSTEM_ROOT") ||
      requiredPermissions.every((permission) => userPermissions?.includes(permission));

    setAuthorized(isAuthorized);
  }, [requiredPermissions, session.userInfo.Roles]);

  return <>{authorized && <>{children}</>}</>;
};

export default IsPermitted;

export const IsPermittedWithoutChildren = (requiredPermissions: string[]): boolean => {
  const [authorized, setAuthorized] = useState<boolean>(false);

  const session = getCurrentSession();

  useEffect(() => {
    const userPermissions = session?.userInfo?.Roles.flatMap((role: any) =>
      role.Permissions.map((permission: Permission) => permission.PermissionKey),
    );

    const isAuthorized =
      userPermissions?.includes("SYSTEM_ROOT") ||
      requiredPermissions.every((permission) => userPermissions?.includes(permission));

    setAuthorized(isAuthorized);
  }, [requiredPermissions, session.userInfo.Roles]);
  return authorized;
};
