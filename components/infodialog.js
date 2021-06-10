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
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor:'#f3ca20',
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
  kupBSV: {
    margin: 10,
    background: 'black', 
    color: 'white', 
    fontWeight: '900',
    '&:hover' : {
      color: 'white', 
      background: 'black', 
      transform: 'scale(1.02)',
      transition: '0.25s ease-in-out'
    }
  }
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

  const handleBuy = (e) => {
    e.preventDefault()
      window.open('https://www.kupbsv.pl', '_blank')
  }

  return (
    <div>
      <Button variant="contained"  className={classes.button} startIcon={<SettingsOutlinedIcon />} onClick={handleClickOpen} >
        JAK ZACZĄĆ?
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
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
            <div className="box">
              <a className="title">1. Wklej link</a>
              <img></img>
              <p className="description">Wyślij nam dowolny link z porządanym przedmiotem.</p>
            </div>
            <div className="box">
              <a className="title">2. Zaczekaj na weryfikację</a>
              <img></img>
              <p className="description">Zaczekaj na weryfikację oraz na kontakt mailowy.</p>
            </div>
            <div className="box">
              <a className="title">3. Zapłać krypto</a>
              <img></img>
              <p className="description">Zapłać natychmiastową transakcją bitcoinem SV i ciesz się z udanych zakupów.</p>
            </div>
            <div className="box">
              <a className="title">4. Nie posiadasz BSV?</a>
              <img></img>
              <div className="kupbsv">
                <Button 
                  variant="contained" 
                  startIcon={<AccountBalanceWalletOutlinedIcon />} 
                  onClick={handleBuy} 
                  className={classes.kupBSV}
                >
                  KupBSV
                </Button>
              </div>
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
          background-image: radial-gradient(rgba(244, 219, 49, 0.75), rgba(244, 219, 49, 1));
        }
        .logo {
          font-size: 5rem;
          font-weight: 900;
          margin-bottom: 10px;
        }
        .info {
          font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          font-weight: 900;
          width: 50%;
          margin-bottom: 25px;
          margin-top: 25px;
        }
        .title {
          font-size: 1.3rem;
          font-weight: 900;
        }
        .kupbsv {
          margin-top: 10px;
        }
        .box {
          flex: 1 1 30%;
          margin: 15px;
        }
        .description {
          text-align: justify;
        }
        @media only screen and (max-width: 499px) {
          .info {
            width: 80%;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: flex-start;
            margin-bottom: 15px;
            margin-top: 5px;
          }
          .box {
            margin: 10px;
          }
          .logo {
            margin-top: 15px;
            font-size: 4.25rem;
          }
          .kupbsv {
            text-align: center;
          }
          .description {
            text-align: left;
          }
        }
        @media only screen and (min-width: 500px) {
          .box:last-child {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}