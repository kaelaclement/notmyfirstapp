import React from 'react';

const Pet = props => {
	return (
		// age, species, fave food, legs, walks...
		// pass props through in App
		<div>
			<ul>
				<li>Name: {props.name}</li>
				<li>Age: {props.age}</li>
				<li>Species: {props.species}</li>
				<li>Favourite food: {props.faveFood}</li>
				<li>Love for walks (1-10): {props.walks}</li>
			</ul>
		</div>
	)
}

export default Pet;