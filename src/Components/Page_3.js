import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Colors from '../Design/Colors'
import Grid from '@mui/material/Grid';
import image_url from '../img/Page1_img.png'
import { Box, style } from '@mui/system';
import SkillCard from './SkillCard'
const useStyles = makeStyles(theme => ({
    page_body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        color: Colors.theme_light,

    },
    page_heading_container: {
        textAlign: 'center',
        marginBottom:theme.spacing(8)
    },
    heading_text: {
        color: Colors.theme_light,
        fontWeight: 'bold',

    },
    highlight_text: {
        color: Colors.theme_primary,
        fontWeight: 'bold',

    },
    page_content:{
        marginTop:theme.spacing(2)
    },
    button1:{
        backgroundColor:Colors.theme_primary,
       
        margin:theme.spacing(3),
        '&:hover':{
            backgroundColor:Colors.theme_primary_hover,
        },
    },
    button2:{
        backgroundColor:Colors.theme_dark,
        borderColor:Colors.theme_light,
        margin:theme.spacing(3),
        '&:hover':{
            backgroundColor:Colors.theme_dark_hover,
        },
    }

}))


export default function App() {
    const styles = useStyles()
    return (
        <div >
            <Container className = {styles.page_body}>
            <SkillCard heading = "HTML" value = {90}></SkillCard>
            </Container>
        </div>
    );
}

