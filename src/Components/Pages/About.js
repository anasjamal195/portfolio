import * as React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import Colors from '../../Design/Colors'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import image_url from '../../img/Page1_img.png'
import image_url2 from '../../img/page_1_img2.png'
import InfoIcon from '@mui/icons-material/Info';
const useStyles = makeStyles(theme => ({

    page_body: {
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center' , 
        [theme.breakpoints.down('sm')]:{
            marginTop:theme.spacing(5)
        },
       
    

    },heading:{
        color:Colors.theme_primary,
        fontWeight:'bold',
    
    
       }
  
}))


export default function App() {
    const styles = useStyles()
    return (
        <div className={styles.page_body}>
           <Typography variant  = 'h4' align = 'center' className = {styles.heading}>About <Typography style = {{color:Colors.theme_light}} variant = 'inherit'>
              Me
                </Typography>
             </Typography>

        </div>
    );
}

