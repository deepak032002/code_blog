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

export const getCookie = (cname) => {
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

export const acceptCookieConsent = () => {
  deleteCookie("user_cookie_consent");
  setCookie("user_cookie_consent", 1, 30);
  setCookieClass("hidden");
};
