import React from 'react';

interface IState {
    logged: boolean;
}

class AuthForm extends React.Component<IState> {
    state: IState = {
        logged: false
    };
}