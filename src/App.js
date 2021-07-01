import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
// JWT TOKEN - TOAST MESSAGE - AND REACT COMPONENT

import MainRouter from "./MainRouter"; // REQUIRE IN OUR ROUTER 

import "./App.css";

export class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {//SAVES TOKEN IN LOCAL STORAGE
    let getJwtToken = window.localStorage.getItem("jwtToken");

    if (getJwtToken) {//TOKEN PARAMS
      const currentTime = Date.now() / 1000;

      let decodedJWTToken = jwtDecode(getJwtToken);

      if (decodedJWTToken.exp < currentTime) {
        //logout
        this.handleUserLogout();
      } else {
        //login
        this.handleUserLogin(decodedJWTToken);
      }

      // console.log("currentTime", currentTime);
      // June XXXX xxpm- 1624985322
      // ONE DAY FROM June XXXX xxpm - 1625071722
      // Current Time - 163500000
      // console.log("decodedJWTToken", decodedJWTToken);
    }
  }

  handleUserLogin = (user) => {//HANDLES USER LOGIN INPUT
    this.setState({
      user: {
        email: user.email,
      },
    });
  };

  handleUserLogout = () => {//HANDLES USER LOGOUT - AND REMOVES TOKEN FROM LOCAL STORAGE
    window.localStorage.removeItem("jwtToken");
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <>
        <ToastContainer position="top-center" />

        <MainRouter
          user={this.state.user}
          handleUserLogin={this.handleUserLogin}
          handleUserLogout={this.handleUserLogout}
        />
      </>
    );
  }
}

export default App;
