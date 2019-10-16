/**
 * Defines the props expected by the RoomCreator component.
 * @see RoomCreator
 */
export default interface RoomCreatorProps {
    /**
     * Function called when the room data is validated
     * and the room can be created.
     */
    onCreationRequested(roomName: string): Function;
}
