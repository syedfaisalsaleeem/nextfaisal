import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Divider from "@material-ui/core/Divider"
import { Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    Typofont:{
        fontSize:"1rem",
        fontStyle:"normal",
        fontWeight:"800px",
        fontFamily:"Roboto"
    },
    TypoSecondFont:{
        fontSize:"0.8rem",
        fontStyle:"normal",
        fontWeight:"800px",
        fontFamily:"Roboto"
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Swindow(){
    const classes = useStyles();
    return(
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
            <Typography component="div" style={{ backgroundColor: 'white', height: '26.5vh' }} >
                <Typography component="div" style={{ backgroundColor: 'white', height: '6.5vh' }} >
                    <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Grid container spacing={1}>
                        <Grid item style={{height:"100%"}}>
                            <Typography component="div" style={{display:"flex",height:"6.7vh",justifyContent:"flex-start",alignItems:"center"}}>
                            <AccountCircleOutlinedIcon/>
                            </Typography>
                        
                        </Grid>
                        <Grid item xs={9}>
                            <Typography paragraph style={{display:"flex",height:"6.7vh",justifyContent:"flex-start",alignItems:"center"}}> Account Information </Typography>
                        
                        </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={0}>
                            <Grid item xs={8} style={{height:"100%"}}>
                            
                            </Grid>
                            <Grid item xs={4} style={{display:"flex",height:"6.7vh",justifyContent:"flex-end",alignItems:"center"}}>
                                <Button variant="contained" color="primary" >Update</Button>
                            </Grid>
                        </Grid>
                    
                    
                    </Grid>
                    </Grid>
                </Typography>
                <Divider/>
                <Typography component="div" style={{ backgroundColor: 'white', height: '20vh',marginTop:"0.5vh" }} >
                    <Grid container spacing={0}>
                        <Grid items xs={5} style={{height:"19vh",background:"white"}}>
                            <Typography component="div" style={{ backgroundColor: 'white', height: '6vh' }}>
                                <Typography  className={classes.Typofont}>
                                    Company Name
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                    Name goes here
                                </Typography>
                            </Typography>
                            <Typography component="div" style={{ backgroundColor: 'white', height: '6vh' }}>
                            <Typography  className={classes.Typofont}>
                                    Company Name
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                    Industry goes here
                                </Typography>
                            </Typography>
                            <Typography component="div" style={{ backgroundColor: 'white', height: '7vh' }}>
                            <Typography  className={classes.Typofont}>
                                    Company Address
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                    Address goes here (line1)
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                Address goes here (line2)
                                </Typography>
                            </Typography>

                            


                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid items xs={6} style={{height:"20vh"}}>
                            <Grid container spacing={0}>
                                <Grid item xs={1} style={{height:"19vh",backgroundColor:"white"}} >
                                
                                </Grid>
                                <Grid item xs={11} style={{height:"19vh"}}>
                                <Typography component="div" style={{ backgroundColor: 'white', height: '6.5vh' }}>
                                    <Typography  className={classes.Typofont}>
                                        Company Person
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        Name goes here
                                    </Typography>
                                </Typography>
                                <Typography component="div" style={{ backgroundColor: 'white', height: '6.5vh' }}>
                                <Typography  className={classes.Typofont}>
                                        Contact Person Position
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        Industry goes here
                                    </Typography>
                                </Typography>
                                <Typography component="div" style={{ backgroundColor: 'white', height: '7vh' }}>
                                <Typography  className={classes.Typofont}>
                                        Contact Person Email
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        Email Address Goes Here
                                    </Typography>

                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Typography>
            </Typography>
            <Typography component="div" style={{ backgroundColor: 'white', height: '16.5vh' }}>

            <Typography component="div" style={{ backgroundColor: 'white', height: '6.5vh' }} >
                    <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Grid container spacing={1}>
                        <Grid item style={{height:"100%"}}>
                            <Typography component="div" style={{display:"flex",height:"6.7vh",justifyContent:"flex-start",alignItems:"center"}}>
                            <SecurityOutlinedIcon/>
                            </Typography>
                        
                        </Grid>
                        <Grid item xs={9}>
                            <Typography paragraph style={{display:"flex",height:"6.7vh",justifyContent:"flex-start",alignItems:"center"}}> Security Information </Typography>
                        
                        </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={0}>
                            <Grid item xs={8} style={{height:"100%"}}>
                            
                            </Grid>
                            <Grid item xs={4} style={{display:"flex",height:"6.7vh",justifyContent:"flex-end",alignItems:"center"}}>
                                <Button variant="contained" color="primary" >Update</Button>
                            </Grid>
                        </Grid>
                    
                    
                    </Grid>
                    </Grid>
            </Typography>
            <Divider/>
            <Typography>
                            <Grid container spacing={0}>
                                <Grid item xs={12} style={{height:"10vh",marginTop:"0.5vh"}}>
                                <Typography component="div" style={{ backgroundColor: 'white', height: '5vh' }}>
                                    <Typography  className={classes.Typofont}>
                                       Account User Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        User Name Goes Here
                                    </Typography>
                                </Typography>
                                <Typography component="div" style={{ backgroundColor: 'white', height: '5vh' }}>
                                <Typography  className={classes.Typofont}>
                                        Account Password
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        ******Password
                                    </Typography>
                                </Typography>

                                </Grid>
                            </Grid>

            </Typography>
            
            
            
            
        </Typography>
            
            
            
            
            
            <Typography component="div" style={{ backgroundColor: 'white', height: '44vh' }}>

            <Typography component="div" style={{ backgroundColor: 'white', height: '6.5vh' }} >
                    <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Grid container spacing={1}>
                        <Grid item style={{height:"100%"}}>
                            <Typography component="div" style={{display:"flex",height:"6.7vh",justifyContent:"flex-start",alignItems:"center"}}>
                            <NotificationsNoneOutlinedIcon/>
                            </Typography>
                        
                        </Grid>
                        <Grid item xs={9}>
                            <Typography paragraph style={{display:"flex",height:"6.7vh",justifyContent:"flex-start",alignItems:"center"}}> Notification Settings </Typography>
                        
                        </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={0}>
                            <Grid item xs={8} style={{height:"100%"}}>
                            
                            </Grid>
                            <Grid item xs={4} style={{display:"flex",height:"6.7vh",justifyContent:"flex-end",alignItems:"center"}}>
                                <Button variant="contained" color="primary" >Update</Button>
                            </Grid>
                        </Grid>
                    
                    
                    </Grid>
                    </Grid>
            </Typography>
            <Divider/>            
            <Typography>
                            <Grid container spacing={0}>
                                <Grid item xs={12} style={{height:"37.5vh",marginTop:"0.5vh"}}>
                                <Typography component="div" style={{ backgroundColor: 'white', height: '6vh' }}>
                                    <Typography  className={classes.Typofont}>
                                       Primary Email
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        Email Goes Here
                                    </Typography>
                                </Typography>
                                <Typography component="div" style={{ backgroundColor: 'white', height: '13vh' }}>
                                <Typography  className={classes.Typofont}>
                                        Secondary Email
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        Email@email.com
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        Email@email.com
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        Email@email.com
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        Email@email.com
                                    </Typography>
                                </Typography>
                                <Typography component="div" style={{ backgroundColor: 'white', height: '18vh' }}>
                                <Typography  className={classes.Typofont}>
                                        Alert Types
                                        
                                    </Typography>
                                    <Typography component="div" color="textSecondary" className={classes.TypoSecondFont} style={{display:"flex"}}>

                                        <div style={{width:"200px"}}>
                                        High Risk
                                        </div>
                                        <div>
                                        <CheckCircleIcon style={{color:"#1BC5BD",fontSize:"28px"}}/>
                                        
                                        
                                        </div>
                                        
                                        
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont} style={{display:"flex"}}>
                                        <div style={{width:"200px"}}>
                                        Low Risk
                                        </div>
                                        <div>
                                        <CancelIcon style={{color:"#1BC5BD",fontSize:"28px"}}/>
                                        </div>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}style={{display:"flex"}}>
                                        <div style={{width:"200px"}}>
                                        New Assets
                                        </div>
                                        <div>
                                        <CheckCircleIcon style={{color:"#1BC5BD",fontSize:"28px"}}/>
                                        </div>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}style={{display:"flex"}}>
                                        <div style={{width:"200px"}}>
                                        Vulnerabilities
                                        </div>
                                        <div>
                                        <CheckCircleIcon style={{color:"#1BC5BD",fontSize:"28px"}}/>
                                        </div>
                                    </Typography>
                                </Typography>

                                </Grid>
                            </Grid>

            </Typography>
            
            
            
            
            
            
            
            </Typography>
        </Container>
      </React.Fragment>
    )
}