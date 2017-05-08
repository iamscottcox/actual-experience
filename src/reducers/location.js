export const location = (state = {}, action) => {
	switch (action.type) {
		case 'SET_LOCATION':
			return {
				longitude: action.longitude,
				latitude: action.latitude,
			}
		default:
			return state;
	}
}