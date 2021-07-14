import { Box, makeStyles, Typography } from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import Icons from "constants/icons";
import AuthForm from "features/Auth/components/AuthForm";
import NameForm from "features/Auth/components/NameForm";
import { register } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [namingMode, setNamingMode] = useState(true);

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

      // enqueueSnackbar("Sign up successfully", { variant: "success" });
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Registration failed", { variant: "error" });
    }
  };

  const handleNamingFormSubmit = (data) => {
    // Update name for account
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
