import React from 'react';


const Card = (props) => {
	return (

   <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow'>
	  <img alt = 'Robots' src ={`https://robohash.org/${props.id}?200x200`} />
		<div>
		  <h2>{props.name}</h2>
		  <h3>{props.username}</h3>
		  <h4>{props.email}</h4>
		</div>
   </div>

	);
}

export default Card;