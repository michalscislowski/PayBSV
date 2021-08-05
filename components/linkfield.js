import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import {useRecoilState} from 'recoil'
import {recoilUserId, recoiluserProfile} from './states'
import axios from "axios"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  inputStyle: {
    color: '#020202',
    width: '700px', 
    marginTop: '10px',
    fontWeight: '900', 
    '& label.Mui-focused' : {
      color: 'red',
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: '#0b7a75',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#020202'
    },
    ['@media (max-width:840px)']: {
      width: '80vw'
    }
  },
  wyslijButton: {
    marginTop: '4rem',
    marginBottom: '0.5rem',
    fontWeight: '900',
    fontSize: '2.25rem',
    padding: '8px 22px',
    fontFamily: 'Lato, sans-serif',
    '&:hover' : {
      transform: 'scale(1.02)',
      transition: '0.25s ease-in-out',
      background: 'black', 
      color: 'white'
    },
    background: 'black', 
    color: 'white',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    ['@media (max-width: 499px)']: {
      marginTop: '3.5rem',
    }
  },
  potwierdzenie: {
    fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
    fontWeight: 700,
    fontSize: '1rem',
  },
  dialogTitle: {
    background:'#f3ca20'
  }
});

export default function Linkfield() {
  const url_create = process.env.NEXT_PUBLIC_HOST_URL + "/api/addItem";
  const classes = useStyles();
  const [linkUrlInput, setLinkUrlInput] = useState({
    name: ""
  });
  const [emailInput, setEmailInput] = useState({
    name: ""
  });
  const [userProfile, setUserProfile] = useRecoilState(recoiluserProfile);
  const [userId, setUserId] = useRecoilState(recoilUserId);
  const [open, setOpen] = useState(false);
  const errorMsgLink = "Niepoprawny link";
  const errorMsgEmail = "Niepoprawny email";

  const handleChange = name => event => {
    setLinkUrlInput({ ...linkUrlInput, [name]: event.target.value });
  };

  const handleChangeEmail = name => event => {
    setEmailInput({ ...emailInput, [name]: event.target.value });
  };

function isUrl(s) {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(s);
 }

 function isEmail(s) {
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(s);
}

  const linkError = isUrl(linkUrlInput.name) !== true && linkUrlInput.name.length !== 0;
  const emailError = isEmail(emailInput.name) !== true && emailInput.name.length !== 0;

  function sendItem(val) {
    if(!linkError && linkUrlInput.name.length !== 0 && !emailError && emailInput.name.length !== 0)
    {
      uploadItemToDB(val)
    }
    else {
      linkError ? console.log("error:", errorMsgLink) : null;
      emailError ? console.log("error:", errorMsgEmail) : null;
    }
  }

  const handleClose = () => {
    setOpen(false);
    setLinkUrlInput({
      name: ""
    });
  };

  function uploadItemToDB(tmpVal) {
    console.log("przedmiot", tmpVal);
    const newItem = {
      email: emailInput.name,
      item: "unknown",
      status: "Added",
      linkurl: linkUrlInput.name,
      mbuserid: userId,
    }
    console.log(JSON.stringify(newItem));
    axios.post(url_create, newItem)
    setOpen(true);
  }

  return (
    <div className="wrapper">
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          style={{backgroundColor: 'transparent'}}
        >
          <DialogTitle className={classes.dialogTitle} id="alert-dialog-slide-title"><span>Potwierdzenie</span></DialogTitle>
          <DialogContent style={{background:'#f3ca20', }}>
            <DialogContentText className={classes.potwierdzenie} id="alert-dialog-slide-description">
              Twoja prośba została przesłana do obsługi.
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{background:'#f3ca20', }}>
            <Button className={classes.potwierdzenie} onClick={handleClose} variant="contained" color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <TextField
          label="link do przedmiotu" 
          className={classes.inputStyle} 
          inputProps={{style: {fontWeight: '700'}}} 
          InputLabelProps={{style: {fontWeight: '900', color: '#404040'}}} 
          value={linkUrlInput.name}
          onChange={handleChange("name")}
          helperText={linkError ? "niepoprawny link" : null}
          error={linkError}
        />
      </div>
      <div>
        <TextField
          label="e-mail" 
          className={classes.inputStyle} 
          inputProps={{style: {fontWeight: '700'}}} 
          InputLabelProps={{style: {fontWeight: '900', color: '#404040'}}} 
          value={emailInput.name}
          onChange={handleChangeEmail("name")}
          helperText={emailError ? "niepoprawny adres email" : null}
          error={emailError}
        />
      </div>
      <div className="button">
        <button onClick={() => {sendItem(linkUrlInput.name)}} className={classes.wyslijButton}>
            WYŚLIJ
        </button>
      </div>
    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
      }
      span {
        background: #f3ca20;
        font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
      }
    `}</style>
    </div>
  )
}
