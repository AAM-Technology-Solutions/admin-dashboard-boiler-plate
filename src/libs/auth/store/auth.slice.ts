import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginRequest } from "../model/login-request";
import { Session } from "../model/session";
import { getCurrentSession } from "../utilities/get-current-session";
import { RootState } from "../../../store/app-store";

interface AuthState {
  session: Session;
  isLoading: boolean;

}

// Define the initial state using that type
const initialState: AuthState = {
  session: getCurrentSession(),
  isLoading: false,

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session>) => {
      localStorage.setItem("session", JSON.stringify(action.payload));
      state.session = action.payload;
    },
    logOut: (state) => {
      localStorage.removeItem("session");
      state.session = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export function logIn(request: LoginRequest) {
  return async function logInThunk(dispatch: any, getState: any) {
    try {
      dispatch(setLoading(true)); // Start loading

      const userInfo = await axios.get("", {
        data: request
      });
     
      dispatch(setSession({ accessToken: userInfo.data.access_token, userInfo: userInfo.data }));
 
    } catch (error: any) {
      
    }
    finally {
      dispatch(setLoading(false)); 
    }
  };
}

export const { setSession, logOut,setLoading } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSession = (state: RootState):Session => state.auth.session;
export const selectIsLoading = (state: RootState):boolean => state.auth.isLoading;

export const authReducer = authSlice.reducer;
