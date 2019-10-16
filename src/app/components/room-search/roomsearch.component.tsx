import React from 'react';
import RoomSearchProps from '../@prop-types/room-search.props';
import Button from '../button/button.component';
import { FaSearch } from 'react-icons/fa';

interface RoomSearchState {
    searchTerm: string;
}

class RoomSearch extends React.Component<RoomSearchProps, RoomSearchState> {
    
    state = { searchTerm: '' };

    handleChange = (e: any) => {
        this.setState({ searchTerm: e.target.value });
    };

    launchSearch = () => {
        this.props.onSearchCompleted(this.state.searchTerm);
    };

    render() {
        return (
            <fieldset>
                <input
                    value={this.state.searchTerm}
                    onChange={this.handleChange} />

                <Button action={this.launchSearch} icon={<FaSearch />}>
                    <span>Search</span>
                </Button>

            </fieldset>
        );
    }
}

export default RoomSearch;
