import { Box } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Header from "components/Header";
import EditForm from "features/Personal/components/EditForm";
import React from "react";
import { Link } from "react-router-dom";

const EditPage = () => {
  const initialValues = {
    name: "",
    bio: "",
    phone: "",
    email: "",
    password: "",
  };

  const handleEditFormSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className='personal-edit'>
      <Header />

      <Box maxWidth='52rem' margin='0 auto'>
        <Link to='/account'>
          <Box display='flex' alignItems='center' color='#2D9CDB'>
            <ArrowBackIosIcon />
            Back
          </Box>
        </Link>

        <EditForm
          initialValues={initialValues}
          onSubmit={handleEditFormSubmit}
        />
      </Box>
    </div>
  );
};

export default EditPage;
