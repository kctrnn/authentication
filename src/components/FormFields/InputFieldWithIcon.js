import { makeStyles, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  input: {
    borderRadius: theme.spacing(1),
    "& > input": {
      padding: "16px 14px 16px 0",
    },
  },
}));

const InputFieldWithIcon = (props) => {
  const { placeholder, type, name, control } = props;
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  const classes = useStyles();

  return (
    <TextField
      autoComplete='off'
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
      {...inputProps}
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
    />
  );
};

InputFieldWithIcon.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,

  placeholder: PropTypes.string,
  type: PropTypes.string,
};

InputFieldWithIcon.defaultProps = {
  placeholder: "",
  type: "text",
};

export default InputFieldWithIcon;
