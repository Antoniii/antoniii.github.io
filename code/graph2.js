
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [2, 1, 3, 4],
    error_y: {
      type: 'data',
      symmetric: false,
      array: [0.1, 0.2, 0.1, 0.1],
      arrayminus: [0.2, 0.4, 1, 0.2]
    },
	error_x: {
      type: 'percent',
      value: 10
    },
	name: 'Blue Trace',
    type: 'scatter'
  }
  
  var trace2 = {
  x: [0, 1, 2, 3, 4, 5],
  y: [0, 1, 2, 3, 4, 5],
  name: 'Orange Trace',
  type: 'scatter'
};
  
var data = [trace1, trace2];

var layout = {
  title: 'IBM Stock Data',
  xaxis: {range: [0, 6],
		  title: {
				  text: "Month"
				}},
  yaxis: {range: [0, 6],
		 title: {
				  text: "Temprature"
				}},
  showlegend: true,
  legend: {
    x: 1,
    xanchor: 'right',
    y: 1
  }
};

Plotly.newPlot('myDiv', data, layout);
