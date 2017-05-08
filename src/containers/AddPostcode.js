// External dependencies
import React from 'react';
import {connect} from 'react-redux';
// Local dependencies
import * as actions from '../actions';

let AddPostcode = ({dispatch}) => {
	let postcode;
	return (
		<form id="addPostcode" onSubmit={(e) => {
			e.preventDefault();
			if (postcode.value.length > 0) {
				dispatch(actions.setPostcode(postcode.value));
				postcode.value = '';
			}
		}}>
			<input type="text" id="addPostcode__name" ref={node => postcode = node}/>
			<button id="addPostcode__submitButton" type="submit">Submit</button>
		</form>
	)
};

AddPostcode = connect()(AddPostcode);

export default AddPostcode;