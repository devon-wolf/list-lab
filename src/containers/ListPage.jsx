import React, { Component } from 'react';
import style from './ListPage.css';
import VillagerList from '../components/displays/VillagerList';

export default class ListPage extends Component {
	render() {
		return (
			<div className={style.listPage}>
				<h2>Villagers</h2>
				<VillagerList 
					villagers={[
						{
							id: 1,
							name: 'test',
							image: 'fake',
							phrase: 'sure'
						}
					]}
				/>
			</div>
		)
	}
}
