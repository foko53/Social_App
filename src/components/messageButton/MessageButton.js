import React from "react";
import MessageButton from "../messageButton";

class MessageButton extends React.Component {
    render() {
        return (
            <div className="MessageButton">
                <button>&#9993 Message</button>
            </div>
        );
    }
}

export default MessageButton