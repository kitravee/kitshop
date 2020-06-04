import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

//convert to class component because we whant to contain state
class App extends React.Component {
  constructor() {
    super();
    //user that loging in
    this.state = {
      currentUser: null,
    };
  }

  //create method equal to null
  unsubscribeFromAuth = null;

  componentDidMount() {
    // when Auth state Change if refrash it will also return same user until you sign out
    // ⭐ A Observable can have three different states as well : Subscribed, Error, Completed.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //createUserProfileDocument return documentReference
        const UserRef = await createUserProfileDocument(userAuth);

        UserRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        // if there is not thing in userAuth
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    // #86 to unsubscribe/close auth

    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
