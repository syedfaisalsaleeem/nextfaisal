import Head from 'next/head';
import styles from "./ResetPassword.module.css";
import ResetPasswordCard from "../components/RCard"
export default function ResetPassword(){
    return(
        <div>
        <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
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
                        <div className={styles.logincardhi1}>

                        </div>
                        <div className={styles.logincardhi2}>
                        <ResetPasswordCard/>
                        </div>
                        <div className={styles.logincardhi3}>

                        </div>
                    </div>
                    <div className={styles.logincardh1}>

                    </div>
                </div>
                <div className={styles.footercard}>
                        <div className={styles.footercardh}>
                            <div className={styles.footercardc}>
                                <div className={styles.footercardh1}>
                                <img src="Reset.png" width="380px" height="214.68px"/>
                                </div>
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


                </div>
            </div>

        </div>
        </main>
        </div>
    )

}