import React from 'react';

const Navigation = ({onRouteChange,isSignedIn}) => {
	return (
	<div className="pushable">
<div className="pusher">
  <div className="ui inverted vertical masthead center aligned segment">

    <div className="ui container">
      <div className="ui large secondary inverted pointing menu">
        
        <a onClick={()=>onRouteChange('home')} className=" item">Home</a>
        
        <div className="right item">
        <div className="item" >
      <div className="ui  inverted icon input" >
        <i className="search icon"></i>
        <input  type="text" placeholder="Search"/>
      </div>
       <div>
       <a  className="ui inverted button">Search</a>
       </div>
    </div>

     {isSignedIn===true
    ?<div className="item" style={{marginBottom:'-20px',marginLeft:'50px'}}>
         <a onClick={()=>onRouteChange('signedIn')}className="item">YOUR ACCOUNT</a>
         <i className="user icon"></i> 
     </div>
     : <div style={{marginLeft:'50px'}}>
     <a  onClick={()=>onRouteChange('login')} className="ui inverted button">Log in</a>
          <a onClick={()=>onRouteChange('signUp')} className="ui inverted button">Sign Up</a>
     </div>
    }
   
   

      
           
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>

);
}


export default Navigation;