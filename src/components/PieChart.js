import React from 'react';
import { VictoryPie } from 'victory';

const PieChart = ({data}) => (
	<VictoryPie data={data} />
);

export default PieChart;