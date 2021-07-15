import { Box, makeStyles, Typography } from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import Icons from "constants/icons";
import AuthForm from "features/Auth/components/AuthForm";
import { login } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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
    borderRadius: "1rem",
  },

  title: {
    marginTop: "1.5rem",
    marginBottom: "1rem",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = async (data) => {
    try {
      const action = login(data);

      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      enqueueSnackbar("Logged in successfully 🎉🎉", { variant: "success" });
      history.push("/account");
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Login failed", { variant: "error" });
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.form}>
        <img src={Icons.DEV_ICON} alt='' />

        <Typography variant='h6' component='h1' className={classes.title}>
          Login
        </Typography>

        <AuthForm isLogin onSubmit={handleFormSubmit} />
      </Box>
    </Box>
  );
};

export default LoginPage;
