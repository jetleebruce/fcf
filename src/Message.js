import React from "react";

function Message(props) {
  return (
    <div>
      <h3>
        {props.username}:{props.text}
      </h3>
    </div>
  );
}

export default Message;
