import AppUser from "../../services/@types/app-user";

/**
 * Talk editor props interface
 */
export default interface TalkEditorProps {
    userList?: AppUser[]; // List of users
    emojiList?: any[]; // List of emoji
} 