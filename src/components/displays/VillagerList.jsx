import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';
import style from './VillagerList.css';

const VillagerList = ({ villagers }) => (
		<ul className={style.villagerUl} aria-label="villagers">
			{villagers.map(villager => (
				<li key={villager.id} className={style.villagerLi}>
					<Villager 
						name={villager.name}
						image={villager.image}
						phrase={villager.phrase}
					/>
				</li>
			))}
		</ul>
	);

VillagerList.propTypes = {
	villagers: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			phrase: PropTypes.string.isRequired
		}).isRequired
	)
};

export default VillagerList;
