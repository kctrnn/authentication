import React from "react";
import PropTypes from "prop-types";
import { InputField } from "components/FormFields";

const LoginForm = (props) => {
  return (
    <form>
      <InputField type='email' placeholder='Type your email' />
      <InputField type='password' placeholder='Password' />
    </form>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
