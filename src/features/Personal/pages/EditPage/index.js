import { Box, Typography } from "@material-ui/core";
import Header from "components/Header";
import EditForm from "features/Personal/components/EditForm";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const EditPage = () => {
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

        <EditForm />
      </Box>
    </div>
  );
};

export default EditPage;
