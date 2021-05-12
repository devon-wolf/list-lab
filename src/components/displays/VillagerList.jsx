import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';
import style from './VillagerList.css';
import { Link } from 'react-router-dom';

const VillagerList = ({ villagers }) => (
		<ul className={style.villagerUl} aria-label="villagers">
			{villagers.map(villager => (
				<li
					className={style.villagerLi}
					key={villager.id}
				>
					<Link to={`/${villager.name.toLowerCase()}`}>
						<Villager 
							name={villager.name}
							image={villager.image}
							phrase={villager.phrase}
						/>
					</Link>
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
		}).isRequired,
	)
};

export default VillagerList;
