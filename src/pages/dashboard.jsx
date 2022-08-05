/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import Cards from '../components/cards'
import API_NAME from '../api/constants'
import styles from '../app.module.css';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import apiCall from '../api/api';

const Dashboard = () => {
    const [bucket, setBucket]= useState([]);
    const [trigger, setTrigger] = useState(1);

    // variable responsible for calling the api, after the time setted (milliseconds)
    //-------------------------------------------- 
        const interval = 15000;
    //--------------------------------------------

    setTimeout(()=> {
        setTrigger(trigger + 1);
    }, interval)

    useEffect(() => {
        const dataCaller =  API_NAME.map((name) => {
           return apiCall(name);
        });
        Promise.all(dataCaller).then(res => {setBucket(res)})
    }, [trigger]);

    return (<div>
        <Header/>
            <div className={styles.main}>
                {bucket.length ? (
                    <Grid className={styles.gridContainer} container spacing={3} >
                        {bucket.map(api => (
                            <div key={api.apiName}>
                                <Cards 
                                    success={api.success} 
                                    apiName={api.apiName} 
                                    message={api.message} 
                                    hostName={api.hostName}
                                    time={api.time}
                                />
                            </div>
                        ))}
                    </Grid>
                ) : (<CircularProgress />)}
            </div>
    </div>)
}

export default Dashboard;