import React, { Component } from 'react'
import Nevigator from '../component/Nevigator'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default class Explorer extends Component {
    render() {
        const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
        {name: 'Page B', uv: 500, pv: 2400, amt: 2400},
        {name: 'Page C', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page D', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page E', uv: 800, pv: 2400, amt: 2400},
        {name: 'Page F', uv: 200, pv: 2400, amt: 2400},
        {name: 'Page G', uv: 500, pv: 2400, amt: 2400},
        {name: 'Page H', uv: 700, pv: 2400, amt: 2400},
        {name: 'Page I', uv: 300, pv: 2400, amt: 2400},
        {name: 'Page J', uv: 200, pv: 2400, amt: 2400}];
        return (
            <div className="row">
                <div className="col-sm-3 col-12">
                    <Nevigator></Nevigator>
                </div>
                <div className="col-sm-9 col-12">
                <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                </div>
            </div>
        )
    }
}
