import React from 'react';
import {connect} from 'react-redux';

import {VictoryPie, VictoryBar, VictoryTheme, VictoryChart, VictoryAxis, VictoryLabel} from 'victory';

let Results = ({data}) => {
	if (data.length > 0) {
		return (
			<div id="results">
				<VictoryPie data={data}
							x="name"
							y="quantity"
							theme={VictoryTheme.material}
							width={600}
							height={400}
				/>
				<VictoryChart theme={VictoryTheme.material}
							  width={600}
							  height={400}
							  padding={{top: 50, right: 50, bottom: 150, left: 50}}
				>
					<VictoryAxis tickLabelComponent={<VictoryLabel angle={90} verticalAnchor="middle" textAnchor="start"/>} />
					<VictoryBar data={data}
								x="name"
								y="quantity"
								theme={VictoryTheme.material}
								labels={(datum) => datum.quantity}
								padding={20}
					/>
				</VictoryChart>
			</div>
		)
	} else {
		return (
			<div id="results"></div>
		)
	}
}

const _mapStateToProps = (state) => ({
	data: state.crimes.crimesPerCategory
});

Results = connect(_mapStateToProps)(Results);

export default Results;