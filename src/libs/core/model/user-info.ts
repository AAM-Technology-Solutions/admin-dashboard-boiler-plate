import { Role } from ".";

interface UserEmployee {
  FullName: string | null;
  Id: string;
  Code: string;
  PhotoFileId?:string
  ServerDate?:number
}
interface UserInfoProps {
  Id: string;
  Time?: number;
  UserName: string;
  FullName?: string;
  Email?: string;
  PhoneNo?: string;
  PasswordHash?: string;
  PublicKey?: string;
  Enabled?: boolean;
  ServerDate?:number
  EmployeeId?:string
}

export interface UserInfo extends UserInfoProps {
  Roles?: Role[];
  employeeInfo?: UserEmployee;
}