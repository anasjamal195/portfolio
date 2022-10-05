import * as React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import Colors from '../../Design/Colors'
import Grid from '@mui/material/Grid';
import CV from '../../Docs/CV.pdf'
import { Box } from '@mui/system';
import image_url from '../../img/page1_img.png'
import image_url2 from '../../img/page1_img2.png'
import InfoIcon from '@mui/icons-material/Info';
import { Link, animateScroll as Scroll } from "react-scroll";
import {forwardRef, useImperativeHandle, useRef} from 'react';

const useStyles = makeStyles(theme => ({

    page_body_1: {
        margin: "50px auto",
        height: '90vh',
        marginTop: "50px",
        display: 'flex',
        flexDirection: 'row',
        width:'95vw',
        
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            marginTop: '100px',
            height: 'auto',
        },
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',


    },
    page_body_2: {


        
        height: '100vh',
        marginTop: "50px",
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]:{
            height:'auto',
        },
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    left_pane2:{
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    right_pane2:{
        [theme.breakpoints.down('sm')]:{
            textAlign:'center'
        }
    },

    
    text_light: {
        color: Colors.theme_light,
    },
    text_primary: {
        color: Colors.theme_primary,
        fontWeight: 'bold'
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
    btn2: {
        backgroundColor: Colors.theme_dark,
        borderColor: Colors.theme_primary,
        color:Colors.theme_light,
        fontWeight:'bold',
        margin: theme.spacing(3),
        '&:hover': {
            backgroundColor: Colors.theme_dark_hover,
            borderColor: Colors.theme_primary,
        },
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(1),
        }
    },
    image_1: {
        width: "60%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginTop:theme.spacing(3)
        }
    },
    image_2: {
        width: "60%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    button_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: "80%",

    }, highlight_text: {
        color: Colors.theme_primary,
        fontWeight: 'bold',

    },download_link:{
        textDecoration:'none',
        color:Colors.theme_light,
    }
}))


export default function App(props) {
    const styles = useStyles()
    const Child = forwardRef((props, ref) => {
        useImperativeHandle(ref, () => ({
          childFunction1() {
            console.log('child function 1 called');
          },
          childFunction2() {
            console.log('child function 2 called');
          },
        }))})
    return (
        <div className={styles.page_body}>
            <Container className={styles.page_body_1}>
                <Container className={styles.left_pane}>
                    <Typography variant='h3' className={styles.text_light} align='center'>
                        Welcome,<br />I am <Typography variant='inherit' className={styles.text_primary}>
                            Muhammad Anas
                        </Typography>
                    </Typography>
                    <Container className={styles.button_container} >
                        <Link  activeClass={styles.nav_active}
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300}>
                        <Button className={styles.btn1} variant='contained'  >About Me</Button>
                        </Link>
                        <Button className={styles.btn2} variant='outlined'  
                            onClick={Scroll.scrollToBottom}
                        >Lets Connect</Button>
                    </Container>
                </Container>
                <Container className={styles.right_pane}>
                    <img className={styles.image_1} src={image_url} alt="image" />
                </Container>
            </Container>
            <Container className={styles.page_body_2}>
                <Container className={styles.left_pane2} >
                    <img className={styles.image_2} src={image_url2} alt='img' />
                </Container>
                <Container className={styles.right_pane2} align = 'left' id = 'about'>
                    <Typography variant='h3' className = {styles.highlight_text}>
                        <Typography variant='inherit' style={{ color: Colors.theme_light }}> Muhammad </Typography>Anas Jamal
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant='h5' style={{ color: Colors.theme_light }}>
                        Hi there, this is <span className={styles.highlight_text}>Muhammad Anas</span>.
                        I am a Coding <span className={styles.highlight_text}>Enthusiast.</span>. I am currently
                        a university student studying <span className={styles.highlight_text}>Electrical Engineering </span>
                        as a passion while working as a <span className={styles.highlight_text}>Full Stack  </span>
                        Web Developer as a profession. I have done many <span className={styles.highlight_text}> Personal </span>
                        and <span className={styles.highlight_text}> Professional</span> projects in the past two years.
                        I believe that I have good <span className={styles.highlight_text}> Problem Solving </span> abilities.
                        I am a Quick <span className={styles.highlight_text}> Learner </span> and I am looking for opportunities
                        to polish my <span className={styles.highlight_text}> Skills </span>.
                    </Typography>
                    <br/>
                    <Container className={styles.button_container} >
                        <Button className={styles.btn1} variant='contained'  >
                        <a href={CV} className = {styles.download_link}  download>Download CV</a>
                        </Button>
                    </Container>
                </Container>
            </Container>

        </div>
    );
}

