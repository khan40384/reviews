import React from 'react';
import Card from './UserCard';
import { request } from 'graphql-request';


class UserDeshboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount=()=>{
    const auth=this.props.user.name;
    console.log({auth});
    const query=`query ($author: String!){
                     posts(
                    where:{
                     author : $author
                       }
                      ){
                        imageUrl
                      views
                      tag
                      likes
                       title
                      description
                       author
                      }
                       }`
    const {post,userkhan40384} = request('https://api-apeast.graphcms.com/v1/cjw53w6232fdu01ettnu7ogbp/master',query,{
      "author": this.props.user.name
    })
    .then(response=> {
    console.log({response});
    
     this.props.onSetUserCards(response.posts);
      
    }).catch(error=>{
      console.log(error.message);
    })
  }

  render(){
	return (
		<div>
    <a onClick={()=>this.props.onSignOut('home')} style={{marginTop:'20px'}} className="ui segment right floated large inverted button">Sign Out</a>
     <div class="ui icon message">
  <i class="sticky note outline"></i>
  <div class="content">
    <div class="header">
     All Reviews
    </div>
  </div>
</div>
<Card cards={this.props.userCards}/>
<span onClick={()=>this.props.onRouteChange('post')}>
<div  class="ui bottom attached button" tabindex="0" style={{margin:'40px'}}>
<i  class="upload icon">Post</i>
</div>
</span>

</div>

		);
}
}

export default UserDeshboard;