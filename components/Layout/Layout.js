import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Provider as AlertProvider, transitions, positions } from "react-alert";
import CookieConsent from "../CookieConsent/CookieConsent";
import MyAlert from "../Alert";
import { acceptCookieConsent, getCookie } from "../utils/cookie";

const Layout = ({ children }) => {
  const [cookieClass, setCookieClass] = useState("");

  const handleClose = () => {
    setCookieClass("hidden");
  };

  useEffect(() => {
    setTimeout(() => {
      let cookie_consent = getCookie("user_cookie_consent");
      if (cookie_consent.success) {
        setCookieClass("hidden");
      } else {
        setCookieClass("flex cookie_consent_wrapper_popup");
      }
    }, 4000);
  }, []);

  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "30px",
    transition: transitions.SCALE,
  };

  return (
    <>
      <Provider store={store}>
        <AlertProvider template={MyAlert} {...options}>
          <Header />
          {children}
          <CookieConsent
            className={cookieClass}
            acceptCookieConsent={acceptCookieConsent}
            handleClose={handleClose}
          />
        </AlertProvider>
      </Provider>
    </>
  );
};

export default Layout;
