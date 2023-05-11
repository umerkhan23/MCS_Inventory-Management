import React from 'react';
import { Doughnut} from 'react-chartjs-2';

class PieChart extends React.Component {
    constructor(props) {
      
      super(props);
      
      this.state = {
        loading: true,
        pieName: ['IT Equipment', 'Furniture', 'Electronics','Stationary','Accessories','Automobile','Miscellaneous'],
        piePrice: [100, 200, 300,50,80,30,40],
        chartData: {
          labels: ['IT Equipment', 'Furniture', 'Electronics','Stationary','Accessories','Automobile','Miscellaneous'],
          datasets: [
            {
              label: 'Product',
              backgroundColor: [
                'yellow',
                'skyblue',
                'orange',
                'brown',
                'green',
                'red',
                'purple',
              ],
              hoverBackgroundColor: [
                'yellow',
                'skyblue',
                'orange',
                'brown',
                'green',
                'red',
                'purple',
              ],
              data: [100, 200, 300,50,80,30,40]
            },
          ],
        },
      };
      
    }
     
    componentDidMount() {
      setTimeout(() => {
        this.setState({ loading: false });
        
        // Do something after the loading has finished
      }, 500);
      
    }

  
    render() {
      return (
        <div>
          {/* {console.log("newHello ",this.props.pieName )} */}
          
          <Doughnut
            data={this.state.chartData}
            options={{
              title: {
                display: true,
                text: 'Top 5 highest Price Product',
                fontSize: 10,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </div>
      );
    }
  }
  

export default PieChart;