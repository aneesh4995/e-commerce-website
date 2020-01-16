import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components /header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out-page/signing.component';

import HatsPage from './pages/hatspage/hatspage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount() {

    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {

          setCurrentUser({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setCurrentUser(userAuth)
    });
  }
  componentWillUnmount() { 
    this.unsubscribeFromAuth();
  }
  render() {
    return ( 
      <div>
        <Header currentUser ></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component ={ShopPage}/>
          <Route path = '/signin' component = {SignInAndSignOutPage}/>
          <Route path='/shop/hats' component={HatsPage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ( {
  setCurrentUser:user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
