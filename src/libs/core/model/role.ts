import { Permission } from ".";

interface RoleProps {
  Id: string;
  Key: string;
  RoleName: string;
}

export interface Role extends RoleProps {
  Permissions?: Permission[];
}
