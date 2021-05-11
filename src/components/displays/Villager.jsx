import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ name, image, phrase }) => (
		<>
		<h3>{name}</h3>
		<img alt={name} src={image} />
		<p>{phrase}</p>	
		</>
	);

Villager.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	phrase: PropTypes.string.isRequired
};

export default Villager;
