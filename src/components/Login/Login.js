import React from 'react';
import { request } from 'graphql-request';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
      this.onEmailChange = this.onEmailChange.bind(this);
       this.onPasswordChange = this.onPasswordChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
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
   
    const query=`query ($email: String!, $password: String!) {
                   user40384(where: {
                   email: $email,
                   password: $password
                   }) {
                      id
                      name
                      email
                      admin
                     }
                    }`   
    const {post,userkhan40384} = request('https://api-apeast.graphcms.com/v1/cjw53w6232fdu01ettnu7ogbp/master',query,
     {
      "email":this.state.email,
      "password":this.state.password
      }
      )
    .then(response=> {console.log(response.user40384)
      
      this.props.onAdminSet(response.user40384);
      this.props.onLoadUser(response.user40384);
      const user=this.props.user;
      console.log({user});
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
        Log-in to your account
      </div>
    </h1>
    <form onSubmit={this.handleSubmit} className="ui large form">
      <div className="ui stacked segment">
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input  type="text" name="email" placeholder="E-mail address"  onChange={this.onEmailChange}/>
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input  type="password" name="password" placeholder="Password" onChange={this.onPasswordChange}/>
          </div>
        </div>
        <input type="submit" value="LOG IN" className="ui fluid large teal submit button"/>
      </div>

      <div className="ui error message"></div>

    </form>

    <div className="ui message pointer" style={{cursor: 'pointer'}}>
      New to us? <a onClick={()=>this.props.onRouteChange('signUp')} >Sign Up</a>
    </div>
  </div>
</div>

		);
}
}

export default Login;