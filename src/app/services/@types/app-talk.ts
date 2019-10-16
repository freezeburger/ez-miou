interface AppTalk {

    // User sending message
    currentUser: any;
    //  Message object
    message: {
        //message sending date
        date: Date, 
        //content of the message
        content: string
    };
    //Room where the message is sent
    room: any;
}

export default AppTalk;