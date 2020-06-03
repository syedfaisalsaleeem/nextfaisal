import Head from 'next/head';
import styles from "./Login.module.css";
import LoginCard from '../components/LoginCard1';
export default function Login(){
    return(
        <div>
        <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"></meta>
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
                            <LoginCard/>
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