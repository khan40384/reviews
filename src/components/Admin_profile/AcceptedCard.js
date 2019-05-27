import React from 'react';

const AcceptedCard = ({homeCards}) => {
console.log(homeCards!==undefined);
if(homeCards!==undefined||homeCards.length!==0)
{
  console.log({homeCards});
const result =  Object.values(homeCards);


  const card = result.map((card)=>{
    if(card.tag==='accepted')
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
      17 likes
    </span>
    <span class="left floated">
    <i class="eye icon"></i>
    3 view
    </span>
    <span class="right floated">
    <i class="user icon"></i>
    Salman
    </span>
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

export default AcceptedCard;