import React from 'react';

import AddPostcode from '../containers/AddPostcode';
import Results from '../containers/Results';
import TestButton from '../containers/TestButton';

const App = () => (
	<div id="App">
		<h1 className="text-center">Actual Experience Code Test</h1>
		<h4 className="text-center">Check for crime in your area</h4>
		<AddPostcode />
		{/*<TestButton>*/}
			{/*Get State*/}
		{/*</TestButton>*/}
		<Results />
	</div>
);

export default App;


