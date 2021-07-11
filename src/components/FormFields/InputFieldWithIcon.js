import React from "react";
import PropTypes from "prop-types";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { makeStyles, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  input: {
    borderRadius: theme.spacing(1),
    "& > input": {
      padding: "16px 14px 16px 0",
    },
  },
}));

export const InputFieldWithIcon = (props) => {
  const { placeholder, type, name, form } = props;
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      variant='outlined'
      margin='normal'
      type={type}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            {type === "email" && <EmailIcon color='action' />}
            {type === "password" && <LockIcon color='action' />}
          </InputAdornment>
        ),

        className: classes.input,
      }}
    />
  );
};
