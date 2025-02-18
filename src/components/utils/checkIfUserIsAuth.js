import jwtDecode from "jwt-decode";

const checkIfUserIsAuth = () => {//CHECKS IF TOKEN IS NON-EXISTENT - NOT EXPIRED - ALLOWS USER TO REMAIN LOGGED IN OR NOT
  //check if token exists, if it doesn't exists return false
  //if it does exists, check if token valid (meaning not expired)
  //if expired return false
  //else return true

  let getJwtToken = window.localStorage.getItem("jwtToken");

  if (getJwtToken) {
    const currentTime = Date.now() / 1000;
    let decodedToken = jwtDecode(getJwtToken);

    if (decodedToken.exp < currentTime) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

export default checkIfUserIsAuth;
