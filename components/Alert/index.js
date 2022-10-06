import React from "react";
import { Alert } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const MyAlert = ({ style, options, message, close }) => {
  return (
    <div style={style}>
      {options.type === "success" && (
        <Alert
          className="flex justify-between px1 items-center"
          color="green"
          icon={<FontAwesomeIcon icon={faCircleCheck}/>}
          dismissible={{ onClose: () => close() }}
        >
          {message}
        </Alert>
      )}
      {options.type === "info" && (
        <Alert
          className="flex justify-between px1 items-center"
          color="yellow"
          icon={<FontAwesomeIcon icon={faCircleInfo}/>}
          dismissible={{ onClose: () => close() }}
        >
          {message}
        </Alert>
      )}
      {options.type === "error" && (
        <Alert
          className="flex justify-between px1 items-center"
          color="red"
          icon={<FontAwesomeIcon icon={faCircleExclamation}/>}
          dismissible={{ onClose: () => close() }}
        >
          {message}
        </Alert>
      )}
    </div>
  );
};

export default MyAlert;
