import React from 'react';
import { request } from 'graphql-request';

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name: '',
      email: '',
      password: ''
    }
     this.onNameChange = this.onNameChange.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
       this.onPasswordChange = this.onPasswordChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    }
    

   onNameChange=(event)=>{
    this.setState({name: event.target.value});
   }
   
   onEmailChange=(event)=>{
    this.setState({email: event.target.value});
   }

   onPasswordChange=(event)=>{
    this.setState({password: event.target.value});
   }

   handleSubmit(event){
    console.log("m in handlesubmit");
    
    event.preventDefault();
   console.log(this.state.name);
    const query=`mutation ($name: String!, $email: String!, $password: String!, $admin: String!) {
            createUser40384( data: {
            status:PUBLISHED
            name:$name,
            email:$email,
            password:$password,
            admin:$admin
             }) {
                 id
                 name
                 email
                 password
                 admin
                }}`   
    const {post,userkhan40384} = request('https://api-apeast.graphcms.com/v1/cjw53w6232fdu01ettnu7ogbp/master',query,
     {
      "name":this.state.name,
      "email":this.state.email,
      "password":this.state.password,
      "admin":"false"}
      )
    .then(response=> {console.log(response.createUser40384);
      this.props.onLoadUser(response.createUser40384);
      this.props.onRouteChange('signedIn');
    }).catch(error=>{
      console.log(error);
    })
  }

  render(){
  return(
<div className="ui middle aligned center aligned grid" style={{margin: '200px' , marginLeft: '400px' , marginRight: '400px'}} >
  <div className="column">
    <h1 className="ui teal image header">
      
      <div className="content">
         Sign Up
      </div>
    </h1>
    <form name="myForm" onSubmit={this.handleSubmit} className="ui large form">
      <div className="ui stacked segment">
      <div className="field">
          <div className="ui left icon input">
            <i className="user circle icon"></i>
            <input id="name" type="text" name="name" placeholder="name" onChange={this.onNameChange} />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address" onChange={this.onEmailChange}/>
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input  type="password" name="password" placeholder="Password" onChange={this.onPasswordChange}/>
          </div>
        </div>
        <input type="submit" value="Sign Up"  className="ui fluid large teal submit button" />
      </div>

      <div className="ui error message"></div>

    </form>

   
  </div>
</div>
    );
}
}

export default SignUp;