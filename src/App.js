import React, { Component } from 'react'
import {Cards , Charts, CountryPicker} from './Components'
import {fetchdata} from './api'
import styles from './App.module.css'

export class App extends Component {

    state ={
        data: {},
        country: ''
        
    }

    async componentDidMount(){
        const fetchedData = await fetchdata()
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country)=>{
        const fetchedCountry = await fetchdata(country)
        this.setState({data : fetchedCountry, country: country})
        
    }

    render() {

        const {data, country} = this.state

        return (
            <div className = {styles.container}>
                <h1 style={{color:'Gray', marginBottom: '5vh'}}>Covid-19 Real Time Data</h1>
                <Cards data = {data}></Cards>
                <CountryPicker handleCountryChange = {this.handleCountryChange}></CountryPicker>
                <h2 style={{color:'Gray'}}> Global growth</h2>
                <Charts data ={data} country ={country}></Charts>  
            </div>
        )
    }
}

export default App
