import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Provider } from "react-redux";
import store from "../../redux/store";
import CookieConsent from "../CookieConsent/CookieConsent";

const Layout = ({ children }) => {
  const [cookieClass, setCookieClass] = useState("");

  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  const deleteCookie = (cname) => {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
  };

  const getCookie = (cname) => {
    let name = cname;
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    
    for (let i of ca) {
      if (i.split("=")[0] === name) {
        return { cookie: i.split("+"), success: true };
      }
    }

    return { success: false };
  };

  const acceptCookieConsent = () => {
    deleteCookie("user_cookie_consent");
    setCookie("user_cookie_consent", 1, 30);
    setCookieClass("hidden");
  };

  const handleClose = () => {
    setCookieClass("hidden");
  };
  
  useEffect(() => {
    setTimeout(() => {
      let cookie_consent = getCookie('user_cookie_consent');
      if (cookie_consent.success) {
        setCookieClass("hidden");
      } else {
        setCookieClass("flex cookie_consent_wrapper_popup");
      }
    }, 4000);
  }, []);

  return (
    <>
      <Provider store={store}>
        <Header />
        {children}
        <CookieConsent
          className={cookieClass}
          acceptCookieConsent={acceptCookieConsent}
          handleClose={handleClose}
        />
      </Provider>
    </>
  );
};

export default Layout;
