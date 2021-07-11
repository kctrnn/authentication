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

      <Link to='/account'>
        <ArrowBackIosIcon />
        Back
      </Link>

      <EditForm />
    </div>
  );
};

export default EditPage;
