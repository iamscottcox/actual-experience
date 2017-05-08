export const postcode = (state = '', action) => {
	switch (action.type) {
		case 'SET_POSTCODE':
			return action.postcode;
		default:
			return state;
	}
}