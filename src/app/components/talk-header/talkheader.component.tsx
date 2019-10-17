import React from 'react';
import UserProps from '../@prop-types/user-props';
import AppUser from '../../services/@types/app-user';
import { talkHeaderDefaultProps } from './talkheader.defaultProps';

interface IState {
    user: AppUser;
}

class TalkHeader extends React.Component < UserProps, IState > {

    static defaultProps = talkHeaderDefaultProps;

    constructor(props: any) {
        super(props);
    }

    //LifeCycle
    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (<div>TalkHeader</div>)
    }
}

export default TalkHeader;