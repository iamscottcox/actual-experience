// External dependencies
import {combineReducers} from 'redux';
// Local dependencies
import {postcode} from './postcode';
import {location} from './location';
import crimes from './crimes';

const crime_checker = combineReducers({
	postcode,
	location,
	crimes,
});

export default crime_checker;