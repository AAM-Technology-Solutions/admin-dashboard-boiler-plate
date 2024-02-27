import React from "react";
import { Route, Routes, createBrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { LoginPage, useAuth } from "../libs/auth";
import Shell from "../libs/shell";
import { logOut } from "../libs/auth/store/auth.slice";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks/app-store.hook";
import Dashboard from "../feature/dashboard";
import { NotFoundPage } from "../libs/core";

export const Routing = (): JSX.Element => {
    /* hooks */
    const { session } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

  
    const localSession = localStorage.getItem("session");
  
    useEffect(() => {
      if (!session || !localSession) {
        dispatch(logOut());
        navigate("/login");
      } else if (session && location.pathname === "/login") {
        navigate("/tasks");
      }
    }, [session, location.pathname, navigate, dispatch, localSession]);
  
    return (
      <>
        {/* <ScrollRestoration /> */}
        <Routes>
          {session === null && <Route path="/login" element={<LoginPage />} />}
  
          {session !== null && (
            <Route path="/" element={<>{<Shell />}</>}>
              <Route index element={<Dashboard/>}/>
              
            </Route>
          )}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    );
  };