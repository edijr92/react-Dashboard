import React from 'react';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from '../app.module.css'

const Cards = (props) => {
    const { time, hostName, message, apiName, success } = props;
    return (
        <div>
            <Grid item xs={12} md={10}>
                <Card className={styles.cardContainer} variant="elevation">
                    {!success ? (<CheckCircleOutlineIcon color='error' fontSize="large"/>) 
                        : (<CheckCircleOutlineIcon style={{ 'color': 'green' }} fontSize="large"/>)}
                    <CardContent className={styles.cardContent}>
                        <Typography className={styles.title} color="textSecondary" gutterBottom>
                            {apiName}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {message}
                        </Typography>
                        <Typography className={styles.pos} color="textSecondary">
                            {hostName}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {time}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}
export default Cards;