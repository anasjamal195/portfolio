import * as React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import { Container, IconButton, makeStyles, Typography } from '@material-ui/core';
import Colors from '../Design/Colors'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Carousel from 'better-react-carousel'
import CloseIcon from '@mui/icons-material/Close';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',



  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles(theme => ({
  body: {

    padding: theme.spacing(2),
    width: '20vw',
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {

      width: '90vw'
    },

    backgroundColor: "transparent",
    backdropFilter: "blur(5px)",
    boxShadow: '5px 3px 10px black'

  },
  card_text: {
    color: Colors.theme_light,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'transparent',
    color: Colors.theme_light
  },
  btn1: {
    backgroundColor: Colors.theme_primary,
    color: Colors.theme_light,
    margin: '20px auto',
    fontWeight: 'bold',
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: Colors.theme_primary_hover,
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
    }
  },
  modal: {
    backgroundColor: 'transparent',
    backdropFilter: 'blur(10px)',
    color: Colors.theme_light
  },
  modal_inner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4,
    backgroundColor: Colors.theme_dark,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90vw',
    height:'90vh',
    padding: theme.spacing(5),
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: theme.spacing(1),
      width: '95vw',
      
           
    }
  },
  info_container: {
    height: '100%',
    width:'80%',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
      textAlign: 'center',
      height:'auto',
      zIndex: "1000",
      overflowY: "auto"    

    }

  }, heading_text: {
    fontWeight: 'bold',
    color: Colors.theme_primary,
    marginBottom: theme.spacing(3),

  }, body_text: {
    fontSize: '100%',
    whiteSpace: 'pre-line',
  },carousel_img:{
    width:"100%",
    [theme.breakpoints.down('sm')]:{
      marginTop:theme.spacing(5),
    }
  },
  closeIcon:{
    position:'absolute',
    right:'10px',
    top:'10px',
    color:Colors.theme_light,
    zIndex:'1000',
  }
}))



export default function App(props) {
  const styles = useStyles()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: '100%' }} className={styles.body}>

      <Card sx={{ maxWidth: 345 }} className={styles.card}>
        <CardMedia
          component="img"
          height="140"
          image={props.thumbnail.ss1}
          alt="thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} className={styles.btn1} variant="contained" size="small">View Details</Button>

        </CardActions>
      </Card>


      <Modal
        open={open}
        onClose={handleClose}
        className={styles.modal}
      >
        <Container className={styles.modal_inner}>
          <IconButton className = {styles.closeIcon}  onClick={handleClose}>
          <CloseIcon />
          </IconButton>
          <Container className={styles.carousel_container}>
            <Carousel cols={1} rows={1} gap={10} autoplay={3000} loop>
              {Object.keys(props.thumbnail).map((keys, index) => (
                <Carousel.Item>
                  <img className = {styles.carousel_img} src={props.thumbnail[keys]} alt="thumbnail"></img>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
          <Container className={styles.info_container}>
            <Typography className={styles.heading_text} variant='h4'>
              {props.title}
            </Typography>
            <Typography className={styles.body_text} variant='h6'>
              {props.description}
            </Typography>
          </Container>

        </Container>
      </Modal>
    </Box>




  );
}