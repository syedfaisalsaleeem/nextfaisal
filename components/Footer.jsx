import styles from "./Footer.module.css"
import { Paper } from "@material-ui/core"
export default function Footer (){
    return(
        <Paper> 
        <div className={styles.footercard}>
            <div className={styles.footercardc1}>
                                

                <div className={styles.footercardc12}>
                    <div className={styles.footercardc121}>
                        <div>
                            <li> Privacy Policy</li>
                        </div>
                        <div>
                            <li> User Notice</li>
                        </div>
                        <div>
                            <li> Support Center</li>
                        </div>
                
                    </div>
                    <div className={styles.footercardc122}>
                        <p>Copyright Cyber Intelligence House 2020.</p>
                        
                    </div>
                </div>
            </div>
        </div>
        </Paper>

    )


}
