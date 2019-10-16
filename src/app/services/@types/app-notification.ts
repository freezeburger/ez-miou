/**
 * Notification Service
 */
interface AppNotification {
    id:number;
    lifetime:number; // in msec 
    creationTimeStamp: number; // Creation date in timestamp
    message: string;
}

export default Notification;