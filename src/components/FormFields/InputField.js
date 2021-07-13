import { makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  input: {
    borderRadius: theme.spacing(1),
    fontSize: 13,
  },
}));

const InputField = (props) => {
  const { label, placeholder, type, name, control, rows } = props;
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
      size='small'
      fullWidth
      label={label}
      placeholder={placeholder}
      multiline={!!rows}
      variant='outlined'
      margin='normal'
      rows={rows}
      type={type}
      InputProps={{
        className: classes.input,
      }}
      InputLabelProps={{ style: { fontSize: 13, color: "#4F4F4F" } }}
      {...inputProps}
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
    />
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,

  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  rows: PropTypes.number,
};

InputField.defaultProps = {
  placeholder: "",
  type: "text",
  label: "",
  rows: 0,
};

export default InputField;
