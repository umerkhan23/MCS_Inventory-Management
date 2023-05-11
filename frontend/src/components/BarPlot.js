import React, { Component , useEffect } from 'react';
import Chart from 'chart.js/auto';

class BarPlot extends Component {
constructor(props) {

    super(props);
    this.state = {
      loading: true,
    }

  }


  chartRef = React.createRef();
  chartInstance = null;

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
      this.renderChart();
      // Do something after the loading has finished
    }, 500);

  }

  componentDidUpdate() {
    this.renderChart();
  }

  componentWillUnmount() {
    // Make sure to destroy the chart instance when the component is unmounted
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }

  renderChart() {
    const myChartRef = this.chartRef.current.getContext('2d');

    // Destroy the existing chart instance if it exists
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
    console.log("data ",this.props.uniqueBarPlot)
    this.chartInstance = new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: ['Laptop','PC','Monitor', 'Multi-Media', 'Printer', 'Scanner','Mouse','Keyboard','Router','Switch'],
        datasets: [
          {
            label: 'Products',

            data: [10, 15,20,25,30,35,40,45,50,80],
            backgroundColor: [
              '#8DB4E9',
              'orange',
              'skyblue',
              'brown',
              'green',
              'pink',
              'purple',
              'red',
              'yellow',
              'blue',




            ],
            // borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  render() {
    return <div> <canvas ref={this.chartRef} /></div>
  }
}

export default BarPlot;
