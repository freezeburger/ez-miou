import React from 'react';
import Auth from '../../features/auth/auth.feature';

class Home extends React.Component {

    //LifeCycle
    componentDidMount() { }

    componentWillUnmount() { }

    render() {
        return (
            <React.Fragment>
                <h1>Home</h1>
                <Auth />
            </React.Fragment>
        );
    }
}

export default Home;
