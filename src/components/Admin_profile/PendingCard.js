import React from 'react';


const PendingCard = ({homeCards,onChangeTag,onRejected}) => {
console.log(homeCards!==undefined);
if(homeCards!==undefined||homeCards.length!==0)
{
  console.log({homeCards});
const result =  Object.values(homeCards);


  const card = result.map((card)=>{
    if(card.tag==='pending')
    return <div>
    <div class="ui centered cards">
  <div class="card">
    <div class="image">
      <img src={card.imageUrl}/>
      
    </div>
    <div class="content">
      <div class="header">{card.title}</div>
     
      <div class="description">
        {card.description}
      </div>
    </div>
     <div class="content">
    <span class="center floated">
      <i class="heart outline like icon"></i>
      {card.likes}
    </span>
    <span class="left floated">
    <i class="eye icon"></i>
    {card.views}
    </span>
    <span class="right floated">
    <i class="user icon"></i>
    {card.author}
    </span>
  </div>
   <div class="extra content">
      <div class="ui two buttons">
        <div onClick={()=>onChangeTag(card.title)} class="ui basic green button">Approve</div>
        <div onClick={()=>onRejected(card.title)} class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  </div>
  </div>
  });

  return(
    <div>{card}</div>

    );
  }
  else{
    return<center><h1>no post available</h1></center>
  }
}

export default PendingCard;