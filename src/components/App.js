import React from 'react';

import AddPostcode from '../containers/AddPostcode';
import Results from '../containers/Results';
import TestButton from '../containers/TestButton';

const App = () => (
	<div id="App">
		<AddPostcode />
		<TestButton>
			Get State
		</TestButton>
		<Results />
	</div>
);

export default App;


