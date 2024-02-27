import { useAppDispatch, useAppSelector } from "../../../store/hooks/app-store.hook";
import { Session } from "../model";
import { LoginRequest } from "../model/login-request";
import { logIn, logOut, selectIsLoading, selectSession } from "../store/auth.slice";

export const useAuth = (): {
  session: Session;
  submitLoginRequest: (request: LoginRequest) => void;
  logOut: () => void;
  selectIsLoading?: boolean;
} => {
  const session = useAppSelector(selectSession);
  const isLoading = useAppSelector(selectIsLoading);

  const dispatch = useAppDispatch();
  return {
    session,
    submitLoginRequest: (request: LoginRequest) => {
      void dispatch(logIn(request));
    },
    logOut: () => {
      dispatch(logOut());
    },
    selectIsLoading: isLoading,
  };
};