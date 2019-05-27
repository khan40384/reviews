import React from 'react';
import Card from './Card'
const Home = ({homeCards,onView,onLike}) => {
    
	return(
		<div class="ui horizontal segments">
  <div class="ui segment">
    <center><Card cards={homeCards} onView={onView} onLike={onLike}/></center>
  </div>
  
  
</div>
		);
}

export default Home;