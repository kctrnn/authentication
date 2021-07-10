import { Box, makeStyles, Typography } from "@material-ui/core";
import Icons from "constants/icons";
import AuthForm from "features/Auth/components/AuthForm";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    minHeight: "100vh",
  },

  form: {
    maxWidth: "30rem",
    padding: theme.spacing(7, 7, 4),
    border: "1px solid #BDBDBD",
    borderRadius: "1.5rem",
  },

  title: {
    marginTop: "1.5rem",
    marginBottom: "1rem",
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.form}>
        <img src={Icons.DEV_ICON} alt='' />

        <Typography variant='h6' component='h1' className={classes.title}>
          Login
        </Typography>

        <AuthForm isLogin />
      </Box>
    </div>
  );
};

export default LoginPage;
