export const fetchVillagers = async () => {
	const response = await fetch('https://ac-vill.herokuapp.com/villagers');
	const results = await response.json();

	return results.map(villager => ({
		id: villager._id,
		name: villager.name,
		image: villager.image,
		phrase: villager.phrase
	}));
}

// export const fetchVillagerByName = async () => {

// };