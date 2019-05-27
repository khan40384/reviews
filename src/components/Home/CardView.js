import React from 'react';


const Card = ({card}) => {
    return(<div style={{marginTop: '40px'}}>
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
  </div>
  </div>
  </div>
  );

}

export default Card;