import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
//import imga from "../12.jpg"
import "../index.css"
import {Link} from "react-router"
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
    import Drawer from 'material-ui/Drawer';
const styles = {
  customWidth: {
    width: 150,
  },
};


class Home extends Component {
    constructor(props){
        super();
        this.state = {
            open:false
        }

    }
    handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <div>
     <AppBar
     onTouchTap={this.handleToggle}
    title='BLOOD BANK'
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
        <Link to="/signuppCon" ><RaisedButton label="Login" primary={true} style={{margin:"12px"}} /> </Link>
         <Link to="/loginCon" ><RaisedButton label="Sign Up" primary={true}style={{margin:"12px"}}  /></Link>
     </AppBar>
     
     
      <CardMedia
      overlay={<CardTitle title="Blood" subtitle="bank" />}
    >
      <img src="http://doctorchamber24.com/wp-content/uploads/2015/07/blood-bank-image.png" />
    </CardMedia>
     
     <Drawer width={300} openSecondary={false} open={this.state.open} >
          <AppBar title="Dashboard" />

    <img src="http://www.shifa.com.pk/images/Blood-Donation1.jpg" height='200' width='260' alt="invent"/>
    <br/>
    <br/> <br/>
        

        <Link to='/dashboard/createStore'> <RaisedButton
        fullWidth
          style={styles}
          onTouchTap={this.handleTouchTap}
       
          label="View Donater"
          primary={false}
        /></ Link><br /><br /><br />

        </Drawer>
 
      </div>
    );
  }
}

export default Home;
