import React from 'react';
import AcceptedCard from './AcceptedCard';
import PendingCard from './PendingCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const AdminDeshboard = ({onRouteChange,onSignOut,homeCards,onChangeTag}) => {
	return (
         <Tabs>
    <TabList style={{marginTop:'20px'}}>
      <Tab style={{fontSize:'large',paddingLeft:'300px',paddingRight:'300px',paddingTop:'20px',paddingBottom:'20px'}}>Accepted Reviews</Tab>
      <Tab style={{fontSize:'large',paddingLeft:'300px',paddingRight:'300px',paddingTop:'20px',paddingBottom:'20px'}}>Pending Reviews</Tab>
      
    </TabList>


    <TabPanel style={{minHeight:'800px', margin:'30px'}}>

       <a onClick={()=>onSignOut('home')} style={{marginTop:'20px'}} className="ui segment right floated large inverted button">Sign Out</a>
     <AcceptedCard  homeCards={homeCards}/>
   
     </TabPanel>
    
     <TabPanel style={{minHeight:'800px', margin: '30px'}}>
     <a onClick={()=>onRouteChange('home')} style={{marginTop:'20px'}} className="ui segment right floated large inverted button">Sign Out</a>
     <PendingCard onChangeTag={onChangeTag} homeCards={homeCards}/>
     </TabPanel>
     </Tabs>


		);
}

export default AdminDeshboard;