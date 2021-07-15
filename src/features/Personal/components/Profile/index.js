import { Avatar, Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

const Profile = () => {
  const classes = useStyles();
  const loggedInUser = useSelector((state) => state.user.current);
  const { id, name, email, bio, phone, avatarUrl } = loggedInUser;

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

        <Button
          variant='outlined'
          size='small'
          component={Link}
          to={`/account/${id}`}
        >
          Edit
        </Button>
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Photo
        </Typography>

        <Avatar
          variant='rounded'
          src={avatarUrl}
          alt=''
          className={classes.avatar}
        />
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Name
        </Typography>

        <Typography variant='body1' className={classes.content}>
          {name}
        </Typography>
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Bio
        </Typography>

        <Typography variant='body1' className={classes.content}>
          {bio}
        </Typography>
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Phone
        </Typography>

        <Typography variant='body1' className={classes.content}>
          {phone}
        </Typography>
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Email
        </Typography>

        <Typography variant='body1' className={classes.content}>
          {email}
        </Typography>
      </Box>

      <Box className={classes.profileItem}>
        <Typography component='h3' variant='body1' className={classes.name}>
          Password
        </Typography>

        <Typography variant='body1' className={classes.content}>
          **********
        </Typography>
      </Box>
    </div>
  );
};

export default Profile;
