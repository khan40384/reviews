import React from 'react';


const Card = ({cards,onView,onLike}) => {
console.log(cards!==undefined);
if(cards!==undefined)
{
  console.log({cards});
const result =  Object.values(cards);


  const card = result.map((card)=>{
    return <div >
    <div class="ui centered cards">
  <div class="card">
    <div onClick={()=>onView(card)}  class="image">
      <img src={card.imageUrl}/>

    </div>
    <div onClick={()=>onView(card)}  class="content">
      <div class="header">{card.title}</div>
     
      <div class="description">
        {card.description}
      </div>
    </div>
     <div class="content">
    <span  class="center floated">
      <i onClick={()=>onLike(card)} class="heart outline like icon"></i>
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

export default Card;