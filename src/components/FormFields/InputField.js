import React from "react";
import PropTypes from "prop-types";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    borderRadius: theme.spacing(1),
    fontSize: 13,
  },
}));

export const InputField = (props) => {
  const { label, placeholder, type, name, form, rows } = props;
  const classes = useStyles();

  return (
    <TextField
      size='small'
      fullWidth
      label={label}
      placeholder={placeholder}
      multiline
      variant='outlined'
      margin='normal'
      rows={rows}
      type={type}
      InputProps={{
        className: classes.input,
      }}
      InputLabelProps={{ style: { fontSize: 13, color: "#4F4F4F" } }}
    />
  );
};
