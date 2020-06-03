import Head from 'next/head';
import styles from "./Login.module.css";
import LoginCard from '../components/LoginCard1';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledCard = withStyles({
  root1: {
    background: 'white',
    borderRadius: 3,
    border: 0,
    color: 'black',
    width:"200rem",
    minWidth: 275,
    
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Card);
const useStyles = makeStyles((theme)=>({
    f1: {
        background: 'white',
        borderRadius: 3,
        border: 0,
        color: 'black',
        width:"100vw",
        minWidth: 275,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
  }))
export default function Login(){
    const classes = useStyles();
    return(
        <div>
        <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />

        <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        </Head>
        <main>
        <div className={styles.logincontainer}>
            
            <div className={styles.logod}>
                <div className={styles.logod1}>
                <img src="cyber.png" />
                </div>
                
            </div>
            <div className={styles.logind}>
                <div className={styles.logincard}>
                    <div className={styles.logincardh}>

                        <div className={styles.logincardhi2}>
                        
                            <Card className={classes.f1}>
                                <CardContent>
                                <LoginCard/>
                                </CardContent>
                            
                            </Card>
                           
                        </div>

                    </div>

                </div>
                <div className={styles.footercard}>
                        <div className={styles.footercardh}>
                            <div className={styles.footercardc}>

                            </div>
                            
                            <div className={styles.footercardc1}>
                            
                                <div className={styles.footercardc11}>
                                
                                </div>
                                <div className={styles.footercardc12}>
                                    <div className={styles.footercardc121}>
                                        <div>
                                            <li> Privacy Policy</li>
                                        </div>
                                        <div>
                                            <li> User Notice</li>
                                        </div>

                                    </div>
                                    <div className={styles.footercardc122}>
                                        <p>Copyright Cyber Intelligence House 2020.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.footercardh1}>
                        <img src="BigData.png" width="400px" height="369.96px"/>
                        </div>

                </div>
            </div>

        </div>
        </main>
        </div>
    )

}