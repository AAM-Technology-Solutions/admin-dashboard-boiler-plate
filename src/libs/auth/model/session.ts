import { UserInfo } from "../../core";

export type Session = {
  accessToken: string;
  userInfo: UserInfo;
} | null;
