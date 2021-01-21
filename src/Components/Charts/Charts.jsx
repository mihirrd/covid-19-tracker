import React, { Component } from 'react'
import { fetchDailyData } from '../../api'
import {Line} from 'react-chartjs-2'
import styles from './Charts.module.css'

export class Charts extends Component {

    state = {
        dailydata: []
    }

    async componentDidMount(){
        const dailydata = await fetchDailyData();
        this.setState({dailydata})

    }


    linechart = ()=>{
        const {dailydata} = this.state
        return(dailydata[0]?(
            <Line
                data = {{
                    labels: dailydata.map(({ date })=> date),
                    datasets: [{
                        data: dailydata.map(({ confirmed }) => confirmed),
                        labels: 'infected',
                        borderColor: 'blue',
                        fill: true
                    },{
                        data: dailydata.map(({ deaths }) => deaths),
                        labels: 'infected',
                        borderColor: 'red',
                        fill: true
                    }]
                }}
            />):null
        )
    }

    
    render() {
        const {dailydata} = this.state
        return (
            <div className = {styles.container}>
                {dailydata[0]?(<Line 
                data = {{
                    labels: dailydata.map(({ date })=> date),
                    datasets: [{
                        data: dailydata.map(({ confirmed }) => confirmed),
                        label: 'infected',
                        borderColor: 'blue',
                        fill: true
                    },{
                        data: dailydata.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        fill: true
                    }]
                }}
            />):null}
            </div>
        )
    }
}

export default Charts
