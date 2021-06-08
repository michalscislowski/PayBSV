import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
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
    fontWeight: 900,
  },
  button: {
    margin: theme.spacing(1),
    fontWeight: 900,
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
            <Typography variant="h6" className={classes.title}>
              JAK ZACZĄĆ?
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="main">
          <Link as="/" href="/" ><b className="logo">PayBSV</b></Link>
          <div className="info">
            <div className="first">
              <a className="title">1. Wklej link</a>
              <img></img>
              <a className="description">Wyślij nam dowolny link z porządanym przedmiotem</a>
            </div>
            <div className="second">
              <a className="title">2. Zaczekaj na weryfikacje</a>
              <img></img>
              <a className="description">Zaczekaj na weryfikację oraz na kontakt mailowy</a>
            </div>
            <div className="third">
              <a className="title">3. Zapłać krypto</a>
              <img></img>
              <a className="description">Zapłać za natychmiastową tranzakcję bitcoinem SV i ciesz się z udanych zakupów</a>
            </div>
          </div>
          <a><Button variant="contained" className={classes.button} startIcon={<KeyboardArrowRightIcon />} onClick={handleClose} style={{backgroundColor: 'black', color: 'white'}}>ZACZYNAJMY</Button></a>
        </div>
      </Dialog>
      <style jsx>{`
        .main {
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
        }
        .first {
          display:flex;
          flex-direction: column;
          max-width: 22vw;
        }
        .second {
          display:flex;
          flex-direction: column;
          padding-left: 40px;
          max-width: 24vw;
        }
        .third {
          display:flex;
          flex-direction: column;
          padding-left: 40px;
          max-width: 22vw;
        }
        .title {
          font-size: 1.3rem;
          font-weight: 900;
        }
      `}</style>
    </div>
  );
}