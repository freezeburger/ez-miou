/**
 * Notification Service
 * 
 */
interface AppNotification {
    /** internal identifier, unique */
    id:number;

    /** in msec */
    lifetime:number;  

    /** Creation date in timestamp */
    creationTimeStamp: number; 

    /** any string... */
    message: string;
}

export default Notification;