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
import Authuser from '../userAuth/auth';
import { makeStyles } from '@material-ui/core';



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    background: 'rgba(252, 186, 3, 0.8)'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  zalogujSie: { 
    ['@media (max-width:350px)']: {
      fontSize: '14px',
    },
    fontSize: '1.5rem', 
    fontWeight: '900',
  }
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
    background: 'rgba(252, 186, 3, 0.8)'
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    background: 'rgba(252, 186, 3, 0.8)'
  },
}))(MuiDialogActions);

export default function LoginDialog() {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} style={{
          ['@media (maxWidth:350px)']: {
            fontSize: '14px',
          },
          fontSize: '1.5rem', 
          fontWeight: '900',
        }}>
        Zaloguj Się
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Zaloguj się
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Zaloguj się przez MoneyButton, aby kontynuować.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose, Authuser} color="primary">
            Zaloguj się z Money Button
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}