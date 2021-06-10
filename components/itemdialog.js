import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function createData(name, status, link) {
    return {name, status, link};
  }
  
  const rows = [
    createData('PS5', 'checking', 'https://allegro.pl/oferta/ps5-playstation-5-full-opcja-pelen-zestaw-mistrza-10500794459?bi_s=ads&bi_m=listing%3Adesktop%3Aqueryandcategory&bi_c=M2FjNDEzNGQtYzA1Mi00ZmViLWJmYTctNTQ3M2U1MDI3OWFjAA&bi_t=ape&referrer=proxy&emission_unit_id=469aea7e-3ead-488d-9ca9-9a5b5262d91a'),
    createData('Rower miejski', 'checking', 'https://allegro.pl/oferta/rower-miejski-goetze-mood-28-damski-shimano-kosz-9045871389?bi_s=ads&bi_m=listing%3Adesktop%3Aquery&bi_c=Y2JjZTA3MDctMDJhMC00NDE5LTg3YmItMWFiOTljNjI3MWMyAA&bi_t=ape&referrer=proxy&emission_unit_id=f470263e-a41f-4b33-90b2-715fbad10ad2'),
  ];
  

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ItemDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} disableRipple style={{
        fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
        fontSize: '16px',
        fontWeight: '500',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        marginLeft: '7px',
        paddingTop: '0',
        paddingBottom: '0',
        }}>
        Twoje przedmioty
      </Button>
      <Dialog onClose={handleClose} fullWidth maxWidth="md" aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Twoje przedmioty
        </DialogTitle>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAZWA</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">LINKI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.link}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            WYJDŹ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}