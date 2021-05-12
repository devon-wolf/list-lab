import React from 'react';
import PropTypes from 'prop-types';
import style from './Villager.css';

const Villager = ({ name, image, phrase }) => (
		<>
		<h3>{name}</h3>
		<img className={style.villagerImg} alt={name} src={image} />
		<p>{phrase}</p>	
		</>
	);

Villager.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	phrase: PropTypes.string.isRequired
};

export default Villager;
