import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './styles/reset.css';
import './styles/main.sass';
import { Docs } from './components/Docs/';
import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import HomeContainer from './components/Home/HomeContainer';
import LeasingContainer from './components/Leasing/LeasingContainer';

const App = () => {
  return (
    <div className="appWrapper">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/leasing" component={LeasingContainer} />
          <Route exact path="/docs" component={Docs} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(App);
