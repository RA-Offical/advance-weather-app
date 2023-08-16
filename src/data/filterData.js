export const filterHintList = (hintListData) => {
	return hintListData.map(({ name, lat, lon, state, country }, index) => {
		return { id: index, name, lat, lon, state, country };
	});
};
