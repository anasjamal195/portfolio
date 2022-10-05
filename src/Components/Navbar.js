import * as React from 'react';
import { makeStyles } from "@material-ui/core";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Colors from '../Design/Colors'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import SkillIcon from '@mui/icons-material/Psychology';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, animateScroll as scroll } from "react-scroll";
import { useRef } from 'react';
const useStyles = makeStyles(theme => ({
 nav_bar:{
    
    
    [theme.breakpoints.down('md')]:
    {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',

    }
    

 },
app_bar:{
    backgroundColor:"transparent",
    backdropFilter:"blur(15px)",
    position:"Fixed",
    top:'0px',
    zIndex:'1'
    
},
 nav_link_container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginRight:theme.spacing(2),
    [theme.breakpoints.down('md')]:
    {
        display:'none',
    }
 },
 nav_bar_inner:{
    [theme.breakpoints.up('md')]:{
    marginLeft:theme.spacing(5),
    marginRight:theme.spacing(5),
    }
 },
 nav_links:{
    marginLeft:theme.spacing(1),
    marginRight:theme.spacing(1),
 },

 button1:{
    backgroundColor:Colors.theme_primary,
    marginLeft:theme.spacing(3),
    marginRight:theme.spacing(3),
    '&:hover':{
        backgroundColor:Colors.theme_primary_hover,
    },
    [theme.breakpoints.down('md')]:
    {
        marginLeft:theme.spacing(1),
    marginRight:theme.spacing(1),
    }
 }
 ,
 menuIcon:{
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block',
    }
 },
 social_handles:{
    
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
 },
 social_handles_icons:{
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
    color:Colors.theme_primary
 },
 drawerMenu:{
    backgroundColor:Colors.theme_dark,
    color:Colors.theme_light,
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around'
 },
 nav_icons:{
    color:Colors.theme_primary,
    
 },
 social_handles_drawer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',

 },
 social_handles_icons_drawer:{
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
    color:Colors.theme_primary
 },
 router_link:{
  color:'inherit',
  textDecoration:'none',
 }
}));



export default function App(props) {
  const styles = useStyles();
  const scrollToHome = useRef(props.homeReference)
  const [anchor,serAnchor] = React.useState('left')
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className = {styles.drawerMenu}
    >
      <List>
       
          <ListItem >
            <Link className = {styles.router_link}
                     activeClass="active"
                     to="home"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
            >
            <ListItemButton>
              <ListItemIcon>
                    <HomeIcon className={styles.nav_icons}/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            </Link>
          </ListItem>
          
          <ListItem >
            <Link className = {styles.router_link} to = '/about'>
            <ListItemButton>
              <ListItemIcon>
                    <InfoIcon className={styles.nav_icons} />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem >
            <Link className = {styles.router_link} 
                 activeClass="active"
                 to="skills"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}
            > 
            <ListItemButton>
              <ListItemIcon>
                    <SkillIcon className={styles.nav_icons} />
              </ListItemIcon>
              <ListItemText  primary="Skills" />
            </ListItemButton>
            </Link>
          </ListItem>


          <ListItem >
            <Link className = {styles.router_link} to = "/projects">
            <ListItemButton >
              <ListItemIcon>
                    <WorkIcon className={styles.nav_icons} />
              </ListItemIcon>
              <ListItemText primary="Portfolio"/>
            </ListItemButton>
            </Link>
          </ListItem>
      </List>
      <Box className = {styles.social_handles_drawer}>
      <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className = {styles.social_handles_icons_drawer}
          >
            <WhatsAppIcon/>
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className = {styles.social_handles_icons_drawer}
          >
            <LinkedInIcon/>
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className = {styles.social_handles_icons_drawer}
          >
            <EmailIcon/>
          </IconButton>
      </Box>
      
    </Box>
  );

 



  return (
    <div >
         <Box sx={{ flexGrow: 1 }} className={styles.nav_bar}>
      <AppBar position="static" className={styles.app_bar} >
        <Box className = {styles.nav_bar_inner}>
        <Toolbar>
          <IconButton className = {styles.menuIcon}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}

          >
            {list(anchor)}
          </SwipeableDrawer>
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            Muhammad Anas
          </Typography>
          <Box className={styles.nav_link_container}>
            <Link  className = {styles.router_link} 
              onClick={()=>{scrollToHome.current.scrollIntoView({ behavior: 'smooth' })}}
            >
            <Button className = {styles.nav_links} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
            </Button>
            </Link>
            <Link className = {styles.router_link} 
            
            >
            <Button className = {styles.nav_links} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                About
            </Button>
            </Link>
            <Link  className = {styles.router_link}
            onClick={()=>{props.skillRef.current.scrollIntoView({ behavior: 'smooth' })}}
            >
            <Button className = {styles.nav_links} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Skills
            </Button>
            </Link>

            <Link className = {styles.router_link} to = '/projects'>
            <Button className = {styles.nav_links} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Projects
            </Button>
            </Link>
          </Box>
          <Box className = {styles.social_handles}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className = {styles.social_handles_icons}
          >
            <LinkedInIcon/>
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className = {styles.social_handles_icons}
          >
            <EmailIcon/>
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className = {styles.social_handles_icons}
          >
            <WhatsAppIcon/>
          </IconButton>
          
          </Box>
          <Button className = {styles.button1} color="inherit" variant = "contained">Contact</Button>
        </Toolbar>
        </Box>
      </AppBar>
    </Box>
    
    </div>
  );
}

 