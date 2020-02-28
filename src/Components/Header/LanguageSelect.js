import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import './HeaderMedia.scss'


const useStyles = makeStyles(theme => ({ 
  formControl: {
    margin: theme.spacing(1),
    minWidth: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  
  const [labelWidth] = React.useState(0);
  

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div className="NavSelect">
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          native
          onChange={handleChange("age")}
          labelWidth={labelWidth}
          inputProps={{
            name: "age"
          }}
        >
          <option>EN</option>
          <option>RU</option>
          <option>UA</option>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          native
          onChange={handleChange("age")}
          labelWidth={labelWidth}
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple"
          }}
        >
          <option>$ US</option>
          <option>& UA</option>
          <option>@ EU</option>
        </Select>
      </FormControl>
    </div>
  );
}