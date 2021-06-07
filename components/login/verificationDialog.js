import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h5" style={{ fontWeight: '900' }}>{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function VerificationDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [temp, setTemp] = React.useState(false);
  const userId = props.userId;
  const verificationUrl = ('https://verify-with.blockpass.org/?clientId=banach_group&serviceName=Banach+Group&env=prod&refId='+userId)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
    e.preventDefault()
    
  };

  if (userId && !temp) {
    setOpen(true)
    setTemp(true)
  };

  return (
    <div>
      {/* <Button color="secondary" onClick={handleClickOpen} style={{ color: '#ffffff', fontSize: '16px', }}>
        <a>Zweryfikuj się</a>
      </Button> */}
      <div> {}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Wymagana weryfikacja klienta
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Aby kupować i sprzedawac przez KupBSV.pl zweryfikuj swoje konto w bezpieczny sposób
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose} color="primary">
            Przejdź do weryfikacji Blockpass
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 350px) {
          a {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}