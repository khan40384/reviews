
import  React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AdminDeshboard from './components/Admin_profile/AdminDeshboard';
import UserDeshboard from './components/User_profile/UserDeshboard';
import PostReview from './components/User_profile/PostReview';
import { request } from 'graphql-request';
import CardView from './components/Home/CardView';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      route: 'home',
      isSignedIn: false,
      admin: '',
      homeCards:'',
      userCards:'',
      user:{
        id:'',
        name:'',
        email:'',
        admin:''
      },
      card:{
        likes:'',
        title:'',
        description:'',
        author:'',
        imageUrl:'',
        tag:'',
        views:''
      }
    }
  }

  onSetCard=(card)=>{
    this.setState({card:{
      likes: card.likes,
      title: card.title,
      description: card.description,
      author: card.author,
      imageUrl: card.imageUrl,
      tag: card.tag,
      views: card.views
    }})
  }

  onView=(card)=>{
    this.onSetCard(card);
     const query=`mutation ($title: String!, $views: Int!) {
                  updatePost(
                     data: {views: $views},
                      where: {title: $title}) {
                        imageUrl
                        likes
                        description
                       title
                       views
                        tag
                        author
                          }
                         }`
    const {post,userkhan40384} = request('https://api-apeast.graphcms.com/v1/cjw53w6232fdu01ettnu7ogbp/master',query,{
      "title": card.title,
      "views": card.views+1
    }).then(response=>{
      console.log(response);

       const query=`query {
                   posts{
                    likes
                    views
                    author
                    tag
                    imageUrl
                    title
                    description
                    }
                   }`
    const {post,userkhan40384} = request('https://api-apeast.graphcms.com/v1/cjw53w6232fdu01ettnu7ogbp/master',query)
    .then(response=> {
      console.log(response.posts);
     this.onSetHomeCards(response.posts);
      console.log(this.state.homeCards)
    }).catch(error=>{
      console.log(error);
    });
      console.log(this.state.homeCards);
    this.onRouteChange('cardView');
    }).catch(error=>{
      console.log(error);
    });

  }

   onLike=(card)=>{
    this.onSetCard(card);
     const query=`mutation ($title: String!, $likes: Int!) {
                  updatePost(
                     data: {likes: $likes},
                      where: {title: $title}) {
                        likes
                        imageUrl
                        description
                       title
                       views
                        tag
                        author
                          }
                         }`
    const {post,userkhan40384} = request('https://api-apeast.graphcms.com/v1/cjw53w6232fdu01ettnu7ogbp/master',query,{
      "title": card.title,
      "likes": card.likes+1
    }).then(response=>{
      console.log(response.updatePost);

       const query=`query {
                   posts{
                    likes
                    views
                    author
                    tag
                    imageUrl
                    title
                    description
                    }
                   }`
    const {post,userkhan40384} = request('https://api-apeast.graphcms.com/v1/cjw53w6232fdu01ettnu7ogbp/master',query)
    .then(response=> {
      console.log(response.posts);
     this.onSetHomeCards(response.posts);
      console.log(this.state.homeCards)
    }).catch(error=>{
      console.log(error);
    });
    
      console.log(this.state.homeCards);
    this.onRouteChange('cardView');
    }).catch(error=>{
      console.log(error);
    });

  }


  onChangeTag=(title)=>{
    console.log(title);
     const query=`mutation ($title: String!) {
                  updatePost(
                     data: {tag:"accepted"},
                      where: {title: $title}) {
                       title
                        tag
                        author
                          }
                         }`
    const {post,userkhan40384} = request('https://api-apeast.graphcms.com/v1/cjw53w6232fdu01ettnu7ogbp/master',query,{
      "title": title
    })
    .then(response=> {
      console.log(response);
       const query=`query {
                   posts{
                    author
                    likes
                    views
                    tag
                    imageUrl
                    title
                    description
                    }
                   }`
    const {post,userkhan40384} = request('https://api-apeast.graphcms.com/v1/cjw53w6232fdu01ettnu7ogbp/master',query)
    .then(response=> {

     this.onSetHomeCards(response.posts);
      console.log(this.state.homeCards)
    }).catch(error=>{
      console.log(error);
    });

      
    }).catch(error=>{
      console.log(error)
    })
  }

  onLoadUser=(user)=>{
    this.setState({user:{
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin
    }});
    const cus=this.state.user;
   console.log({cus});
  }

  onSetHomeCards=(cards)=>{
    console.log(cards);
    this.setState({homeCards:cards});
  }

    onSetUserCards=(cards)=>{
      
    this.setState({userCards:cards});
  }

  onRouteChange=(route)=>{
    if(route==='signedIn')
      this.setState({isSignedIn: true});
    this.setState({route: route});
  }

  onSignOut=(route)=>{
    this.setState({isSignedIn: false});
    this.setState({route: route});
  }

  onAdminSet=(user)=>{
    this.setState({admin: user.admin});
  }

   componentDidMount=()=>{
   
     const query=`query {
                   posts{
                    likes
                    views
                    author
                    tag
                    imageUrl
                    title
                    description
                    }
                   }`
    const {post,userkhan40384} = request('https://api-apeast.graphcms.com/v1/cjw53w6232fdu01ettnu7ogbp/master',query)
    .then(response=> {
      console.log(response.posts);
     this.onSetHomeCards(response.posts);
      console.log(this.state.homeCards)
    }).catch(error=>{
      console.log(error);
    })
  }

  render (){
    return(
    <div className="App">
     <Navigation onRouteChange={this.onRouteChange}
                isSignedIn={this.state.isSignedIn}/>
    {this.state.route==='login'
     ?<Login  onRouteChange={this.onRouteChange}
              onAdminSet={this.onAdminSet}
               onLoadUser={this.onLoadUser}
               user={this.state.user}/>
     :(this.state.route==='signUp'
       ?<SignUp  onRouteChange={this.onRouteChange}
                 onLoadUser={this.onLoadUser}/>
       :(this.state.route==='signedIn'
        ?(this.state.admin==='true'
          ?<AdminDeshboard  onRouteChange={this.onRouteChange}
                            onSignOut={this.onSignOut}
                            homeCards={this.state.homeCards}
                            onChangeTag={this.onChangeTag}/>
          
            :<UserDeshboard  onRouteChange={this.onRouteChange}
                             onSignOut={this.onSignOut}
                             onSetUserCards={this.onSetUserCards}
                             userCards={this.state.userCards}
                             user={this.state.user}/>)
        :(this.state.route==='post'
            ?<PostReview  onRouteChange={this.onRouteChange}
                          user={this.state.user}/>
            :(this.state.route==='cardView'
              ?<CardView card={this.state.card}/>
              :<Home homeCards={this.state.homeCards}
                   onView={this.onView}
                   onLike={this.onLike}/>))))}
    </div>
    );
 }
}

export default App;
