import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Signup from './container/signupCon'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {
  browserHistory, Router, Route, IndexRoute, IndexRedirect,Link, IndexLink} from 'react-router';

class RouterComponent extends Component{
  render(){
    return(
      <div>
      <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route path="/" component={Signup}></Route>
                <IndexRedirect to="/signupCon" />
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
