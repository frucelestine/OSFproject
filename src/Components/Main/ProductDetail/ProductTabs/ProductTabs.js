import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import './ProductTabs.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#262a33",
    color: '#ffffff',
    
  }
  
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} id="tabs">
      <AppBar position="static" className="tabBar">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab className="tabHead" label="Description" {...a11yProps(0)} />
          <Tab
            className="tabHead"
            label={"Additional Information"}
            {...a11yProps(1)}
          />
          <Tab className="tabHead" label="Reviews(3)" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div
          style={{
            display: "flex",
            padding: 50,
            justifyContent: "space-between",
            maxHeight: 268,
            overflow: "hidden"
          }}
        >
          <p style={{ maxWidth: 450 }}>
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes,
          </p>
          <p style={{ maxWidth: 450 }}>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          style={{
            display: "flex",
            padding: 50,
            justifyContent: "space-between",
            maxHeight: 268,
            overflow: "hidden"
          }}
        >
          <p style={{ maxWidth: 450 }}>
            This is about more information eget dolor. Aenean massa. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
            natoque penatibus et magnis dis parturient montes,
          </p>
          <p style={{ maxWidth: 450 }}>
            This is about more information et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className= 'tabText'
          style={{
            display: "flex",
            padding: 50,
            justifyContent: "space-between",
            maxHeight: 268,
            overflow: "hidden",
            borderRadius: "0 0 20 20"
          }}
        >
          <p style={{ maxWidth: 450 }}>
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient mont THIS IS FOR ALL AVAILABLE
            REVIEWS,
          </p>
          <p style={{ maxWidth: 450 }}>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet HIS IS FOR ALL AVAILABLE
            REVIEWS
          </p>
        </div>
      </TabPanel>
    </div>
  );
}
