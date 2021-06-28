import React from 'react';
import PropTypes from 'prop-types';
import style from './VillagerDetail.css';

const VillagerDetail = ({ name, image, phrase }) => (
		<div role="villager-detail">
			<h3>{name}</h3>
			<img className={style.villagerImg} alt={name} src={image} />
			<p>{phrase}</p>	
		</div>
	);

VillagerDetail.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	phrase: PropTypes.string.isRequired
};

export default VillagerDetail;
