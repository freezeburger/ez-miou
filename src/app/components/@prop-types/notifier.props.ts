import { string } from "prop-types";

interface notifierProps {
  messages: {
    room: {
      id: string,
      name: string;
    },
    message: {
      userName: string,
      message : string
    }
  },
  cancel():void, // Function called when the user reject the message
  accept(roomId : string): void // Function called when the user wants to see the message 
}

export default notifierProps;