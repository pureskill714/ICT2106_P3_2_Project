
import React from "react"
import { Loading } from "../../Components/appCommon"
import DatapageLayout from "../PageLayout"
import { Pie, Bar, Line } from "react-chartjs-2";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useState } from 'react';



const PieChart = () => {
    const data = {
      labels:  ["In-progress", "Complete", "Not started"],
      datasets: [
        {
          label: "Project progression",
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          data: [ 20, 30, 45],
        },
      ],
    };
    return (
      <div className="col">
        <Pie data={data} style={{ height: "100px" }} />
        
      </div>
    );
    };

    const LineChart = () => {
        const [selectedLabel, setSelectedLabel] = useState('');
      
        const originalData = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Start Date',
              borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8e5ea2', '#3cba9f', '#e8c3b9', '#FF6384', '#36A2EB', '#FFCE56', '#8e5ea2', '#3cba9f', '#e8c3b9'],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8e5ea2', '#3cba9f', '#e8c3b9', '#FF6384', '#36A2EB', '#FFCE56', '#8e5ea2', '#3cba9f', '#e8c3b9'],
              data: [0, 10, 5, 2, 20, 30, 0, 10, 5, 2, 20, 30],
            },
          ],
        };
      
        const [data, setData] = useState(originalData);
      
        const handleLabelClick = (label) => {
          const index = data.labels.indexOf(label);
          const originalValue = originalData.datasets[0].data[index];
          const currentValue = data.datasets[0].data[index];
      
          if (currentValue !== 0) {
            const newData = {
              ...data,
              datasets: [
                {
                  ...data.datasets[0],
                  data: [
                    ...data.datasets[0].data.slice(0, index),
                    0,
                    ...data.datasets[0].data.slice(index + 1),
                  ],
                },
              ],
            };
      
            setData(newData);
          } else if (originalValue !== 0) {
            const newData = {
              ...data,
              datasets: [
                {
                  ...data.datasets[0],
                  data: [
                    ...data.datasets[0].data.slice(0, index),
                    originalValue,
                    ...data.datasets[0].data.slice(index + 1),
                  ],
                },
              ],
            };
      
            setData(newData);
          }
        };
      
        return (
          <div className="col">
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              {data.labels.map((label) => (
                <button
                  key={label}
                  onClick={() => handleLabelClick(label)}
                  style={{ backgroundColor: data.datasets[0].data[data.labels.indexOf(label)] === 0 ? 'lightgrey' : 'white' }}
                >
                  {label}
                </button>
              ))}
            </div>
            <Line data={data} style={{ height: '250px' }} />
          </div>
        );
      };
      

export default class Project extends React.Component {
    state = {
        content: null,
        headers: [],
        loading: true,
        settings: {},
        error: "",
    }

    settings = {
        title: "Project",
        primaryColor: "#a6192e",
        accentColor: "#94795d",
        textColor: "#ffffff",
        textColorInvert: "#606060",
        api: "/api/Project/",
        
    }

    async componentDidMount() {
        await this.getContent().then((content) => {
            console.log(content);
            this.setState({
                content: content,
            });
        })

        await this.getSettings().then((settings) => {
            console.log(settings);
            this.setState({
                settings: settings,
            });
        })

        this.setState({
            loading: false,
        })
    }

    getSettings = async () => {
        // fetches http://...:5001/api/User/Settings
        return fetch(this.settings.api + "Settings", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => {
            console.log(res);
            return res.json();
        })
    }

    getContent = async () => {
        return fetch(this.settings.api + "All", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => {
            console.log(res);
            //Res = {success: true, message: "Success", data: Array(3)}
            return res.json();
        });
    }

    update = async (data) => {
        console.log(data);
        return fetch(this.settings.api + "UpdateAndFetch/" + data.UserId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(async res => {
            return res.json();
        });
    }

    handleUpdate = async (data) => {
        await this.update(data).then((content) => {
            if (content.success) {
                this.setState({
                    error: "",
                })
                return true;
            } else {
                this.setState({
                    error: content.message,
                })
                return false;
            }
        })
    }

    requestRefresh = async () => {
        this.setState({
            loading: true,
        })
        await this.getContent().then((content) => {
            console.log(content);
            this.setState({
                content: content,
                loading: false,
            });
        })
    }

    requestError = async (error) => {
        this.setState({
            error: error,
        })
    }


    render() {
        if (this.state.loading) {
            return <Loading></Loading>
        } else {

            return (

                <div>

                    <Card>
                        <CardBody style={{ display: "flex", flexDirection: "row" }} className="pie-chart">
                            <div >
                                <PieChart/>
                            </div>
                            <div>
                                <LineChart/>
                            </div>

                           
                        </CardBody>
                        <DatapageLayout
                            settings={this.settings}
                            fieldSettings={this.state.settings.data.FieldSettings}
                            headers={this.state.settings.data.ColumnSettings}
                            data={this.state.content.data}
                            updateHandle={this.handleUpdate}
                            requestRefresh={this.requestRefresh}
                            error={this.state.error}
                            permissions={this.props.permissions}
                            requestError={this.requestError}
                        >

                        </DatapageLayout>
                    </Card>
                </div>
            )
        }
    }
}