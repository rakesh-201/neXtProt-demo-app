import React from 'react'
import { Line, Pie, Bar } from 'react-chartjs-2'
import { chartData } from '../assets/ChartData'

const Chart = () => {

    return (
        <div>
            <h3 class="mt-5 text-primary" >Bar Chart</h3>
            <Bar
                data={chartData}
            />
            <h3 class="mt-5 text-primary" >Line Chart</h3>
            <Line
                data={chartData}
            />
            <h3 class="mt-5 text-primary" >Pie Chart</h3>
            <Pie
                data={chartData}
            />
        </div>
    )
}

export default Chart
