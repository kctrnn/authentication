import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Box, Button, makeStyles } from "@material-ui/core";
import InputFieldWithIcon from "components/FormFields/InputFieldWithIcon";
import Icons from "constants/icons";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter a valid email address"),

  password: yup.string().required("Please enter your password"),
});

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    textTransform: "none",
  },

  paragraph: {
    fontSize: "0.875rem",
    color: "#828282",
    textAlign: "center",
    margin: theme.spacing(3),
  },

  social: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& > *": {
      margin: theme.spacing(0, 1.5),
    },
  },
}));

const AuthForm = ({ isLogin, onSubmit }) => {
  const classes = useStyles();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  return (
    <div onSubmit={handleSubmit(onSubmit)} className='auth-form'>
      <form>
        <InputFieldWithIcon
          control={control}
          type='email'
          placeholder='Email'
          name='email'
        />

        <InputFieldWithIcon
          control={control}
          type='password'
          placeholder='Password'
          name='password'
        />

        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          disableElevation
          className={classes.button}
          disabled={isSubmitting}
        >
          {isLogin ? "Login" : "Start coding now"}
        </Button>
      </form>

      <Box>
        <p className={classes.paragraph}>
          or continue with these social profile
        </p>

        <div className={classes.social}>
          <Avatar alt='' src={Icons.FACEBOOK_ICON} />
          <Avatar alt='' src={Icons.GITHUB_ICON} />
          <Avatar alt='' src={Icons.GOOGLE_ICON} />
          <Avatar alt='' src={Icons.TWITTER_ICON} />
        </div>

        {!isLogin && (
          <p className={classes.paragraph}>
            Already a member? <Link to='/auth/login'>Login</Link>
          </p>
        )}

        {isLogin && (
          <p className={classes.paragraph}>
            Don’t have an account yet? <Link to='/auth/register'>Register</Link>
          </p>
        )}
      </Box>
    </div>
  );
};

AuthForm.propTypes = {
  isLogin: PropTypes.bool,
  onSubmit: PropTypes.func,
};

AuthForm.defaultProps = {
  isLogin: false,
  onSubmit: null,
};

export default AuthForm;
