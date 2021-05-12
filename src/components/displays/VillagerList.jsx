import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';
import style from './VillagerList.css';
import { Link } from 'react-router-dom';

const VillagerList = ({ villagers }) => (
		<ul className={style.villagerUl} aria-label="villagers">
			{villagers.map(villager => (
				<Link key={villager.id} to={`/${villager.name.toLowerCase()}`}>
					<li className={style.villagerLi}>
						<Villager 
							name={villager.name}
							image={villager.image}
							phrase={villager.phrase}
						/>
					</li>
				</Link>
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
