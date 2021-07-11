import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Button, makeStyles, Typography } from "@material-ui/core";
import Images from "constants/image";

const useStyles = makeStyles((theme) => ({
  profile: {
    maxWidth: "52rem",
    border: "1px solid #E0E0E0",
    margin: "0 auto",
    borderRadius: "12px",
  },

  name: {
    width: "30%",
    textTransform: "uppercase",
    color: "#BDBDBD",
    fontSize: "0.8125rem",
  },

  content: {
    padding: theme.spacing(2.5, 0),
  },

  profileItem: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #E0E0E0",
    padding: theme.spacing(0, 6),

    "&:last-child": {
      borderBottom: 0,
    },
  },

  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    margin: theme.spacing(1.5, 0),
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.profile}>
      <Box className={classes.profileItem} justifyContent='space-between'>
        <Box py={3}>
          <Typography component='h2' variant='h5'>
            Profile
          </Typography>

          <Typography variant='subtitle1' color='textSecondary'>
            Some info may be visible to other people
          </Typography>
        </Box>

        <Button variant='outlined' size='small'>
          Edit
        </Button>
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Photo
        </Typography>

        <Avatar
          variant='rounded'
          src={Images.KCTRNN}
          alt=''
          className={classes.avatar}
        />
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Name
        </Typography>

        <Typography variant='body1' className={classes.content}>
          BXanthe Neal
        </Typography>
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Bio
        </Typography>

        <Typography variant='body1' className={classes.content}>
          I am a software developer and a big fan of devchallenges...
        </Typography>
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Phone
        </Typography>

        <Typography variant='body1' className={classes.content}>
          908249274292
        </Typography>
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Email
        </Typography>

        <Typography variant='body1' className={classes.content}>
          xanthe.neal@gmail.com
        </Typography>
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Password
        </Typography>

        <Typography variant='body1' className={classes.content}>
          ************
        </Typography>
      </Box>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
