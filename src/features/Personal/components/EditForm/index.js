import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Box, Button, makeStyles, Typography } from "@material-ui/core";
import { InputField } from "components/FormFields";
import Images from "constants/image";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter name")
    .test("two-words", "Please enter at least two words", (value) => {
      if (!value) return true;

      const parts = value?.split(" ") || [];
      return parts.filter((x) => Boolean(x)).length >= 2;
    }),

  bio: yup.string(),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),

  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter a valid email address"),

  password: yup.string().required("Please enter your password"),
});

const useStyles = makeStyles((theme) => ({
  form: {
    border: "1px solid #E0E0E0",
    borderRadius: "12px",
    padding: theme.spacing(3, 6),
    marginTop: theme.spacing(3),
  },

  name: {
    textTransform: "uppercase",
    color: "#828282",
    fontSize: "0.8125rem",
    marginLeft: theme.spacing(3),
  },

  profileItem: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2, 0),
  },

  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: "8px",
  },

  button: {
    marginTop: theme.spacing(2),
    textTransform: "none",
  },
}));

const EditForm = ({ onSubmit, initialValues }) => {
  const classes = useStyles();

  const form = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Typography component='h2' variant='h5' color='textPrimary'>
        Change Info
      </Typography>

      <Typography variant='subtitle1' color='textSecondary'>
        Changes will be reflected to every services
      </Typography>

      <Box className={classes.profileItem}>
        <Avatar
          variant='rounded'
          src={Images.KCTRNN}
          alt=''
          className={classes.avatar}
        />

        <Typography component='h3' variant='body1' className={classes.name}>
          Change Photo
        </Typography>
      </Box>

      <Box maxWidth='50%'>
        <InputField
          name='name'
          control={control}
          label='Name'
          placeholder='Enter your name...'
        />
        <InputField
          name='bio'
          control={control}
          label='Bio'
          placeholder='Enter your bio...'
          rows={4}
        />
        <InputField
          name='phone'
          control={control}
          label='Phone'
          placeholder='Enter your phone...'
        />
        <InputField
          name='email'
          control={control}
          label='Email'
          placeholder='Enter your email...'
          type='email'
        />
        <InputField
          name='password'
          control={control}
          label='Password'
          placeholder='Enter your new password...'
          type='password'
        />

        <Button
          variant='contained'
          color='primary'
          disableElevation
          className={classes.button}
          disabled={isSubmitting}
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

EditForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
};

EditForm.defaultProps = {
  onSubmit: null,
  initialValues: null,
};

export default EditForm;
