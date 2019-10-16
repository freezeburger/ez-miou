/**
 * Defines the props expected by the RoomSearch component.
 * @see RoomSearch
 */
export default interface RoomSearchProps {
    /**
     * List of rooms that currently exist. Used for completion
     */
    rooms: Array<string>;

    /**
     * This function will be called when the user submits. This
     * function may process the user input (open the room, store
     * his input in some history...)
     */
    onSearchCompleted(roomName: string): Function;
}
