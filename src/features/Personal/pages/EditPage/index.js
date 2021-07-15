import { Box, LinearProgress, makeStyles } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { unwrapResult } from "@reduxjs/toolkit";
import Header from "components/Header";
import { fetchUserById } from "features/Auth/userSlice";
import EditForm from "features/Personal/components/EditForm";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  progress: {
    marginTop: theme.spacing(4),
  },
}));

const EditPage = () => {
  const classes = useStyles();

  const [data, setData] = useState(null);
  const { userId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async (id) => {
      const action = fetchUserById(id);

      const resultAction = await dispatch(action);
      const originalResult = unwrapResult(resultAction);

      if (originalResult) {
        setData(originalResult);
      }
    };

    fetchUser(userId);
  }, [userId, dispatch]);

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

        {data ? (
          <EditForm initialValues={data} onSubmit={handleEditFormSubmit} />
        ) : (
          <LinearProgress className={classes.progress} />
        )}
      </Box>
    </div>
  );
};

export default EditPage;
