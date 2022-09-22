import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CookieConsent = (props) => {
  return (
    <div
      className={`cookie_consent_wrapper absolute w-50 shadow-xl border p-3 items-center justify-center flex-col left-2/4 translate-x-[-50%] ${
        props.className ? props.className : "hidden bottom-10"
      }`}
    >
      <div className="w-full">
        <button
          onClick={props.handleClose}
          className="rounded-full float-right border h-6 w-6 text-white flex items-center justify-center hover:bg-gray-500 bg-gray-400"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <h1 className="text-lg font-bold ">Accept Cookie</h1>
      <p className="w-[90%] text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, nulla.
      </p>
      <button
        onClick={props.acceptCookieConsent}
        className="text-white bg-amber-800 hover:bg-amber-900 my-2 px-4 py-1"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
