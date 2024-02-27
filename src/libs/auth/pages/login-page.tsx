import React from "react";
import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
// import useTranslate from "libs/localisations/custom-translation";
import { LoginForm } from "../components/login-form";
import background from "./loginbg.jpg";  

export const LoginPage = (): JSX.Element => {
  // const T=useTranslate()
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
        position: 'relative'
      }}
    >
      <Grid 
      item xs={12} 
      md={6}
      // marginTop={20}
      >
        <Card sx={{ borderRadius: "20px", display: "flex" }}>
          <CardMedia
            sx={{
              backgroundColor: "primary.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "48px 10px",
              }}
            >

              <img
                src="/assets/geberemartlogo.svg"
                alt="Gebere Mart logo"
                width={"250wh"}
                loading="lazy"
              />
            </Box>
          </CardMedia>
          <CardContent sx={{ width: "50%" }}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px 0px",
              }}
            >
              <Avatar
                sx={{ bgcolor: "primary.main", width: "80px", height: "80px" }}
              >
                <PersonIcon sx={{ width: "50px", height: "50px" }} />
              </Avatar>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
               {("login")}
              </Typography>
              <Box
                sx={{
                  width: "80px",
                  height: "7px",
                  backgroundColor: "primary.main",
                  borderRadius: "50px",
                  marginTop: "10px",
                  marginBottom: "15px",
                }}
              />
              <LoginForm />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};