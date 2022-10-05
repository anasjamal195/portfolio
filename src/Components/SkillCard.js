import * as React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import {  makeStyles, Typography } from '@material-ui/core';
import Colors from '../Design/Colors'
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const useStyles = makeStyles(theme =>({
body:{
    border:`2px solid ${Colors.theme_primary}`,
    borderRadius:'10px',
    padding:theme.spacing(2),
    width:'20vw',
    margin:theme.spacing(1),
    marginRight:'auto',
    marginBottom:theme.spacing(3),
    [theme.breakpoints.down('sm')]:{

        width:'90vw'
    },
    
    backgroundColor:"transparent",
    backdropFilter:"blur(5px)",
    boxShadow:'5px 3px 10px black'

},
card_text:{
    color:Colors.theme_light,
    fontWeight:'bold',
},
progress_bar_area:{
   
}
}))



export default function App(props) {
  const styles = useStyles()
  const [reqProgress,setReqProgress] = React.useState(parseInt(props.percentage));
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= reqProgress) {
          return reqProgress;
        }
        const diff = 3;
        return Math.min(oldProgress + diff, 100);
      });
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }} className = {styles.body}>
        <Typography className = {styles.card_text} variant = 'h5'>{props.text}</Typography>
        <Box className = {styles.progress_bar_area}>
      <LinearProgress color = 'primary' variant="determinate" value={progress} />
      <Typography align = 'right' variant = 'h6' className = {styles.card_text}>{props.percentage}%</Typography>
      </Box>
    </Box>

  );
}