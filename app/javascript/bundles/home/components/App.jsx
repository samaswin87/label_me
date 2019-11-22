import PropTypes from 'prop-types';
import React from 'react';
import {
  BrowserRouter as Router,
  Link, HashRouter, Switch, Route
} from "react-router-dom";
import Routes from '../../../Routes';
import '../../../../assets/scss/App.scss'
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('../../containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('../../views/Pages/Login'));
const Register = React.lazy(() => import('../../views/Pages/Register'));
const Page404 = React.lazy(() => import('../../views/Pages/Page404'));
const Page500 = React.lazy(() => import('../../views/Pages/Page500'));

export default class App extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
            <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}
