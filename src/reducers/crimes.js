import { combineReducers } from 'redux';

export const all = (state = [], action) => {
	switch (action.type) {
		case 'SET_CRIMES':
			return action.crimes;
		default:
			return state;
	}
}

export const crimesPerCategory = (state = [], action) => {
	switch (action.type) {
		case 'SET_CRIMES':
			let obj = {}
			let crimesPerCategory = []

			action.crimes.map(crime => {
				const { category } = crime;
				if (obj[category] > 0) {
					obj[category] += 1;
				} else {
					obj[category] = 1;
				}
			})

			Object.keys(obj).map((k) => {
				crimesPerCategory = [
					...crimesPerCategory,
					{
						name: k,
						quantity: obj[k]
					}
				]
			});

			return crimesPerCategory;
		default:
			return state;
	}
}

const crimes = combineReducers({
	all,
	crimesPerCategory,
});

export default crimes;

