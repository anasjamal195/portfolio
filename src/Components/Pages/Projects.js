import * as React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Colors from '../../Design/Colors'
import Project from '../Project'
import Thumbs from '../../img/Project_Thumbnails/Index'
const useStyles = makeStyles(theme => ({

    page_body: {
        height:'auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center' , 
        [theme.breakpoints.down('sm')]:{
            marginTop:theme.spacing(10),
            height:'auto',
        },
    },heading:{
        color:Colors.theme_primary,
        fontWeight:'bold',
       },
    projects_container:{
        marginTop:theme.spacing(5),
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        flexWrap:'wrap'
    }
  
}))


export default function App() {
    const styles = useStyles()
    return (
        <div className={styles.page_body}>
           <Typography variant  = 'h4' align = 'center' className = {styles.heading}>My <Typography style = {{color:Colors.theme_light}} variant = 'inherit'>
              Projects
                </Typography>
             </Typography>
            <Container className = {styles.projects_container}>
                <Project title = "Point of Sale" 
                        description = {`A simple prototype for a cafe Point of Sale System.
                        It is made in react JS and Firebase. The styling and UI is made using Material UI (React Styling library). The Design in fully responsive and optimized for mobile devices.
                        The main features of this project includes:
                        
                        1) Inventory management.
                        2) Order placing.
                        3) Bill Generation.
                        `} 
                        thumbnail = {Thumbs.Proj1}/>
                <Project title = "Weather App" 
                        description = {`It is a weather forcast web app made in react js.
                        It uses weather.com's api to forcast weather.The app uses a location provided by user to show current weather of that area.
                        It is a simple practice project that I built just to get some hands on APIs.

                        Main features of this project includes:
                        1) Current weather and temperature of a specified area.
                        2) Shows location of that area.
                        3) Shows some other vitals for that area.
                        `} 
                        thumbnail = {Thumbs.Proj2}/>
                <Project title = "E-Commerce Site" 
                        description = {`This project is made in Django python.
                        It uses python as a backend and SQL database to store data. The working is simple. A customer places an order with required specifications and an email is sent to company in which the delivery address is mentioned.
                        It uses SMTP email service provided by google. 
                        
                        The main features of this project includes:
                        1) A dashboard for display of products.
                        2) Simple order placement method.
                        3) SMTP email service.
                        4) An Admin Panel for addition and deletion of products.
                        5) Sql Database to store all data.
                        `} 
                        thumbnail = {Thumbs.Proj3}/>
                <Project title = "Dianosaur Game" 
                        description = {`This is a fun project that I built to practice programming.
                        It is a Chrome's Dinosaur like game that I built using Pygame in Python. I learnt a lot about programming building small games like this. It uses pygame to create a canvas for the game itself. Moreover it also uses mixers for playing sounds.

                        The main features of this project includes:
                        1) Single key controls to play the game.
                        2) High score counter.
                        3) Mixer for playing in-game sounds.
                        4) Animated sprites as Foreground and Background.
                        `} 
                        thumbnail = {Thumbs.Proj4}/>
                <Project title = "Pong Game" 
                        description = {`Another small fun project that is built using Pygame in Python.
                        It is a traditional Pong game from 90's gaming consoles. It is built completely on pygame canvas.
                        
                        The main features of this project includes:
                        1) Easy keyboard controls to play the game.
                        2) Game over handler.
                        3) 2D canvas drawings.
                        `} 
                        thumbnail = {Thumbs.Proj5}/>
                <Project title = "Real Estate" 
                        description = {`This project is built in React js.
                        It is front end for a Real Estate site. The design in completely responsive and user friendly. It is powered by react-bootstrap library.
                        
                        The main features of design includes:
                        1) Responsiveness.
                        2) Grid Layouts.
                        3) Animations and interactive buttons.
                        `} 
                        thumbnail = {Thumbs.Proj6}/>
                <Project title = "Javascript Clock" 
                        description = {`It is a real time analog clock. I have built it using pure Html, CSS and Javascript. This was also a part of my programming practice.
                        
                        The main features of design includes:
                        1) Clock movements are fully animated using Js
                        2) Date and time functionality.
                        3) Background changes everytime you click on the clock.
                        `} 
                        thumbnail = {Thumbs.Proj7}/>
            </Container>
        </div>
    );
}

