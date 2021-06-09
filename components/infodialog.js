import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Link from 'next/link';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'rgba(280, 179, 0, 1)',
    color: 'black'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    margin: 10,
    fontWeight: '900',
    '&:hover' : {
      transform: 'scale(1.02)',
      transition: '0.25s ease-in-out',
      background: 'white', 
      color: 'black'
    },
    background: 'white', 
    color: 'black',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InfoDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained"  className={classes.button} startIcon={<SettingsOutlinedIcon />} onClick={handleClickOpen} >
        JAK ZACZĄĆ?
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} PaperProps={{ style: {backgroundImage: 'radial-gradient(rgba(234, 179, 0, 0.3), rgba(280, 179, 0, 1))'}, }}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} style={{fontWeight: '900'}}>
              JAK ZACZĄĆ?
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="main">
          <div className="logo">
            <a>PayBSV</a>
          </div>
          <div className="info">
            <div className="first">
              <a className="title">1. Wklej link</a>
              <img></img>
              <p className="description">Wyślij nam dowolny link z porządanym przedmiotem.</p>
            </div>
            <div className="first">
              <a className="title">2. Zaczekaj na weryfikację</a>
              <img></img>
              <p className="description">Zaczekaj na weryfikację oraz na kontakt mailowy.</p>
            </div>
            <div className="first">
              <a className="title">3. Zapłać krypto</a>
              <img></img>
              <p className="description">Zapłać za natychmiastową transakcję bitcoinem SV i ciesz się z udanych zakupów.</p>
            </div>
          </div>
          <div>
            <Button 
              variant="contained" 
              className={classes.button} 
              startIcon={<KeyboardArrowRightIcon />} 
              onClick={handleClose}
            >
              ZACZYNAJMY
            </Button>
          </div>
        </div>
      </Dialog>
      <style jsx>{`
        .main {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
        }
        .logo {
          font-size: 5rem;
          font-weight: 900;
        }
        .info {
          display: flex;
          flex-direction: row;
          font-weight: 900;
          width: 50%;
          margin-bottom: 25px;
          margin-top: 25px;
        }
        .title {
          font-size: 1.3rem;
          font-weight: 900;
        }
        .first {
          margin: 15px;
        }
        @media only screen and (max-width: 499px) {
          .info {
            width: 80%;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            align-content: stretch;
            margin-bottom: 15px;
            margin-top: 15px;
          }
          .first {
            margin: 10px;
          }
        }
      `}</style>
    </div>
  );
}