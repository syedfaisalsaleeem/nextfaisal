import React from 'react';
import Link from "next/link"
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Footer from './Footer';
const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  ltext:{
    

  },
  ltext1:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight:"normal",
    fontSize:"17px",
    height:"60px",
    '&:hover': {
       cursor:"pointer",
       background:"rgba(108, 114, 147, 0.3)",
    },
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
    
  },
  drawerPaper: {
    display:"flex", 
    width: drawerWidth,
    marginTop:"70px",
    backgroundColor:"#1E1E2D",
    color:"white"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function CyberDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  console.log(props.call)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
     
    
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.call}    
        classes={{
          paper: classes.drawerPaper,
        }}
      >

        <Divider/>
        <List className={classes.ltext}>
          
            <ListItem  className={classes.ltext1} style={{backgroundColor:"rgba(108, 114, 147, 0.3)"}}>
                <ListItemIcon><img src="dashboard.png" width="28px" height="28px"  /> </ListItemIcon>
                <ListItemText  disableTypography = {"false"}   primary={"Home"}/>
            </ListItem>
            
            <ListItem className={classes.ltext1}>
                <ListItemIcon><img src="discovery.png" width="28px" height="28px" /> </ListItemIcon>
                <ListItemText disableTypography = {"false"} primary={"Discover"}/>
            </ListItem>
            <ListItem className={classes.ltext1}>
                <ListItemIcon><img src="information.png" width="28px" height="28px" /> </ListItemIcon>
                <ListItemText disableTypography = {"false"} primary={"Exposed Information"}/>
            </ListItem>
            <ListItem className={classes.ltext1}>
                <ListItemIcon><img src="exposedsystems.png" width="28px" height="28px" /> </ListItemIcon>
                <ListItemText disableTypography = {"false"} primary={"Exposed Systems"}/>
            </ListItem>
            <Link href="/Settings">
            <ListItem className={classes.ltext1}>
                <ListItemIcon><img src="settings.png" width="28px" height="28px" />  </ListItemIcon>
                <ListItemText  disableTypography = {"false"} primary={"Settings"}/>
            </ListItem>
            </Link>
            <ListItem className={classes.ltext1}>
                <ListItemIcon><img src="support.png" width="28px" height="28px" /> </ListItemIcon>
                <ListItemText disableTypography = {"false"} primary={"Support"}/>
            </ListItem>

        </List>

      </Drawer>
      <Footer/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: props.call,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        
      </main>
      <footer>
      
      </footer>
    </div>
  );
}