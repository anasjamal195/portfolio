import * as React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Colors from '../../Design/Colors'
import SkillCard from '../SkillCard'

const useStyles = makeStyles(theme =>({
    body:{
       
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center' , 
        [theme.breakpoints.down('sm')]:{
            height:'auto',
            marginTop:theme.spacing(10)
        },
       
    },
   card_container:{
    display:'flex',
    marginLeft:'auto',
    marginRight:'auto',
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap',
    justifyContent:'start',
    
    [theme.breakpoints.down('sm')]:{
        
        marginTop:'100px'
    },
   },
   heading:{
    color:Colors.theme_primary,
    fontWeight:'bold',


   }
    }))
    
    
    export default function App() {
      const styles = useStyles()
      return (
        <div  className={styles.body}>
            <Typography variant  = 'h4' align = 'center' className = {styles.heading}>Skill <Typography style = {{color:Colors.theme_light}} variant = 'inherit'>
              Stack
                </Typography>
             </Typography>
            <Container  className = {styles.card_container}>
                <SkillCard text = 'HTML' percentage = "90"/>
                <SkillCard text = 'CSS' percentage = "90"/>
                <SkillCard text = 'JS' percentage = "80"/>
                <SkillCard text = 'React JS' percentage = "80"/>
                <SkillCard text = 'Python' percentage = "80"/>
                <SkillCard text = 'C/C++' percentage = "80"/>
                <SkillCard text = 'Django' percentage = "50"/>
                <SkillCard text = 'Embedded C' percentage = "70"/>
                <SkillCard text = 'Firebase' percentage = "70"/>
                <SkillCard text = 'MongoDb' percentage = "40"/>
                <SkillCard text = 'Node JS' percentage = "60"/>
                <SkillCard text = 'Technical Writing' percentage = "80"/>

                

            </Container>
          
          
        </div>
      );
    }