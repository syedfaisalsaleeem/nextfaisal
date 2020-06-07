import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Divider from "@material-ui/core/Divider"
import { Button, FormControl } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Account from "./Modal/Account";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { Dropdown } from 'semantic-ui-react';
import Head from "next/head"
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import { Icon, Input } from 'semantic-ui-react'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    Typofont:{
        fontSize:"1.2rem",
        fontStyle:"normal",
        fontWeight:"800px",
        fontFamily:"Roboto"
    },
    TypoSecondFont:{
        fontSize:"1rem",
        fontStyle:"normal",
        fontWeight:"800px",
        fontFamily:"Roboto"
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControl: {
        
        minWidth: "100%",
        
      },
      selectEmpty: {
        marginTop: theme.spacing(0),
      },
  }));
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#6993FF',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
export default function Swindow(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [opens, setOpens] = React.useState(false);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
      });
    const [st1,set]=React.useState([
            
                
            
    ]);
    const [count,inc_count]=React.useState(1);


      const [age, setAge] = React.useState('');

      const handleChange = (event) => {
        setAge(event.target.value);
      };
      const addcount=()=>{
        set([...st1,""])
      }
      const addcount1=()=>{
        
        const {listi}=st1
        console.log(listi);
        inc_count(count+1);
        
        set({listi:[...st1.listi,""]})
        console.log(st1.listi);

        
        
    };
    
    const subcount=(event)=>{
        const x=event.target.id
        const listi=Object.assign([],st1);
        listi.splice(x,1);
        
        
        set(listi);
    }
    const subcount1=(event)=>{
        
        const x=event.target.id
        
        const {listi}=st1
        console.log(listi)
        const listi1=listi.filter(function(listi){
            var i;
            console.log(listi,x)
            if(x===x){
                return false
            }
            else{
                return true
            }
            
        })
        console.log(listi1)
        listi.length=0
        set({...st1,listi:listi1})
        console.log(listi)
    
        
        
       
        
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleSubmission = () => {
        setOpens(true);
      };
    const handleSubmissionClose = () => {
        setOpens(false);
      };
    const handleClose = () => {
      setOpen(false);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };
      const handleClickOpen2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };
      const handleChange4 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      const handletext =(event) =>{
          const {name,value}=event.target
          //console.log(name,value)
          //console.log(st1.indexOf(name))
          let newArr = [...st1]; // copying the old datas array
          newArr[name] = value; // replace e.target.value with whatever you want to change it to
      
          set(newArr);
          
      }
    return(

        <React.Fragment>
        <head>
            

        
        </head>
        <CssBaseline />
        <Container maxWidth="xl" style={{marginBottom:"20px"}}>
            <Typography component="div" style={{ backgroundColor: 'white'  }} >
                <Typography component="div" style={{ backgroundColor: 'white',height:"42px",marginTop:"5px" }} >
                    <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Grid container spacing={1}>
                        <Grid item >
                            <Typography component="div" style={{display:"flex",justifyContent:"flex-start",alignItems:"center",height:"42px"}}>
                            <AccountCircleOutlinedIcon/>
                            
                            </Typography>
                        
                        </Grid>
                        <Grid item xs={9}>
                            <Typography paragraph style={{display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:"16px",height:"42px"}}> Account Information </Typography>
                        
                        </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={0}>
                            <Grid item xs={8} style={{}}>
                            
                            </Grid>
                            <Grid item xs={4} style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                                <Button variant="contained" color="primary" onClick={handleClickOpen} style={{position:"static"}}>Update</Button>
                                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                                    
                                    
                                    <DialogTitle>
                                    <Grid container style={{display:"flex"}} >
                                        <Grid items xs={11} style={{display:"flex"}}>
                                            <Grid container spacing={2}>
                                            <Grid item>
                                            </Grid>
                                            <Grid item>
                                                <Typography component="div" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                <AccountCircleOutlinedIcon />
                                                
                                                </Typography>
                                            
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Typography style={{display:"flex",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Account Information </Typography>
                                            
                                            </Grid>
                                            </Grid>
                                        
                                        </Grid>
                                        
                                        <Grid items xs={1} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                        
                                        <CloseIcon onClick={handleClose} />
                                        
                                            
                                        </Grid>
                                        
                                        
                                        
                                    </Grid>
                                    </DialogTitle>

                                    
                                    
                                    <Divider/>
                                    <DialogContent style={{width:"31vw",height:"100vh"}}>
                                    <DialogContentText>

                                    </DialogContentText>
                                    <Typography >
                                        Company Name
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Company Name"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        
                                    />
                                    
                                    <Typography style={{marginTop:"15px"}} gutterBottom>
                                        Company Industry
                                    </Typography>
                                    <FormControl className={classes.formControl}>
                                    
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    style={{height:"40px"}}
                                    displayEmpty
          
                                    
                                    >
                                    <MenuItem value="">
                                        <em>Select Industry</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    </FormControl>
                                    <Typography style={{marginTop:"15px"}}>
                                        Company Address
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Company Address"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Contact Person"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person Position
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Contact Person Position"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person Email
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Contact Person Email"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person Number
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Contact Person Number"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <Typography component="div" style={{display:"flex",width:"100",justifyContent:"center",marginTop:"15px"}}>
                                    <Button color="primary" variant="contained" onClick={handleSubmission}> Update Information</Button>
                                    </Typography>
                                    
                                    </DialogContent>

                                </Dialog>
                            </Grid>
                        </Grid>
                    
                    
                    </Grid>
                    </Grid>
                </Typography>
                <Divider/>
                <Typography component="div" style={{ backgroundColor: 'white',marginTop:"0.5vh" }} >
                    <Grid container spacing={0}>
                        <Grid items xs={5} style={{background:"white"}}>
                            <Typography component="div" style={{ backgroundColor: 'white' }}>
                                <Typography  className={classes.Typofont}>
                                    Company Name
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                    Name goes here
                                </Typography>
                            </Typography>
                            <Typography component="div" style={{ backgroundColor: 'white' }}>
                            <Typography  className={classes.Typofont}>
                                    Company Name
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                    Industry goes here
                                </Typography>
                            </Typography>
                            <Typography component="div" style={{ backgroundColor: 'white' }}>
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
                        <Grid items xs={6} >
                            <Grid container spacing={0}>
                                <Grid item xs={1} style={{backgroundColor:"white"}} >
                                
                                </Grid>
                                <Grid item xs={11} style={{}}>
                                <Typography component="div" style={{ backgroundColor: 'white' }}>
                                    <Typography  className={classes.Typofont}>
                                        Company Person
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        Name goes here
                                    </Typography>
                                </Typography>
                                <Typography component="div" style={{ backgroundColor: 'white'}}>
                                <Typography  className={classes.Typofont}>
                                        Contact Person Position
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        Industry goes here
                                    </Typography>
                                </Typography>
                                <Typography component="div" style={{ backgroundColor: 'white' }}>
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
            <Typography component="div" style={{ backgroundColor: 'white' }}>

            <Typography component="div" style={{ backgroundColor: 'white',height:"40px",marginTop:"5px"}} >
                    <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Grid container spacing={1}>
                        <Grid item >
                            <Typography component="div" style={{display:"flex",justifyContent:"flex-start",alignItems:"center",height:"38px"}}>
                            <SecurityOutlinedIcon/>
                            </Typography>
                        
                        </Grid>
                        <Grid item xs={9}>
                            <Typography paragraph style={{display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:"16px",height:"38px"}}> Security Information </Typography>
                        
                        </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={0}>
                            <Grid item xs={8} >
                            
                            </Grid>
                            <Grid item xs={4} style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                                <Button variant="contained" color="primary" onClick={handleClickOpen1} style={{position:"static"}}>Update</Button>
                                    <Dialog open={open1} onClose={handleClose1} aria-labelledby="form-dialog-title" >
                                        <DialogTitle>
                                        <Grid container style={{height:"6vh",display:"flex"}} >
                                            <Grid items xs={11} style={{height:"6vh",display:"flex"}}>
                                                <Grid container spacing={2}>
                                                <Grid item>
                                                </Grid>
                                                <Grid item>
                                                    <Typography component="div" style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center"}}>
                                                    <SecurityOutlinedIcon />
                                                    
                                                    </Typography>
                                                
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Security Information </Typography>
                                                
                                                </Grid>
                                                </Grid>
                                            
                                            </Grid>
                                            
                                            <Grid items xs={1} style={{height:"6vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            
                                            <CloseIcon onClick={handleClose1} />
                                            
                                                
                                            </Grid>
                                            
                                            
                                            
                                        </Grid>
                                        </DialogTitle>

                                        <Divider/>
                                        <DialogContent style={{height:"100vh",width:"31vw"}}>
                                        <DialogContentText>

                                        </DialogContentText>
                                        <Typography >
                                            Enter Current Password
                                        </Typography>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Enter Password"
                                            type="email"
                                            variant="outlined"
                                            fullWidth
                                            
                                        />
                                        <Typography style={{marginTop:"15px"}}>
                                        Enter New Password
                                        </Typography>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Enter Password"
                                            type="email"
                                            variant="outlined"
                                            fullWidth
                                        />
                                        <Typography style={{marginTop:"15px"}}>
                                        Renter New Password
                                        </Typography>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Enter Password"
                                            type="email"
                                            variant="outlined"
                                            fullWidth
                                        />
                                        <Typography component="div" style={{display:"flex",width:"100",justifyContent:"center",marginTop:"15px"}}>
                                        <Button color="primary" variant="contained" onClick={handleSubmission}> Update Password</Button>
                                        </Typography>
                                        <Divider style={{marginTop:"15px"}}/>
                                        </DialogContent>
                                    </Dialog>
                                    <Dialog
                                        open={opens}
                                        onClose={handleSubmissionClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                        
                                    >
                                        <DialogTitle>
                                        <Grid container style={{height:"6vh",display:"flex"}} >
                                            <Grid items xs={11} style={{height:"6vh",display:"flex"}}>
                                                <Grid container spacing={2}>
                                                <Grid item>
                                                </Grid>
                                                <Grid item>
                                                    <Typography component="div" style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center"}}>
                                                    
                                                    
                                                    </Typography>
                                                
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Authorize Change </Typography>
                                                
                                                </Grid>
                                                </Grid>
                                            
                                            </Grid>
                                            
                                            <Grid items xs={1} style={{height:"6vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            
                                            <CloseIcon onClick={handleSubmissionClose} />
                                            
                                                
                                            </Grid>
                                            
                                            
                                            
                                        </Grid>
                                        </DialogTitle>
                                        <Divider/>
                                        <DialogContent style={{width:"22vw"}}>
                                        <DialogContentText id="alert-dialog-description">
                                        You are about to proceed to make changes to your account this once submitted they will overwrite current data and settings. Do you wish to still continue ? 
                                        </DialogContentText>
                                        </DialogContent>
                                        <Divider/>
                                        <Typography style={{marginTop:"15px", display:"flex",justifyContent:"space-evenly",alignItems:"center" ,marginBottom:"20px"}}>
                                        <Button onClick={handleSubmissionClose} color="primary" variant="contained">
                                            Continue
                                        </Button>
                                        <Button onClick={handleSubmissionClose} color="primary" variant="outlined" autoFocus>
                                            Close
                                        </Button>
                                        </Typography>
  
                                        
                                    </Dialog>
                            </Grid>
                        </Grid>
                    
                    
                    </Grid>
                    </Grid>
            </Typography>
            <Divider/>
            <Typography>
                            <Grid container spacing={0}>
                                <Grid item xs={12} style={{marginTop:"0.5vh"}}>
                                <Typography component="div" style={{ backgroundColor: 'white' }}>
                                    <Typography  className={classes.Typofont}>
                                       Account User Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        User Name Goes Here
                                    </Typography>
                                </Typography>
                                <Typography component="div" style={{ backgroundColor: 'white' }}>
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
            
            
            
            
            
            <Typography component="div" style={{ backgroundColor: 'white'}}>

            <Typography component="div" style={{ backgroundColor: 'white',height:"42px",marginTop:"5px"}} >
                    <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Grid container spacing={1}>
                        <Grid item style={{height:"100%"}}>
                            <Typography component="div" style={{display:"flex",justifyContent:"flex-start",alignItems:"center",height:"42px"}}>
                            <NotificationsNoneOutlinedIcon/>
                            </Typography>
                        
                        </Grid>
                        <Grid item xs={9}>
                            <Typography paragraph style={{display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:"16px",height:"42px"}}> Notification Settings </Typography>
                        
                        </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={0}>
                            <Grid item xs={8} >
                            
                            </Grid>
                            <Grid item xs={4} style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                                <Button variant="contained" color="primary" onClick={handleClickOpen2} style={{position:"static"}}>Update</Button>
                                <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title" >
                                        <DialogTitle>
                                        <Grid container style={{display:"flex"}} >
                                            <Grid items xs={11} style={{display:"flex"}}>
                                                <Grid container spacing={2}>
                                                <Grid item>
                                                </Grid>
                                                <Grid item>
                                                    <Typography component="div" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                    <NotificationsNoneOutlinedIcon />
                                                    
                                                    </Typography>
                                                
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography style={{display:"flex",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Notification Settings </Typography>
                                                
                                                </Grid>
                                                </Grid>
                                            
                                            </Grid>
                                            
                                            <Grid items xs={1} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            
                                            <CloseIcon onClick={handleClose2} />
                                            
                                                
                                            </Grid>
                                            
                                            
                                            
                                        </Grid>
                                        </DialogTitle>

                                        <Divider/>
                                        <DialogContent style={{height:"100vh",width:"31vw"}}>
                                        <DialogContentText>

                                        </DialogContentText>
                                        <Typography >
                                            Primary Email
                                        </Typography>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Enter Email"
                                            type="email"
                                            variant="outlined"
                                            style={{width:"60%"}}
                                            
                                        />
                                        <Typography componen="div" style={{display:"flex",width:"100%",marginTop:"10px"}}>
                                        <Fab aria-label="add" size="small" style={{background:"#6993FF",color:"white"}}>
                                        <AddIcon />
                                        
                                        </Fab>
                                        <Typography style={{display:"flex",marginLeft:"15px",alignItems:"center"}}>
                                            Primary Email
                                        </Typography>
                                        </Typography>
                                        <Divider style={{marginTop:"15px"}}/>

                                        <Typography style={{marginTop:"15px"}}>
                                            Secondary Email List
                                        </Typography>
                                        <Grid container justify="center" spacing={1}>
                                 
                                        {st1.map((value,index) => (        
                                                                        

                                                                        
                                                                         
                                                                        
                                                                        <Input    value={value} onChange={handletext} name={index} style={{width:"100vw",marginTop:"10px"}}
                                                                        icon={<Icon name='cancel' inverted circular link id={index} onClick={subcount} />}
                                                                        placeholder='Enter Email'
                                                                      />                  
                                                                        


                                                                    
                                        
                                            
                                        ))}
                                        </Grid>
 
              
                                        
                                        <Typography componen="div" style={{display:"flex",width:"100%",marginTop:"10px"}}>
                                        <Button onClick={addcount}>
                                        <Fab aria-label="add" size="small" style={{background:"#6993FF",color:"white"}} >
                                        <AddIcon />
                                        
                                        </Fab>
                                        </Button>

                                        <Typography style={{display:"flex",marginLeft:"15px",alignItems:"center"}}>
                                            Add Secondary Email
                                        </Typography>
                                        </Typography>
                                        <Divider style={{marginTop:"15px"}}/>
                                        <Typography style={{marginTop:"15px"}}>
                                            Alert Settings
                                        </Typography>
                                        <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}}>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"38px"}}> High Risk</Typography>
                                                <IOSSwitch checked={state.checkedA} onChange={handleChange4} name="checkedA" />
                                            </Typography>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"40px"}}> Low Risk</Typography>
                                                <IOSSwitch checked={state.checkedB} onChange={handleChange4} name="checkedB" />
                                            </Typography>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"20px"}}> New Assets</Typography>
                                                <IOSSwitch checked={state.checkedC} onChange={handleChange4} name="checkedC" />
                                            </Typography>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"5px"}}> Vulnerabilities</Typography>
                                                <IOSSwitch checked={state.checkedD} onChange={handleChange4} name="checkedD" />
                                            </Typography>                                                                        
                                        
                                        </Typography>
                                        <Divider style={{marginTop:"15px"}}/>
                                        <Typography component="div" style={{display:"flex",width:"100",justifyContent:"center",marginTop:"15px"}}>
                                        <Button color="primary" variant="contained" onClick={handleSubmission}> Update Settings</Button>
                                        </Typography>
                                        </DialogContent>
                                </Dialog>
                                <Dialog>

                                </Dialog>
                            </Grid>
                        </Grid>
                    
                    
                    </Grid>
                    </Grid>
            </Typography>
            <Divider/>            
            <Typography>
                            <Grid container spacing={0}>
                                <Grid item xs={12} style={{marginTop:"0.5vh"}}>
                                <Typography component="div" style={{ backgroundColor: 'white', }}>
                                    <Typography  className={classes.Typofont}>
                                       Primary Email
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.TypoSecondFont}>
                                        Email Goes Here
                                    </Typography>
                                </Typography>
                                <Typography component="div" style={{ backgroundColor: 'white'}}>
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
                                <Typography component="div" style={{ backgroundColor: 'white'}}>
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