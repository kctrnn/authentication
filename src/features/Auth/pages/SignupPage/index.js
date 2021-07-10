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
    padding: theme.spacing(6, 7, 4),
    border: "1px solid #BDBDBD",
    borderRadius: "1.5rem",
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

  return (
    <div className={classes.root}>
      <Box className={classes.form}>
        <img src={Icons.DEV_ICON} alt='' />

        <Typography variant='h6' component='h1' className={classes.title}>
          Join thousands of learners from around the world
        </Typography>

        <Typography variant='body1' className={classes.subtitle}>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </Typography>

        <AuthForm />
      </Box>
    </div>
  );
};

export default SignupPage;
