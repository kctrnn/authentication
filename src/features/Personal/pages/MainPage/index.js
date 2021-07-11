import { Box, Typography } from "@material-ui/core";
import Header from "components/Header";
import Profile from "features/Personal/components/Profile";
import React from "react";

const MainPage = () => {
  return (
    <div className='personal-main'>
      <Header />

      <Box textAlign='center' my={3}>
        <Typography component='h1' variant='h4'>
          Personal info
        </Typography>

        <Typography variant='subtitle1' color='textSecondary'>
          Basic info, like your name and photo
        </Typography>
      </Box>

      <Profile />
    </div>
  );
};

export default MainPage;
