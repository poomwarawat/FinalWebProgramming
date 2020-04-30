import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import API from "../../API/API";
let data = {
  labels: [],
  datasets: [
    {
      label: "Distance",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      barPercentage: 0.1,
      data: [],
    },
  ],
};
export default class MonthReport extends Component {
  state = {
    userId: this.props.userId,
    activitiesData: null,
  };
  componentDidMount = () => {
    let url = "/activities/" + this.state.userId;
    API.get(url).then((res) => {
      this.setState({ activitiesData: res.data });
    });
  };
  render() {
    const { activitiesData } = this.state;

    let date = [];
    let distance = [];
    if (activitiesData) {
      activitiesData.forEach((data) => {
        //date.push();
        let newDate = new Date(data.date.slice(0, 10));
        newDate.setDate(newDate.getDate() + 1);
        let x = newDate.toISOString().substring(0, 10);
        date.push(x);
        distance.push(data["sum(total_distance)"]);
      });
      data["labels"] = date;
      data["datasets"][0]["data"] = distance;
    }

    return (
      <div>
        <div>
          <h2>Runrena Stat</h2>
          <div className="b-chart">
            <Bar
              data={data}
              width={10}
              height={300}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                tooltips: {
                  displayColors: false,
                  titleFontSize: 16,
                  bodyFontSize: 14,
                  xPadding: 10,
                  yPadding: 10,
                  callbacks: {
                    label: (tooltipItem, data) => {
                      return `${tooltipItem.value} Km`;
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
