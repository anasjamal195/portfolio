import * as React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import Colors from '../../Design/Colors'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';
import Input from '@mui/material/Input';
const useStyles = makeStyles(theme => ({

    page_body: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(5)
        },



    }, heading: {
        color: Colors.theme_primary,
        fontWeight: 'bold',



    },

    form_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    form_inputs: {
        marginTop: theme.spacing(3),
        color: Colors.theme_light,
        width:'40vw',
        [theme.breakpoints.down('sm')]:{
            marginTop: theme.spacing(5),
            width:'90vw',
        }
    },
    btn1: {
        backgroundColor: Colors.theme_primary,
        color: Colors.theme_light,
        margin: theme.spacing(3),
        fontWeight:'bold',
        '&:hover': {
            backgroundColor: Colors.theme_primary_hover,
        },
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(1),
        }
    },
}))


export default function App() {
    const styles = useStyles()
    return (
        <div className={styles.page_body}>
            <Typography variant='h4' align='center' className={styles.heading}>Contact <Typography style={{ color: Colors.theme_light }} variant='inherit'>
                Me
            </Typography>
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                autoComplete="off"
            >
                <div className={styles.form_container}>

                    <Input className={styles.form_inputs} placeholder='Your Name...'  required />
                    <Input className={styles.form_inputs} placeholder='Your Email...' type="email" required />
                    <Input className={styles.form_inputs} placeholder='Your Phone No...' required />
                    <Input className={styles.form_inputs} placeholder='Start typing here....'
                        multiline={true}
                        minRows={5}
                         />
                <Button className = {styles.btn1} variant = "contained" type = "submit">Send Message</Button>
                </div>
               
            </Box>

        </div>
    );
}

