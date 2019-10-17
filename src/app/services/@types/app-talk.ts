import AppMessage from "./app-message";

interface AppTalk {

    //Identification of the discussion
    id?: number;
    //date object with the begining and end of discussion
    date:{
        begin?: number;
        end?: number;
    }
    //List of message
    listMessage?: AppMessage[];
}

export default AppTalk;