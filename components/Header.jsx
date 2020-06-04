import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import { grey } from '@material-ui/core/colors';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import styles from "./Header.module.css"




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tool:{
      position:"fixed",
      backgroundColor:"white",
      color:"black",
      height:"80px",
      width:"100%",
      border: "10px solid #FFFFFF",
    boxSizing: "border-box",
    boxShadow: "0px 0px 20px rgba(92, 111, 139, 0.12)",
borderRadius: "1px",
  },
  ic:{
      display:"flex",
      flexDirection:"column",
      
      justifyContent:"flex-start",

  },
  ic1:{
    display:"flex",
    flexDirection:"row",
    


},
userlogo:{
    display:"flex",
    justifyContent:"center",
    background:"#D7F9EF",
    borderRadius:"4.66px",
    width:"41px",
    height:"41px",
    marginTop:'5px'

},
userp:{
    background:"#D7F9EF",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight:"normal",
    fontSize:"18.8px",
    color:"#0BB783",

},
user:{
    marginRight:"10px"
}
}));

export default function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const count=16;
  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar className={classes.tool}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img src="cyber.png" style={{    width:"220px",height:"50px"}}className={styles.icon1}/>
          </Typography>
            <div className={classes.ic1}>
                <div className={classes.ic}>
                <IconButton>
                
                
                <NotificationsNoneRoundedIcon style={{ color: grey[700],fontSize:"30px" }}/>
                </IconButton>
                <NotificationBadge style={{position:"absolute",marginTop:"-50px"}} count={count} effect={Effect.SCALE}/>
                </div>
            
            <div className={classes.user}>
                <p> Hi, User Name</p>
            </div>
            
            
            
            <div className={classes.userlogo}>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                
                onClick={handleMenu}
                style={{backgroundColor:"#D7F9EF"}}
              >
                <p className={classes.userp}>M</p>
                </IconButton>
            </div> 

              <Menu
                id="simple-menu"
                getContentAnchorEl={null}
                anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
                }}
                transformOrigin={{
                vertical: "top",
                horizontal: "left"
                }}
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Activity Log</MenuItem>
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}