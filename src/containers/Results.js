import React from 'react';
import {connect} from 'react-redux';

import { VictoryPie, VictoryBar, VictoryLabel } from 'victory';

let Results = ({data}) => {
	return (
		<div id="results">
			<VictoryPie data={data} x="name" y="quantity" />
		</div>
	)
}

const _mapStateToProps = (state) => ({
	data: state.crimes.crimesPerCategory
});

Results = connect(_mapStateToProps)(Results);

export default Results;