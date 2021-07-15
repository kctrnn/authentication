import {
  Avatar,
  Box,
  Container,
  ListItemIcon,
  ListItemText,
  withStyles,
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GroupIcon from "@material-ui/icons/Group";
import Icons from "constants/icons";
import { logout } from "features/Auth/userSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
    marginTop: "1.5rem",
    padding: "6px 10px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    borderRadius: "8px",

    "&:last-child": {
      color: "#EB5757",
    },
  },
}))(MenuItem);

const StyledListItemIcon = withStyles((theme) => ({
  root: {
    minWidth: theme.spacing(4),
    color: "inherit",
  },
}))(ListItemIcon);

const StyledListItemText = withStyles((theme) => ({
  primary: {
    fontSize: "14px",
    fontFamily: "inherit",
    fontWeight: 500,
  },
}))(ListItemText);

const styles = (theme) => ({
  toggle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",

    "& > h4": {
      fontSize: "12px",
      marginLeft: "12px",
      marginRight: "14px",
      userSelect: "none",
    },
  },

  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});

const Header = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);

    history.push("/");
  };

  return (
    <div className='header'>
      <Container>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          py={2}
        >
          <a href='/' className='header-logo'>
            <img src={Icons.DEV_ICON} alt='' />
          </a>

          <div className='user'>
            {isLoggedIn && (
              <Box className={classes.toggle} onClick={handleClick}>
                <Avatar
                  variant='rounded'
                  src={loggedInUser.avatarUrl}
                  alt=''
                  className={classes.avatar}
                />

                <h4>{loggedInUser.name}</h4>

                {Boolean(anchorEl) ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}
              </Box>
            )}

            <StyledMenu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem onClick={handleClose}>
                <StyledListItemIcon>
                  <AccountCircleIcon fontSize='small' />
                </StyledListItemIcon>
                <StyledListItemText primary='My Profile' />
              </StyledMenuItem>

              <StyledMenuItem onClick={handleClose}>
                <StyledListItemIcon>
                  <GroupIcon fontSize='small' />
                </StyledListItemIcon>
                <StyledListItemText primary='Group Chat' />
              </StyledMenuItem>

              <hr style={{ border: "1px solid #E0E0E0", margin: ".5rem 0" }} />

              <StyledMenuItem onClick={handleLogoutClick}>
                <StyledListItemIcon>
                  <ExitToAppIcon fontSize='small' />
                </StyledListItemIcon>
                <StyledListItemText primary='Logout' />
              </StyledMenuItem>
            </StyledMenu>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default withStyles(styles)(Header);
