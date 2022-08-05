/* eslint-disable array-callback-return */
import axios from 'axios';


const apiCall = async (name) => {
    return await axios(`https://api.factoryfour.com/${name}/health/status`)
        .then(res => {return ({
            apiName: name,
            success: res.data.success,
            message: res.data.message,
            hostName: res.data.hostname,
            time: new Date(res.data.time).toLocaleString()
        })})
        .catch(err => {return ({
            apiName: name,
            success: false,
            message: 'Error :x',
            hostName: 'OUTAGE',
            time: 'Error 503'
        })})
 
};

export default apiCall;