export const SYSTEM_ROOT_PERMISSION = "SYSTEM_ROOT";

interface PermissionProps {
  Id: string;
  TranId: string;
  PermissionName: string;
  PermissionKey: string;
}

export interface Permission extends PermissionProps {}
