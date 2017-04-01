import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store/store'
import { Provider } from 'react-redux';
import SignuppContainer from './container/signuppCon'
import LogContainer from './container/loginCon'
import SignupContainer from './container/signupCon'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {
  browserHistory, Router, Route, IndexRoute, IndexRedirect,Link, IndexLink} from 'react-router';

export class RouterComponent extends Component{
  render(){
    return(
      <div>
      <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route path="/" component={SignupContainer}></Route>
                <Route path="/signupCon" component={SignupContainer}></Route> 
                <Route path="/signuppCon" component={SignuppContainer}></Route>
                <Route path="/loginCon" component={LogContainer}></Route>
                </Router>
                </Provider>
         </MuiThemeProvider>,
        </div>
    )
  }
}



ReactDOM.render(

  < RouterComponent/>,
 
  document.getElementById('root')
);
