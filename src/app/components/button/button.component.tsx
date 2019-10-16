import React from 'react';

const Button = (props: any) => {
    console.log(props);

    /**
     * Define name of the button
     */
    let nameShown = props.name;
    if (!nameShown) {
        nameShown = "Default cuz you can't read the spec you faggot";
    }
    return <div><button className="btn btn-dark">{nameShown}</button></div>
}

export default Button;


