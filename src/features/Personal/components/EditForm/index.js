import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import InputField from "components/FormFields/InputField";
import { updateAccount } from "features/Auth/userSlice";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";

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
  phone: yup.string(),

  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter a valid email address"),

  password: yup.string(),
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
    transition: "background-color 300ms ease-in-out",

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, .3)",
      cursor: "pointer",
    },
  },

  button: {
    marginTop: theme.spacing(2),
    textTransform: "none",
  },
}));

const EditForm = ({ onSubmit, initialValues }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const inputFile = useRef(null);

  const [imageUrl, setImageUrl] = useState(() => initialValues.avatarUrl);
  const [progress, setProgress] = useState(0);

  const form = useForm({
    defaultValues: {
      ...initialValues,
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const handleChangeAvatarClick = () => {
    inputFile.current.click();
  };

  const handleUploadAvatar = async (e) => {
    try {
      const imageFile = e.target.files[0];
      const formData = new FormData();
      formData.append("image", imageFile);

      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percent = Math.round((loaded * 100) / total);

          if (percent < 100) {
            setProgress(percent);
          }
        },
      };

      // upload image and get imageUrl
      const response = await userApi.uploadAvatar(formData, options);
      const { url } = response;

      setImageUrl(url);
      setProgress(100);

      setTimeout(() => {
        setProgress(0);
      }, 1000);

      const newData = { id: initialValues.id, avatarUrl: url };

      // update account
      const action = updateAccount(newData);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Typography component='h2' variant='h5' color='textPrimary'>
        Change Info
      </Typography>

      <Typography variant='subtitle1' color='textSecondary'>
        Changes will be reflected to every services
      </Typography>

      <Box className={classes.profileItem}>
        <input
          type='file'
          ref={inputFile}
          onChange={handleUploadAvatar}
          hidden
        />

        {progress > 0 && (
          <CircularProgress variant='determinate' value={progress} />
        )}

        {progress === 0 && (
          <Avatar
            variant='rounded'
            src={imageUrl}
            alt=''
            className={classes.avatar}
            onClick={handleChangeAvatarClick}
          />
        )}

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
          type='submit'
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
