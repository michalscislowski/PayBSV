import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
  disabled: {},
  focused: {},
  error: {}
});

export default function InputDemo() {
  const classes = useStyles();

  return <Input classes={classes} placeholder="Enter link here" style={{width: '700px', fontWeight: '900', color: '#000'}}/>;
}
