import React, { ReactChild } from 'react';

 const Notifier = (props: NotifierProps) => {
     console.log(props);
     return <div>Notifier</div>;
 };

 interface NotifierProps {
    title: string;
    user: { key: number };
    age: string;
    children: ReactChild;

 }

 export default Notifier;

