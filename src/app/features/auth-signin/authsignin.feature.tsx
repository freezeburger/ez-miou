import React from 'react';

 class AuthSignin extends React.Component{
     
    constructor(props:any){
         super(props);
     }

     //LifeCycle
     componentDidMount(){}

     componentWillUnmount(){}

     render(){
         return <form>
        <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
        <label >Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
    </div>
    <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
        <label className="form-check-label">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
     }
 }
 export default AuthSignin;


