import { Button } from "@material-ui/core";
import React from "react";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answercall, call, callAccepted } = React.useContext(SocketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{call.name} is calling..!!</h1>
          <Button variant="contained" color="primary" onClick={answercall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
