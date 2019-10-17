import React from 'react';
import RoomCreatorProps from '../@prop-types/room-creator.props';
import Button from '../button/button.component';
import { IoIosAdd } from "react-icons/io";
import defaultProps from './room-creator.default-props';

/**
 * The state contains the data about the room being created
 */
interface RoomCreatorState {
    name: string;
}

/**
 * Component that allows the user to search for a room and trigger some action.
 */
class RoomCreator extends React.Component<RoomCreatorProps, RoomCreatorState> {
    static defaultProps = defaultProps;
    
    state = {
        name: ''
    };

    handleChange = (e: any) => {
        this.setState({ name: e.target.value });
    };

    /**
     * Called whenever the create button is clicked and call the onSearchCompleted
     * method received in the props
     */
    launchSearch = () => {
        this.props.onCreationRequested(this.state.name);
    };

    render() {
        const roomName = this.state.name;
        return (
            <fieldset>
                <input
                    className="form-control"
                    value={roomName}
                    onChange={this.handleChange} />

                <Button action={this.launchSearch} icon={<IoIosAdd />}>
                    <span>Create</span>
                </Button>
            </fieldset>
        );
    }
}

export default RoomCreator;
