import React from 'react';
import RoomSearchProps from '../@prop-types/room-search.props';
import Button from '../button/button.component';
import { FaSearch } from 'react-icons/fa';

/**
 * The state contains the term being searched
 */
interface RoomSearchState {
    searchTerm: string;
}

/**
 * Component that allows the user to search for a room and trigger some action.
 */
class RoomSearch extends React.Component<RoomSearchProps, RoomSearchState> {
    
    state = {
        searchTerm: ''
    };

    handleChange = (e: any) => {
        this.setState({ searchTerm: e.target.value });
    };

    /**
     * Called whenever the search button is clicked and call the onSearchCompleted
     * method received in the props
     */
    launchSearch = () => {
        this.props.onSearchCompleted(this.state.searchTerm);
    };

    render() {
        const searchTerm = this.state.searchTerm;
        return (
            <fieldset>
                <input
                    value={searchTerm}
                    onChange={this.handleChange} />

                <Button action={this.launchSearch} icon={<FaSearch />}>
                    <span>Search</span>
                </Button>
            </fieldset>
        );
    }
}

export default RoomSearch;
