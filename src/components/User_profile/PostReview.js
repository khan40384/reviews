import React from 'react';
import { request } from 'graphql-request';

class PostReview extends React.Component{
  constructor(props){
    super(props);
     this.state={
      title: '',
      url: '',
      description: ''
    }
     this.onTitleChange = this.onTitleChange.bind(this);
      this.onUrlChange = this.onUrlChange.bind(this);
       this.onDescriptionChange = this.onDescriptionChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

   onTitleChange=(event)=>{
    this.setState({title: event.target.value});
   }
   
   onUrlChange=(event)=>{
    this.setState({url: event.target.value});
   }

   onDescriptionChange=(event)=>{
    this.setState({description: event.target.value});
   }

   handleSubmit(event){
    console.log("m in handlesubmit");
    
    event.preventDefault();
   console.log(this.state.title);
    const query=`mutation ($title: String!, $url: String!, $description: String!, $author: String!) {
            createPost( data: {
            status:PUBLISHED,
            title:$title,
            description:$description,
            author: $author,
            imageUrl: $url,
            tag: "pending",
            views: 0,
            likes: 0
             }) {
                 imageUrl
                 title
                 description
                 
                }}`   
    const {post,userkhan40384} = request('https://api-apeast.graphcms.com/v1/cjw53w6232fdu01ettnu7ogbp/master',query,
     {
      "title":this.state.title,
      "url":this.state.url,
      "description":this.state.description,
      "author": this.props.user.name
      }
      )
    .then(response=> {console.log(response.createUser40384)
      this.props.onRouteChange('signedIn');
    }).catch(error=>{
      console.log(error);
    })
  }


  render(){
	return(
		<div>
		
		<div style={{margin: '200px' , marginLeft: '400px' , marginRight: '400px'}}>
      <form onSubmit={this.handleSubmit} className="ui large form">
      <div className="ui stacked segment">
      <div className="required field">
          <div className="ui left icon input">
            <i className="pencil alternate icon"></i>
            <input  type="text" name="title" placeholder="title" onChange={this.onTitleChange}/>
          </div>
        </div>
        <div className="required field">
          <div className="ui left icon input">
            <i className="linkify icon"></i>
            <input  type="text" name="image" placeholder="provide image url" onChange={this.onUrlChange}/>
          </div>
        </div>
        <div className="required field">
            <textarea  name="message" placeholder="write something..." onChange={this.onDescriptionChange} ></textarea>
          </div>
        </div>
        <input type="submit" value="Submit"  className="ui fluid large teal submit button"/>    

      <div className="ui error message"></div>



    </form>
     </div>
    </div>

		);
}
}

export default PostReview;