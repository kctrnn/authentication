import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Button, makeStyles, Typography } from "@material-ui/core";
import Images from "constants/image";
import { InputField } from "components/FormFields";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

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

const EditForm = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.form}>
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
        <InputField label='Name' placeholder='Enter your name...' />
        <InputField label='Bio' placeholder='Enter your bio...' rows='4' />
        <InputField label='Phone' placeholder='Enter your phone...' />
        <InputField label='Email' placeholder='Enter your email...' />
        <InputField label='Password' placeholder='Enter your new password...' />

        <Button
          variant='contained'
          color='primary'
          disableElevation
          className={classes.button}
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

EditForm.propTypes = {};

export default EditForm;
