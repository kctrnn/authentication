import React from "react";
import PropTypes from "prop-types";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

export const InputField = (props) => {
  const { placeholder, type, name, form } = props;

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
      }}
    />
  );
};
