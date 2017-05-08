export const setPostcode = (postcode) => (dispatch, getState) => {
	new Promise(resolve => {
		dispatch({
			type: 'SET_POSTCODE',
			postcode
		});
		resolve(getState());
	})
		.then(
			response => {
				fetch(`http://api.postcodes.io/postcodes/${postcode}`)
					.then(response => response.json())
					.then(data => data.result)
					.then(result => {
						new Promise(resolve => {
							dispatch({
								type: 'SET_LOCATION',
								longitude: result.longitude,
								latitude: result.latitude,
							})
							resolve(getState());
						})
							.then(response => {
								const { longitude, latitude} = response.location;
								fetch(`https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}`)
									.then(response => response.json())
									.then(result => {
										dispatch({
											type: 'SET_CRIMES',
											crimes: result,
										})
										console.log('Request complete');
									})
							})
					})
			}
		)
};