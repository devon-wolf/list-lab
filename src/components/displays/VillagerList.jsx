import React from 'react';
import PropTypes from 'prop-types';

const VillagerList = ({ villagers }) => (
		<ul aria-label="villagers">
		LIST GOES HERE	
		</ul>
	);

VillagerList.propTypes = {
	villagers: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			image: PropTypes.string,
			phrase: PropTypes.string
		})
	)
};

export default VillagerList;
