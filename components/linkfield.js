import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

import Input from "@material-ui/core/Input";

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
    }
  },
});

export default function Linkfield() {
  const classes = useStyles();

  return <TextField id="standard-basic" label="your link goes here" className={classes.inputStyle} color="secondary"/>
}
