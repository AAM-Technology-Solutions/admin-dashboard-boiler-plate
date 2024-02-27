import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import LoginIcon from "@mui/icons-material/Login";
import { LoadingButton } from "@mui/lab";

import { useAuth } from "../hooks/useAuth";
import { LoginRequest } from "../model/login-request";

/* Form schema */

export const LoginForm = (): JSX.Element => {
  /* component states */
  const validationSchema = yup.object({
    userName: yup.string().required("user-name-is-required"),
    password: yup.string().required("password-is-required"),
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  /* hooks */
  const { submitLoginRequest, selectIsLoading } = useAuth();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema,
    onSubmit: (data: any) => {
      const request: LoginRequest = {
        ...data,
        clientInfo: window.navigator.userAgent,
      };
      submitLoginRequest(request);
    },
  });

  /* Event handlers */
  const handleClickShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ marginTop: "1rem" }}>
        <TextField
          fullWidth
          size="medium"
          id="userName"
          name="userName"
          label={"username"}
          autoComplete="off"
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          // helperText={formik.touched.userName && formik.errors.userName}
          autoFocus
        />
      </div>

      <div style={{ marginTop: "0.7rem" }}>
        <TextField
          fullWidth
          id="password"
          autoComplete="off"
          name="password"
          size="medium"
          label={"Password"}
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          // helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <LoadingButton
          size="medium"
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          loading={selectIsLoading} // Set the loading prop
          disableElevation
          startIcon={<LoginIcon />}
        >
          {"Login"}
        </LoadingButton>
      </div>
    </form>
  );
};
