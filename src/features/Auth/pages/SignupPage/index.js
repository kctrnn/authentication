import { Box, makeStyles, Typography } from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import Icons from "constants/icons";
import AuthForm from "features/Auth/components/AuthForm";
import NameForm from "features/Auth/components/NameForm";
import { register, updateAccount } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
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
    padding: theme.spacing(6, 7, 4),
    border: "1px solid #BDBDBD",
    borderRadius: "1rem",
  },

  title: {
    marginTop: "1.5rem",
    marginBottom: "1rem",
  },

  subtitle: {
    marginBottom: theme.spacing(3),
  },
}));

const SignupPage = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const history = useHistory();

  const [namingMode, setNamingMode] = useState(false);

  const handleFormSubmit = async (data) => {
    try {
      // auto set name = email
      data.name = data.email;

      const action = register(data);

      const resultAction = await dispatch(action);
      const originalResult = unwrapResult(resultAction);

      if (originalResult) {
        setNamingMode(true);
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Registration failed", { variant: "error" });
    }
  };

  const handleNamingFormSubmit = async (data) => {
    // Update name for account

    const { id } = JSON.parse(localStorage.getItem("user"));

    try {
      const userData = {
        id,
        ...data,
      };

      const action = updateAccount(userData);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      enqueueSnackbar("Sign up successfully", { variant: "success" });
      history.push("/account");
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Registration failed", { variant: "error" });
    }
  };

  return (
    <Box className={classes.root}>
      {!namingMode && (
        <Box className={classes.form}>
          <img src={Icons.DEV_ICON} alt='' />

          <Typography variant='h6' component='h1' className={classes.title}>
            Join thousands of learners from around the world
          </Typography>

          <Typography variant='body1' className={classes.subtitle}>
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </Typography>

          <AuthForm onSubmit={handleFormSubmit} />
        </Box>
      )}

      {namingMode && (
        <Box width={400}>
          <NameForm onSubmit={handleNamingFormSubmit} />
        </Box>
      )}
    </Box>
  );
};

export default SignupPage;
