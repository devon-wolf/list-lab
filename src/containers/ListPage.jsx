import React, { Component } from 'react';
import style from './ListPage.css';
import VillagerList from '../components/displays/VillagerList';
import { fetchVillagers } from '../services/fetchVillagers';

export default class ListPage extends Component {
	state = {
		loading: true,
		villagers: [],
	}

	componentDidMount = async () => {
		const response = await fetchVillagers();
		this.setState({ villagers: response, loading: false });
	}

	render() {
		return (
			<div className={style.listPage}>
				<h2>Villagers</h2>
				{this.state.loading
					? 	<p>Loading!</p>
					: 	<VillagerList 
						villagers={this.state.villagers}
						/>
				}
				
			</div>
		)
	}
}
