import { yupResolver } from "@hookform/resolvers/yup";
import { Button, makeStyles } from "@material-ui/core";
import InputField from "components/FormFields/InputField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your full name")
    .test(
      "should has at least two words",
      "Please enter at least two words",
      (value) => {
        return value.split(" ").length >= 2;
      }
    ),
});

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    textTransform: "none",
  },
}));

const NameForm = ({ onSubmit }) => {
  const classes = useStyles();

  const form = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name='name'
        control={control}
        placeholder='Enter your full name'
        size='medium'
        autoFocus
      />

      <Button
        className={classes.button}
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
        disableElevation
        disabled={isSubmitting}
      >
        Save
      </Button>
    </form>
  );
};

NameForm.propTypes = {
  onSubmit: PropTypes.func,
};

NameForm.defaultProps = {
  onSubmit: null,
};

export default NameForm;
