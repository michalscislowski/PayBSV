import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  underline: {
    "&:before": {
      borderBottom: "2px solid gray"
    },
    "&:after": {
      borderBottom: "2px solid black"
    }
  },
  inputStyle: {
    width: '700px', 
    fontWeight: '900', 
    '& .Mui-focused' : {
      color: "#020202"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#020202',
    },
    ['@media (max-width:499px)']: {
      width: 'calc(100% - 20px)',
  },
  },
});

export default function Linkfield() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
 }

  const error = isUrl(values.name) !== true & values.name.length !== 0;

  return <TextField
    id="standard-basic" 
    label="tutaj dodaj link" 
    className={classes.inputStyle} 
    inputProps={{style: {fontWeight: '700'}}} 
    InputLabelProps={{style: {fontWeight: '900'}}} 
    color="secondary"
    value={values.name}
    onChange={handleChange("name")}
    helperText={error ? "Proszę wstawić poprawny link" : null}
    error={error}
    />
}
